import CustomInput from '@/components/custom-input';
import {Button} from '@/components/ui/button';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Feather from '@expo/vector-icons/Feather';
import {router} from 'expo-router';
import {useTranslation} from 'react-i18next';
import {useLogin} from './api';
import AntDesign from '@expo/vector-icons/AntDesign';
import {FormData, loginFormSchema} from './type';

const Login = () => {
  const {t} = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const {control, handleSubmit} = useForm<FormData>({
    resolver: zodResolver(loginFormSchema)
  });
  const {mutate, isPending} = useLogin();
  function onSubmit(data: FormData) {
    mutate(data, {
      onSuccess: () => {
        router.replace('/home');
      },
      onError: (error: any) => {
        const message = error?.response?.data?.message ?? t('auth.login.errors.unexpected');
        setError(message);
      }
    });
  }
  return (
    <View className='h-screen justify px-4 bg-white dark:bg-slate-950'>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} keyboardShouldPersistTaps='handled'>
          <Text className='text-3xl font-bold text-black dark:text-white'>{t('auth.login.title')}</Text>
          <Text className='text-xl text-gray-400 dark:text-slate-400 mt-2 mb-6'>{t('auth.login.subtitle')}</Text>
          <Controller
            name='email'
            control={control}
            render={({field, fieldState: {invalid, error}}) => {
              return <CustomInput label={t('auth.login.fields.email')} field={field} props={{keyboardType: 'email-address'}} invalid={invalid} error={error?.message} />;
            }}
          />
          <Controller
            name='password'
            control={control}
            render={({field, fieldState: {invalid, error}}) => {
              return (
                <CustomInput
                  label={t('auth.login.fields.password')}
                  field={field}
                  invalid={invalid}
                  error={error?.message}
                  isPassword={!showPassword}
                  subfixIcon={
                    <Pressable onPress={() => setShowPassword(pre => !pre)}>
                      <View>
                        <Feather name='eye' size={20} color='#1B8354' />
                      </View>
                    </Pressable>
                  }
                />
              );
            }}
          />
          {error && <Text className='text-sm text-red-500'>{error}</Text>}
          <Button disabled={isPending} onPress={handleSubmit(onSubmit)} variant={'primary'} size={'lg'} className='mt-5'>
            {isPending ? <AntDesign name='loading-3-quarters' className='animate-spin' size={24} color='black' /> : <Text className='text-white'>{t('auth.login.button.continue')}</Text>}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
