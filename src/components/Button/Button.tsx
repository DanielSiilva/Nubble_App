import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProsp {
  title: string;
}

export function Button({title}: ButtonProsp) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
