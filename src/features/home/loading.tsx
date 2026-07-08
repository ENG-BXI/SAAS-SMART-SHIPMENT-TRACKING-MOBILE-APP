import React from 'react';
import {ScrollView, View} from 'react-native';
import {Skeleton} from '@/components/ui/skeleton';

const ShipmentHomeSkeleton = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View className='flex-row items-center justify-between mt-20'>
        <View className='gap-3'>
          <Skeleton className='h-8 w-52' />
          <Skeleton className='h-6 w-36' />
        </View>
      </View>

      {/* Summary */}
      <View className='bg-white rounded-xl px-4 py-5 flex-row justify-between items-center'>
        <View className='flex-row items-center gap-3'>
          <Skeleton className='h-10 w-10 rounded-full' />

          <View className='gap-2'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-6 w-32' />
          </View>
        </View>

        <View className='h-14 w-[1px] bg-gray-200' />

        <View className='flex-row items-center gap-3'>
          <Skeleton className='h-10 w-10 rounded-full' />

          <View className='gap-2'>
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-6 w-28' />
          </View>
        </View>
      </View>

      {/* Details Header */}
      <View className='bg-green-100 rounded-2xl px-4 py-4 mt-4 flex-row items-center gap-3'>
        <Skeleton className='h-6 w-6 rounded-full' />

        <Skeleton className='h-5 flex-1' />

        <Skeleton className='h-6 w-6 rounded-full' />
      </View>

      {/* Shipment Card */}
      <View className='bg-gray-100 rounded-xl p-4 mt-4'>
        <Skeleton className='h-7 w-48' />

        <Skeleton className='h-5 w-64 mt-3' />

        <Skeleton className='h-12 w-full rounded-xl mt-5' />

        <View className='mt-6 gap-6'>
          {Array.from({length: 4}).map((_, index) => (
            <View key={index} className='flex-row items-center gap-4'>
              <Skeleton className='h-9 w-9 rounded-full' />

              <View className='gap-2'>
                <Skeleton className='h-5 w-36' />
                <Skeleton className='h-4 w-24' />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Statistics */}
      <View className='flex-row gap-3 mt-5 mb-10'>
        {Array.from({length: 4}).map((_, index) => (
          <View key={index} className='flex-1'>
            <Skeleton className='h-20 rounded-2xl' />

            <Skeleton className='h-4 w-20 self-center mt-2' />

            <Skeleton className='h-5 w-10 self-center mt-2' />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ShipmentHomeSkeleton;
