import React, {useEffect, useState} from 'react';
import {DefaultTheme, Stack, ThemeProvider} from 'expo-router';
import '../global.css';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PortalHost} from '@rn-primitives/portal';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {initI18n} from '@/i18n';
import {ThemeModeProvider} from '../hooks/use-theme-mode';
import { useLanguage } from '@/hooks/useLanguage';

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const {language:lng} = useLanguage();
  useEffect(() => {
      setLanguage(lng as 'en' | 'ar');
  },[lng])
  useEffect(() => {
    initI18n().then(lang => {
      setLanguage(lang);
      setReady(true);
    });
  }, []);

  if (!ready) {
    return null;
  }

  const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}});
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    }
  };
  return (
    <SafeAreaView style={{direction:language=='ar'?'rtl':'ltr'}} className='flex-1 container bg-background dark:bg-slate-950'>
      <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
          <ThemeProvider value={MyTheme}>
            <Stack screenOptions={{headerShown: false, animation: 'slide_from_right'}} />
            <PortalHost />
          </ThemeProvider>
        </ThemeModeProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
