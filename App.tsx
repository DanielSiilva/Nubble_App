import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Icon name="eyeOn" color="gray5" size={50} />
          <Icon name="chevronRight" size={50} />
          <Icon name="heartFill" color="buttonPrimary" />
          <Icon name="profile" size={50} />
          <Icon name="profileFill" size={50} />
          <Icon name="heart" size={50} />
          <Icon name="bellOn" color="carrotSecondary" size={50} />
          <Icon name="newPost" size={50} />
          <Icon name="camera" size={50} />
          <Icon name="chat" size={50} />
          <Icon name="chatOn" color="error" size={50} />
          <Icon name="flashOff" size={50} />
          <Icon name="flashOn" size={50} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
