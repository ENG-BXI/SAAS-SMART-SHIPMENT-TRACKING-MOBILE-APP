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
    <View className='min-w-20'>
      <View className='bg-[#F5FBF5] border border-green-200 py-4 justify-center items-center rounded-2xl mb-1'>{icon}</View>
      <Text className='text-center font-bold'>{text}</Text>
      <Text className='text-center font-bold'>{data}</Text>
    </View>
  );
}

export default BoxInfo;
