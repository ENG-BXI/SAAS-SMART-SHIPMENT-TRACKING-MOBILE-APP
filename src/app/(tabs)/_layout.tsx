import Ionicons from '@expo/vector-icons/Ionicons';
import {Tabs} from 'expo-router';
import {useColorScheme} from 'nativewind';
import React from 'react';

const AppLayout = () => {
  const nativeScheme = useColorScheme();
  const isDark = nativeScheme.colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          paddingHorizontal: 16,
          backgroundColor: isDark ? '#020617' : '#f8fafc'
        },
        tabBarActiveTintColor: isDark ? '#a3e635' : '#1B8354',
        tabBarInactiveTintColor: isDark ? '#94a3b8' : '#64748b',
        tabBarStyle: {
          height: 55,
          paddingBottom: 6,
          paddingTop: 6,
          backgroundColor: isDark ? '#020617' : '#ffffff',
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => <Ionicons name='home-outline' size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name='shipments'
        options={{
          title: 'shipments',
          tabBarIcon: ({color, size}) => <Ionicons name='cube' size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name='setting'
        options={{
          title: 'setting',
          tabBarIcon: ({color, size}) => <Ionicons name='settings' size={size} color={color} />
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
