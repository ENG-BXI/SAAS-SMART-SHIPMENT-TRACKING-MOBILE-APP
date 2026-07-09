import {View} from 'react-native';
import {Text} from '@/components/ui/text';
import React from 'react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function SettingSection({title, children}: Props) {
  return (
    <View className='mb-9'>
      {title && <Text className='text-[13px] text-[#6D6D72] dark:text-slate-400 px-5 mb-2 uppercase'>{title}</Text>}

      <View className='bg-white dark:bg-slate-900 rounded-2xl overflow-hidden mx-4'>{children}</View>
    </View>
  );
}
