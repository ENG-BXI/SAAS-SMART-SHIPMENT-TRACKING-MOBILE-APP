import React from 'react';
import {View} from 'react-native';
import {Text} from './ui/text';
import {cn} from '@/lib/utils';
interface CustomHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
const CustomHeader = ({title, description, className, titleClassName, descriptionClassName}: CustomHeaderProps) => {
  return (
    <View className={cn('items-center pt-4', className)}>
      <Text className={cn('font-bold text-xl', titleClassName)}>{title}</Text>
      {description && <Text className={cn('font-bold text-lg', descriptionClassName)}>{description}</Text>}
    </View>
  );
};

export default CustomHeader;
