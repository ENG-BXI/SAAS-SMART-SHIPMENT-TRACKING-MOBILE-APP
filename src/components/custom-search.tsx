import {View} from 'react-native';
import {Input} from './ui/input';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from 'react';

export default function CustomSearch() {
  return (
    <View className='mt-6 relative'>
      <Input className='border-gray-500 bg-white h-11 rounded-2xl ps-10' placeholder='Search Shipment' />
      <EvilIcons name='search' size={24} className='absolute top-1/2 left-2 -translate-y-1/2' />
    </View>
  );
}
