import {Text} from '@/components/ui/text';
import React from 'react';
import {Pressable, View} from 'react-native';
import {ShipmentCardProps} from '../type';
import {router} from 'expo-router';
import {formattedDate} from '@/lib/utils';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '@/hooks/useLanguage';

function ShipmentCard({shipmentNumber, endDate, isCompleted, isPaused, currentPoint, id, launchDate, way}: ShipmentCardProps) {
  const {t} = useTranslation();
  const {isRtl} = useLanguage();

  const sortedWay =
    way?.points.sort((a, b) => {
      return a.order - b.order;
    }) ?? [];
  const fromCity = sortedWay[0];
  const toCity = sortedWay[sortedWay.length - 1];
  return (
    <View style={{direction: isRtl ? 'rtl' : 'ltr'}} className='bg-gray-200 dark:bg-slate-900 p-3 rounded-3xl overflow-hidden shadow-md shadow-black/10 dark:shadow-black/30'>
      {/* Header */}
      <View className='bg-black justify-around items-start h-24 px-4 py-3 rounded-2xl'>
        <View className='bg-orange-200 px-3 py-1 rounded-full'>
          <Text className='text-orange-600 text-xs font-semibold'>{way?.name}</Text>
        </View>
        <Text className='text-white text-xl font-bold'>{t('shipments.card.shipmentNumber', {shipmentNumber})}</Text>
      </View>

      {/* Body */}
      <View className='px-4 py-4'>
        {/* Time Row */}
        <View className='flex-row justify-between items-center'>
          <Text className='text-slate-900 dark:text-slate-100 font-semibold'>{formattedDate(launchDate ?? '')}</Text>
          <Text className='text-slate-900 dark:text-slate-100 font-semibold'>{endDate ? formattedDate(endDate) : '-'}</Text>
        </View>

        {/* Route */}
        <View className='flex-row items-center justify-between mt-3'>
          {/* From */}
          <View className='items-start'>
            <Text className='text-slate-500 dark:text-slate-400 font-bold'>{fromCity.name}</Text>
          </View>

          {/* Line */}
          <View className='w-1/2 mx-3 flex-row items-center'>
            <View className='flex-1 border-t border-dashed border-gray-400 dark:border-slate-700' />
            <View className='w-2 h-2 bg-orange-500 rounded-full mx-1' />
          </View>

          {/* To */}
          <View className='items-end'>
            <Text className='text-slate-500 dark:text-slate-400 font-bold'>{toCity.name}</Text>
          </View>
        </View>
        {/* Footer */}
        <View className='flex-row justify-between items-center mt-4'>
          <Text className='text-slate-700 dark:text-slate-300 font-bold text-lg'>{t('shipments.card.points', {count: way?.points.length ?? 0})}</Text>
          <Pressable
            onPress={() => {
              router.push({
                pathname: `/shipments/[id]`,
                params: {
                  id,
                  data: JSON.stringify({way, currentPoint: currentPoint?.name, isCompleted, isPaused})
                }
              });
            }}
          >
            <Text className='text-custom-primary-color dark:text-custom-primary-color font-bold text-lg'>{t('shipments.card.showDetails')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ShipmentCard;
