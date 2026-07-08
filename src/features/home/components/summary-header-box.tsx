import {Text} from '@/components/ui/text';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {router} from 'expo-router';
import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
interface SummaryHeaderBoxProps {
  id: string;
  currentPoint?: string;
  way?: {
    name: string;
    points: {
      id: string;
      lat: string;
      lng: string;
      name: string;
      order: number;
      wayId: string;
    }[];
  };
  shipmentNumber?: string;
  isCompleted?: boolean;
  isPaused?: boolean;
}
function SummaryHeaderBox({id, isCompleted, isPaused, currentPoint, way, shipmentNumber}: SummaryHeaderBoxProps) {
  return (
    <View>
      <View className='bg-white flex-row justify-around rounded-xl px-4 py-2 relative -top-3 z-10'>
        <View className='flex-row items-center gap-3'>
          <MaterialIcons name='my-location' size={35} />
          <View>
            <Text>Current point</Text>
            <Text className='font-bold text-xl'>{currentPoint}</Text>
          </View>
        </View>
        <View className='w-0.5 bg-gray-100 h-3/4 my-auto' />
        <View className='flex-row items-center gap-3'>
          <FontAwesome6 name='route' size={30} color='black' />
          <View>
            <Text>Way Name</Text>
            <Text className='font-bold text-xl'>{way?.name}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          elevation: 10
        }}
        className='flex-row gap-2 items-center bg-[#DAF1DB] w-full px-4 py-2 rounded-2xl relative -top-8 pt-7'
      >
        <FontAwesome6 name='award' size={20} color='black' />
        <Text className='flex-1'>Shipment Details</Text>
        <Pressable
          onPress={() => {
            if (shipmentNumber)
              router.push({
                pathname: '/shipments/[id]',
                params: {
                  id,
                  data: JSON.stringify({way, currentPoint: currentPoint, isCompleted, isPaused})
                }
              });
          }}
        >
          <MaterialIcons name='keyboard-arrow-right' size={24} />
        </Pressable>
      </View>
    </View>
  );
}

export default memo(SummaryHeaderBox);
