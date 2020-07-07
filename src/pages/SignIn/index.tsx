import React from 'react';
import {
  Image, View, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container, Title, ForgotPassword, ForgotPasswordText,
  CreateAccountButton, CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Faça seu logon</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button>Entrar</Button>

          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
    <CreateAccountButton>
      <Icon name="log-in" size={20} color="#ff9900" />
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
  </>
);

export default SignIn;