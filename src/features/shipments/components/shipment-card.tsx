import {Text} from '@/components/ui/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {Pressable, View} from 'react-native';
import {ShipmentCardProps} from '../type';
import {router} from 'expo-router';

function ShipmentCard({shipmentNumber, routeName, numberOfPoint, startTime, endTime, fromCity, toCity}: ShipmentCardProps) {
  return (
    <View className='bg-gray-200 p-3 rounded-3xl overflow-hidden shadow-md'>
      {/* Header */}
      <View className='bg-black justify-around items-start h-24 px-4 py-3 rounded-2xl'>
        <View className='bg-orange-200 px-3 py-1 rounded-full'>
          <Text className='text-orange-600 text-xs font-semibold'>{routeName}</Text>
        </View>
        <Text className='text-white text-xl font-bold'>Shipment #{shipmentNumber}</Text>
      </View>

      {/* Body */}
      <View className='px-4 py-4'>
        {/* Time Row */}
        <View className='flex-row justify-between items-center'>
          <Text className='text-black font-semibold'>{startTime}</Text>
          <Text className='text-black font-semibold'>{endTime}</Text>
        </View>

        {/* Route */}
        <View className='flex-row items-center justify-between mt-3'>
          {/* From */}
          <View className='items-start'>
            <Text className='text-gray-500 font-bold'>{fromCity}</Text>
          </View>

          {/* Line */}
          <View className='w-1/2 mx-3 flex-row items-center'>
            <View className='flex-1 border-t border-dashed border-gray-400' />
            <View className='w-2 h-2 bg-orange-500 rounded-full mx-1' />
          </View>

          {/* To */}
          <View className='items-end'>
            <Text className='text-gray-500 font-bold'>{toCity}</Text>
          </View>
        </View>
        {/* Footer */}
        <View className='flex-row justify-between items-center mt-4'>
          <Text className='text-gray-600 font-bold text-lg'>{numberOfPoint} Point</Text>
          <Pressable
            onPress={() => {
              router.push({pathname: `/shipments/[id]`, params: {id: shipmentNumber}});
            }}
          >
            <Text className='text-gray-600 font-bold text-lg'>Show Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ShipmentCard;
