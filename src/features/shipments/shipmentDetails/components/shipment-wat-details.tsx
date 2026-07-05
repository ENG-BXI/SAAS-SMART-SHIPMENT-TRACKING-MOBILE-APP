import {Card, CardContent} from '@/components/ui/card';
import BoxInfo from '@/features/home/components/box-info';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {boxesData} from '../type';
import {Text} from '@/components/ui/text';

function ShipmentWatDetails() {
  return (
    <Card className='bg-gray-200 rounded-3xl'>
      <CardContent className='p-4'>
        <View className='flex-row items-center gap-6'>
          <View className='gap-1'>
            <Text className='text-xl font-bold'>01:20 AM</Text>
            <Text className='text-lg text-gray-500 font-bold'>Mukalla</Text>
          </View>
          <View className='items-center flex-1 gap-2'>
            <Text className='font-bold text-gray-500 text-xl'>Mukalla Way</Text>
            <View className='flex-row items-center'>
              <View className='w-3 h-3 rounded-full border' />
              <View className='h-1 flex-1 border-b-2 border-dashed' />
              <View className='w-3 h-3 rounded-full border bg-red-500' />
            </View>
          </View>
          <View className='gap-1 items-end'>
            <Text className='text-xl font-bold'>02:12 AM</Text>
            <Text className='text-lg text-gray-500 font-bold'>Seiyun</Text>
          </View>
        </View>
        <View className='flex-row flex-wrap gap-4 justify-between mt-6'>
          {boxesData.map(box => {
            return <BoxInfo key={box.name} {...box} />;
          })}
        </View>
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentWatDetails);
