import React from 'react';

import {Post} from '@domain';

import {Box, TouchableOpacityBox, Icon, Text, IconProps} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    //Todo: implemetar like
  }

  function navigateToComments() {
    //Todo: implemetar navegação
  }

  function favoritePost() {
    //Todo: implementar favorite Post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, marked, text, icon}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s24">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
