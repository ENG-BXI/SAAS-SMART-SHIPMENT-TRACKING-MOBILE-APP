import CustomHeader from '@/components/custom-header';
import CustomInput from '@/components/custom-input';
import {Button} from '@/components/ui/button';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View} from 'react-native';
import {z} from 'zod';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Feather from '@expo/vector-icons/Feather';
import {router} from 'expo-router';
import {useLogin} from './api';
import AntDesign from '@expo/vector-icons/AntDesign';
import {FormData, loginFormSchema} from './type';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const {control, handleSubmit} = useForm<FormData>({
    resolver: zodResolver(loginFormSchema)
  });
  const {mutate, isPending} = useLogin();
  function onSubmit(data: FormData) {
    mutate(data, {
      onSuccess: s => {
        router.replace('/home');
      },
      onError: (error: any) => {
        const message = error?.response?.data?.message ?? 'حدث خطأ غير متوقع';
        setError(message);
      }
    });
  }
  return (
    <View className='h-screen justify px-4'>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} keyboardShouldPersistTaps='handled'>
          <Text className='text-3xl font-bold'>Login</Text>
          <Text className='text-xl text-gray-400 mt-2 mb-6'>Enter your email and password to log in.</Text>
          <Controller
            name='email'
            control={control}
            render={({field, fieldState: {invalid, error}}) => {
              return <CustomInput label='Email' field={field} props={{keyboardType: 'email-address'}} invalid={invalid} error={error?.message} />;
            }}
          />
          <Controller
            name='password'
            control={control}
            render={({field, fieldState: {invalid, error}}) => {
              return (
                <CustomInput
                  label='Password'
                  field={field}
                  invalid={invalid}
                  error={error?.message}
                  isPassword={!showPassword}
                  subfixIcon={
                    <Pressable onPress={() => setShowPassword(pre => !pre)}>
                      <View>
                        <Feather name='eye' size={20} color='green' />
                      </View>
                    </Pressable>
                  }
                />
              );
            }}
          />
          {error && <Text className='text-sm text-red-500'>{error}</Text>}
          <Button disabled={isPending} onPress={handleSubmit(onSubmit)} variant={'primary'} size={'lg'} className='mt-5'>
            {isPending ? <AntDesign name='loading-3-quarters' className='animate-spin' size={24} color='black' /> : <Text className='text-white'>Continue</Text>}
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
