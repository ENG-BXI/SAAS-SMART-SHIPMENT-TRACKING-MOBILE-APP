import Ionicons from '@expo/vector-icons/Ionicons';
import {Slot} from 'expo-router';
import {Tabs} from 'expo-router';
import React from 'react';
import {View} from 'react-native';

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {paddingHorizontal: 16},
        tabBarActiveTintColor: 'green',
        tabBarStyle: {
          height: 55,
          paddingBottom: 6,
          paddingTop: 6
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
    </Tabs>
  );
};

export default AppLayout;
