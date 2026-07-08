import {Card, CardContent} from '@/components/ui/card';
import BoxInfo from '@/features/home/components/box-info';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {Text} from '@/components/ui/text';
import {formattedDayMonth, formattedTime} from '@/lib/utils';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

interface ShipmentWatDetailsProps {
  launchDate?: string;
  pointLength?: number;
  status?: string;
  currentPointName?: string;
  endDate?: string;
  fromCity?: string;
  toCity?: string;
  wayName?: string;
}
function ShipmentWatDetails({endDate, status, pointLength, currentPointName, fromCity, launchDate, wayName, toCity}: ShipmentWatDetailsProps) {
  const boxesData = [
    {
      icon: <Feather name='box' size={20} color='green' />,
      name: 'Launch Date',
      data: formattedDayMonth(launchDate ?? '')
    },
    {
      icon: <Feather name='check-circle' size={20} color='green' />,
      name: 'Current Point',
      data: `${currentPointName}`
    },
    {
      icon: <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='green' />,
      name: 'Points',
      data: `${pointLength} Point`
    },
    {
      icon: <MaterialCommunityIcons name='progress-star' size={20} color='green' />,
      name: 'Status',
      data: `${status}`
    }
  ];
  return (
    <Card className='bg-gray-200 rounded-3xl'>
      <CardContent className='p-4'>
        <View className='flex-row items-center gap-6'>
          <View className='gap-1'>
            <Text className='text-xl font-bold'>{formattedTime(launchDate!)}</Text>
            <Text className='text-xl font-bold'>{formattedDayMonth(launchDate!)}</Text>
            <Text className='text-lg text-gray-500 font-bold'>{fromCity}</Text>
          </View>
          <View className='items-center flex-1 gap-2'>
            <Text className='font-bold text-gray-500 text-xl text-nowrap'>{wayName}</Text>
            <View className='flex-row items-center'>
              <View className='w-3 h-3 rounded-full border' />
              <View className='h-1 flex-1 border-b-2 border-dashed' />
              <View className='w-3 h-3 rounded-full border bg-red-500' />
            </View>
          </View>
          <View className='gap-1 items-end'>
            <Text className='text-xl font-bold'>{endDate ? formattedTime(endDate) : '-'}</Text>
            <Text className='text-xl font-bold'>{endDate ? formattedDayMonth(endDate) : 'Arrival'}</Text>
            <Text className='text-lg text-gray-500 font-bold'>{toCity}</Text>
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
