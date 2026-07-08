import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL;
if (!baseURL) throw new Error('BASE URL IS NOT FOUND IN .ENV');
export const TOKEN_KEY = 'token';
export const api = axios.create({baseURL: `${baseURL}/api/v1`});

api.interceptors.request.use(
  async config => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.error('ERROR====================================');
    console.table(error);
    console.error('ERROR====================================');
    return Promise.reject(error);
  }
);
