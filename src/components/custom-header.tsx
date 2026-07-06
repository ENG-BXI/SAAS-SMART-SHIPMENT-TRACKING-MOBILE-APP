import React from 'react';
import {View} from 'react-native';
import {Text} from './ui/text';
import {cn} from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router';

interface CustomHeaderProps {
  title: string;
  hasBack?: boolean;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
const CustomHeader = ({title, hasBack = false, description, className, titleClassName, descriptionClassName}: CustomHeaderProps) => {
  return (
    <View className='flex-row items-center'>
      {hasBack && (
        <Ionicons
          onPress={() => {
            router.back();
          }}
          name='arrow-back'
          size={24}
          color='black'
        />
      )}
      <View className={cn('flex-1 items-center pt-4', hasBack && 'pe-6', className)}>
        <Text className={cn('font-bold text-xl', titleClassName)}>{title}</Text>
        {description && <Text className={cn('font-bold text-lg', descriptionClassName)}>{description}</Text>}
      </View>
    </View>
  );
};

export default CustomHeader;
