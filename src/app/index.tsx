import {router} from 'expo-router';
import {useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import {TOKEN_KEY} from '@/api/setup';
import {ONBOARDING_KEY} from './onboarding';

export default function Index() {
  useEffect(() => {
    const token = SecureStore.getItem(TOKEN_KEY);
    if (token) {
      router.replace('/login');
    } else {
      const isOnboarding = SecureStore.getItem(ONBOARDING_KEY);
      if (isOnboarding) router.replace('/login');
      else router.replace('/onboarding');
    }
  }, []);
  return null;
}
