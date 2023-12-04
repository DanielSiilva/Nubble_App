import React from 'react';

import {Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  return (
    <Screen canGoBack>
      <Box alignContent="center">
        <ProfileAvatar imageUrl="exemplo" size={64} borderRadius={24} />
        <Text preset="headingMedium" bold />
        <Text>@</Text>
      </Box>
    </Screen>
  );
}
