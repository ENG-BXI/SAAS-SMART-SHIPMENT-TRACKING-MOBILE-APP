import {Text} from '@/components/ui/text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Zocial from '@expo/vector-icons/Zocial';
import React, {memo} from 'react';
import {Linking, Pressable, View} from 'react-native';

function HelpCenter() {
  const phoneNumber = '+96777935953';
  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <Pressable onPress={handleCall} className='flex-row gap-4 items-center p-2 border border-gray-300 dark:border-slate-700 rounded-3xl mt-4 bg-white dark:bg-slate-950'>
      <View className='p-3 bg-[#F5FBF5] dark:bg-slate-800 rounded-xl'>
        <Zocial name='call' size={20} color='#1B8354' />
      </View>
      <View className='flex-1 gap-1'>
        <Text className='text-xl font-bold text-black dark:text-white'>Help Center</Text>
        <Text className='text-slate-600 dark:text-slate-300'>Call Company For Help</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={24} color='#1B8354' />
    </Pressable>
  );
}

export default memo(HelpCenter);
