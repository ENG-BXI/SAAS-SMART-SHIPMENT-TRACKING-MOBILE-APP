import {Slot} from 'expo-router';
import React from 'react';
import {View} from 'react-native';

const AppLayout = () => {
  return (
    <View className='px-4'>
      <Slot />
    </View>
  );
};

export default AppLayout;
