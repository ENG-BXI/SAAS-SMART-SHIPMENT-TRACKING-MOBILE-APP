import React from 'react';
import {ScrollView, View} from 'react-native';
import {Skeleton} from '@/components/ui/skeleton';
import CustomHeader from '@/components/custom-header';
import {useTranslation} from 'react-i18next';

const ShipmentDetailsSkeleton = () => {
  const {t} = useTranslation();
  return (
    <View className='flex-1 px-4 bg-white dark:bg-slate-950'>
      <CustomHeader title={t('shipmentDetails.loading.title')} hasBack description='' />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='gap-4 pb-10' className='bg-white dark:bg-slate-950'>
        {/* Shipment Info */}
        <View className='bg-gray-200 dark:bg-slate-950 rounded-3xl p-4'>
          <View className='flex-row justify-between items-center'>
            <View className='gap-2'>
              <Skeleton className='h-7 w-20' />
              <Skeleton className='h-6 w-16' />
              <Skeleton className='h-5 w-24' />
            </View>

            <View className='flex-1 px-5'>
              <Skeleton className='h-5 w-32 self-center mb-3' />
              <Skeleton className='h-2 w-full rounded-full' />
            </View>

            <View className='items-end gap-2'>
              <Skeleton className='h-7 w-20' />
              <Skeleton className='h-6 w-16' />
              <Skeleton className='h-5 w-24' />
            </View>
          </View>

          <View className='flex-row flex-wrap justify-between mt-6 gap-4'>
            {Array.from({length: 4}).map((_, i) => (
              <View key={i} className='flex-1 min-w-16'>
                <Skeleton className='h-16 rounded-2xl' />
                <Skeleton className='h-4 w-16 self-center mt-2' />
                <Skeleton className='h-5 w-10 self-center mt-2' />
              </View>
            ))}
          </View>
        </View>

        {/* Timeline */}
        <View className='bg-gray-200 dark:bg-slate-900 rounded-3xl p-4'>
          <Skeleton className='h-6 w-44 mb-4' />

          <View className='bg-white dark:bg-slate-950 rounded-xl p-4'>
            {Array.from({length: 5}).map((_, i) => (
              <View key={i} className='flex-row gap-4 mb-6'>
                <Skeleton className='h-8 w-8 rounded-full' />

                <View className='gap-2 flex-1'>
                  <Skeleton className='h-4 w-28' />
                  <Skeleton className='h-5 w-44' />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Progress */}
        <View className='bg-gray-200 dark:bg-slate-900 rounded-3xl p-4'>
          <View className='flex-row justify-between items-center'>
            <View className='flex-1 mr-4'>
              <Skeleton className='h-5 w-28 mb-4' />
              <Skeleton className='h-3 w-full rounded-full' />
            </View>

            <View className='gap-2 items-center'>
              <Skeleton className='h-5 w-16' />
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-4 w-24' />
            </View>
          </View>
        </View>

        {/* Summary */}
        <View className='bg-gray-200 dark:bg-slate-900 rounded-3xl p-4'>
          <View className='flex-row justify-between gap-4'>
            {Array.from({length: 3}).map((_, i) => (
              <View key={i} className='flex-1'>
                <Skeleton className='h-16 rounded-2xl' />
                <Skeleton className='h-4 w-20 self-center mt-2' />
                <Skeleton className='h-5 w-12 self-center mt-2' />
              </View>
            ))}
          </View>
        </View>

        {/* Button */}
        <Skeleton className='h-14 w-full rounded-xl' />
      </ScrollView>
    </View>
  );
};

export default ShipmentDetailsSkeleton;
