import React from 'react';
import {DefaultTheme, Stack, ThemeProvider} from 'expo-router';
import '../global.css';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function RootLayout() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    }
  };
  return (
    <SafeAreaView className='flex-1 container'>
      <ThemeProvider value={MyTheme}>
        <Stack screenOptions={{headerShown: false}} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
