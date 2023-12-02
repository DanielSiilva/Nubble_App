import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToast} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  postAuthorId,
  userId,
}: Props) {
  const {showToast} = useToast();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({message: 'Comentario deletado'});
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Dseje excluir o comentário?', 'precionse confirma', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }
  return (
    <Pressable disabled={!isAllowToDelete} onPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
