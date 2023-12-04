import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {error, loading, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}

      {user && (
        <Box alignContent="center">
          <ProfileAvatar
            imageUrl={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
