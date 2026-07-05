import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {Text} from '@/components/ui/text';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';

function PointProgress() {
  return (
    <Card className='bg-gray-200 rounded-3xl'>
      <CardContent className='flex flex-row items-center gap-6 p-4'>
        <View className='flex-1 gap-3'>
          <View className='flex-row items-center gap-3'>
            <Text className='text-lg font-bold'>Progress</Text>
            <Text className='text-lg font-bold'>5%</Text>
          </View>
          <Progress value={10} className=' bg-gray-300' indicatorClassName='bg-custom-primary-color' />
        </View>
        <View className='items-center'>
          <Text className='font-bold text-lg'>8/12</Text>
          <Text className='text-sm'>Stops Complete</Text>
          <Text className='text-sm'>7 Reminder Point</Text>
        </View>
      </CardContent>
    </Card>
  );
}

export default memo(PointProgress);
