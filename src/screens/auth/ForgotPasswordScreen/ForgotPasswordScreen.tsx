import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

type ScreeProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreeProps) {
  function submitForm() {
    navigation.navigate('SuccessScreen', {
      title: `Enviamos as intruções para eu ${'/n'} e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar a sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen>
      <Text preset="headingLarge" mb="s16">
        esqueci minha senha
      </Text>
      <Text>
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
