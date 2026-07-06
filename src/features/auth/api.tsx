import {AUTH, DRIVER, LOGIN} from '@/api/constant';
import {api, TOKEN_KEY} from '@/api/setup';
import {useMutation} from '@tanstack/react-query';
import * as SecureStore from 'expo-secure-store';
import { loginFormSchema } from './type';

export const LOGIN_KEY = ['login'];

type TLogin = {
  email: string;
  password: string;
};

type TLoginResponse = {
  status: number;
  message: string;
  data: string;
};
async function login(data: TLogin) {
  const result = loginFormSchema.safeParse(data);
  if (!result.success) {
    throw new Error('Invalid login data');
  }
  return await api.post<TLoginResponse>(`${AUTH}/${LOGIN}/${DRIVER}`, data);
}

export function useLogin() {
  return useMutation({
    mutationKey: LOGIN_KEY,
    mutationFn: login,
    onSuccess: data => {
      SecureStore.setItem(TOKEN_KEY, data.data.data);
    }
  });
}
