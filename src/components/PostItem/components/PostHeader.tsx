import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }
  return (
    <Pressable onPress={navigateProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageUrl={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
