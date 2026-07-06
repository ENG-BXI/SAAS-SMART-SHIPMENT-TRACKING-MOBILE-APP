import React from 'react';
import {DefaultTheme, Stack, ThemeProvider} from 'expo-router';
import '../global.css';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PortalHost} from '@rn-primitives/portal';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function RootLayout() {
  const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}});
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    }
  };
  return (
    <SafeAreaView className='flex-1 container'>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={MyTheme}>
          <Stack screenOptions={{headerShown: false}} />
          <PortalHost />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
