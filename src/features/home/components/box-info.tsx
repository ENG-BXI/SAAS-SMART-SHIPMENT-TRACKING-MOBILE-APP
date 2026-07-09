import {Text} from '@/components/ui/text';
import React, {ReactNode} from 'react';
import {View} from 'react-native';

interface BoxInfoProps {
  icon: ReactNode;
  name: string;
  data: string;
}
function BoxInfo({data, icon, name: text}: BoxInfoProps) {
  return (
    <View className='flex-1 min-w-15'>
      <View className='bg-[#F5FBF5] dark:bg-slate-900 border border-green-200 dark:border-slate-700 py-4 justify-center items-center rounded-2xl mb-1'>{icon}</View>
      <Text className='text-center font-bold mt-1 text-sm text-nowrap text-slate-700 dark:text-slate-200'>{text}</Text>
      <Text className='text-center font-bold text-black dark:text-white'>{data}</Text>
    </View>
  );
}

export default BoxInfo;
