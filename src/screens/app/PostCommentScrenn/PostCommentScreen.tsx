import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

import {usePostCommentList} from '../../../domain/PostComment/useCases/usePostCommentList';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {list} = usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
