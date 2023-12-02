import React from 'react';

import {ToasProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';

import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToasProvider>
          <Router />
          <Toast />
        </ToasProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
