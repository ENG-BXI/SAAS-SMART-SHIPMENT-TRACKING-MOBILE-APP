import React from 'react';
import {View} from 'react-native';
import {Text} from './ui/text';
import {cn} from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router';
import {useColorScheme} from 'nativewind';
import {useLanguage} from '@/hooks/useLanguage';

interface CustomHeaderProps {
  title: string;
  hasBack?: boolean;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
const CustomHeader = ({title, hasBack = false, description, className, titleClassName, descriptionClassName}: CustomHeaderProps) => {
  const nativeScheme = useColorScheme();
  const isDark = nativeScheme.colorScheme === 'dark';
  const {isRtl} = useLanguage();

  return (
    <View className={cn('flex-row pt-4 items-center')}>
      {hasBack && (
        <Ionicons
          onPress={() => {
            router.back();
          }}
          name={isRtl ? 'arrow-forward' : 'arrow-back'}
          size={24}
          color={isDark ? 'white' : 'black'}
        />
      )}
      <View className={cn('flex-1 items-center', hasBack && 'pe-6', className)}>
        <Text className={cn('font-bold text-xl text-center text-slate-900 dark:text-white', titleClassName)}>{title}</Text>
        {description && <Text className={cn('font-bold text-center text-lg text-slate-600 dark:text-slate-300', descriptionClassName)}>{description}</Text>}
      </View>
    </View>
  );
};

export default CustomHeader;
