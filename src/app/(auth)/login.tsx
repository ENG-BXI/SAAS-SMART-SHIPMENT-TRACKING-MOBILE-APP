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

const formSchema = z.object({
  email: z.email('Email Is Required').min(3, 'Email Must be Greater Than 3 Letter '),
  password: z.string('Password Is Required').min(8, 'Password Must be Greater Than 8 Letter').max(100, 'Password Must be Less Than 100 Letter')
});
type FormData = z.infer<typeof formSchema>;
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {control, handleSubmit} = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  function onSubmit(data: FormData) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    router.replace('/home');
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
          <Button onPress={handleSubmit(onSubmit)} variant={'primary'} size={'lg'} className='mt-5'>
            <Text className='text-white'>Continue</Text>
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
