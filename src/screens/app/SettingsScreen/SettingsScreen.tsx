import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Screen, Text} from '@components';

/* eslint-disable @typescript-eslint/no-unused-vars */
export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}