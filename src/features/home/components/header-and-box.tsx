import {Text} from '@/components/ui/text';
import {Image} from 'expo-image';
import React, {memo} from 'react';
import {View} from 'react-native';

function HeaderAndBox() {
  return (
    <View className='flex-row items-center justify-between'>
      <View>
        <Text className='text-2xl font-bold'>Good Morning, Abdo</Text>
        <Text className='text-xl '>Company Name</Text>
      </View>
      <Image source={require('@/assets/images/home-box.png')} style={{width: 250, height: 250}} />
    </View>
  );
}

export default memo(HeaderAndBox);
