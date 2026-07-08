import { TOKEN_KEY } from '@/api/setup';
import {router} from 'expo-router';
import {useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import {ONBOARDING_KEY} from './onboarding';

export default function Index() {
  useEffect(() => {
    const token = SecureStore.getItem(TOKEN_KEY);
    if (token) {
      router.replace('/home');
    } else {
      const isOnboarding = SecureStore.getItem(ONBOARDING_KEY);
      if (isOnboarding) router.replace('/login');
      else router.replace('/onboarding');
    }
  }, []);
  return null;
}
