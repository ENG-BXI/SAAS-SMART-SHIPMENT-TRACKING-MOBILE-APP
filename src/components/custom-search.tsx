import {View} from 'react-native';
import {Input} from './ui/input';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from 'react';
import {useColorScheme} from 'nativewind';
import {useLanguage} from '@/hooks/useLanguage';
import {useTranslation} from 'react-i18next';
interface CustomSearchProps {
  value?: string;
  setValue: (val: string) => void;
}
export default function CustomSearch({setValue, value}: CustomSearchProps) {
  const nativeScheme = useColorScheme();
  const isDark = nativeScheme.colorScheme === 'dark';
  const {isRtl} = useLanguage();
  const {t} = useTranslation();

  return (
    <View className='mt-6 relative'>
      <Input value={value} onChangeText={val => setValue(val)} className={`border-gray-500 bg-white dark:bg-slate-950 h-11 rounded-2xl ${isRtl ? 'pr-10' : 'pl-10'} dark:text-white`} placeholder={t('shipments.searchPlaceholder')} placeholderTextColor={isDark ? 'white' : 'gray'} />
      <EvilIcons name='search' color={isDark ? 'white' : 'gray'} size={24} className={`absolute top-1/2 ${isRtl ? 'right-2' : 'left-2'} -translate-y-1/2 text-slate-500 dark:text-slate-300`} />
    </View>
  );
}
