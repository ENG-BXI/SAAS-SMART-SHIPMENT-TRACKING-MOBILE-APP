import React from 'react';
import {View} from 'react-native';
import {Text} from './ui/text';
interface CustomHeaderProps {
  title: string;
}
const CustomHeader = ({title}: CustomHeaderProps) => {
  return (
    <View className='items-center py-4'>
      <Text className='font-bold text-xl'>{title}</Text>
    </View>
  );
};

export default CustomHeader;
