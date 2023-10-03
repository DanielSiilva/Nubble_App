import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/Icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/Icons/EyeOnIcon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" loading />

          <Button disabled preset="outline" title="Lading" />

          <EyeOffIcon size={20} color="#Ffff" />
          <EyeOnIcon size={20} color="red" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
