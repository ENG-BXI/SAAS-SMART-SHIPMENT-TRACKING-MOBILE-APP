import React from 'react';
import {ScrollView, View} from 'react-native';
import {Skeleton} from '@/components/ui/skeleton';

const ShipmentSkeletonCard = () => {
  return (
    <View className='bg-gray-200 dark:bg-slate-900 p-3 rounded-3xl'>
      {/* Header */}
      <View className='bg-gray-300 dark:bg-slate-800 h-24 px-4 py-3 rounded-2xl justify-between'>
        <Skeleton className='h-6 w-24 rounded-full' />

        <Skeleton className='h-6 w-44' />
      </View>

      {/* Body */}
      <View className='px-4 py-4'>
        {/* Dates */}
        <View className='flex-row justify-between'>
          <Skeleton className='h-5 w-24' />
          <Skeleton className='h-5 w-24' />
        </View>

        {/* Route */}
        <View className='flex-row items-center justify-between mt-5'>
          <Skeleton className='h-5 w-20' />

          <View className='flex-1 mx-3'>
            <Skeleton className='h-1 w-full' />
          </View>

          <Skeleton className='h-5 w-20' />
        </View>

        {/* Footer */}
        <View className='flex-row justify-between mt-5'>
          <Skeleton className='h-6 w-24' />

          <Skeleton className='h-6 w-28' />
        </View>
      </View>
    </View>
  );
};

const ShipmentsSkeleton = () => {
  return (
    <View className='flex-1 mt-10 bg-white dark:bg-slate-950'>
      {/* Header */}
      <View className='px-4'>
        <Skeleton className='h-8 w-36 mt-4' />
      </View>

      {/* Search */}
      <View className='px-4 my-4'>
        <Skeleton className='h-12 w-full rounded-xl' />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className='px-4 bg-white dark:bg-slate-950'>
        {/* Current title */}
        <View className='flex-row justify-between mt-6 mb-3'>
          <Skeleton className='h-7 w-48' />

          <Skeleton className='h-6 w-20' />
        </View>

        {/* Current Shipment Card */}
        <ShipmentSkeletonCard />

        {/* Finished title */}
        <Skeleton className='h-7 w-52 mt-6 mb-4' />

        {/* Finished Shipments */}
        <View className='gap-4 mb-6'>
          {Array.from({length: 4}).map((_, index) => (
            <ShipmentSkeletonCard key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ShipmentsSkeleton;
