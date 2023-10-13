import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from './src/theme/theme';
import {Routes} from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
