import {Text} from '@/components/ui/text';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {router} from 'expo-router';
import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '@/hooks/useLanguage';
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
  const {t} = useTranslation();
  const {isRtl} = useLanguage();
  return (
    <View>
      <View className='bg-white dark:bg-slate-900 flex-row justify-around rounded-xl px-4 py-2 relative -top-3 z-10 shadow-sm shadow-black/5 dark:shadow-black/20'>
        <View className='flex-row items-center gap-3'>
          <MaterialIcons name='my-location' size={35} color='#1B8354' />
          <View>
            <Text className='text-slate-600 dark:text-slate-300'>{t('home.summary.currentPoint')}</Text>
            <Text className='font-bold text-xl text-black dark:text-white'>{currentPoint}</Text>
          </View>
        </View>
        <View className='w-0.5 bg-gray-100 dark:bg-slate-700 h-3/4 my-auto' />
        <View className='flex-row items-center gap-3'>
          <FontAwesome6 name='route' size={30} color='#1B8354' />
          <View>
            <Text className='text-slate-600 dark:text-slate-300'>{t('home.summary.wayName')}</Text>
            <Text className='font-bold text-xl text-black dark:text-white'>{way?.name}</Text>
          </View>
        </View>
      </View>
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
        <View
          style={{
            elevation: 10
          }}
          className='flex-row gap-2 items-center bg-[#DAF1DB] dark:bg-slate-800 w-full px-4 py-2 rounded-2xl relative -top-8 pt-7'
        >
          <FontAwesome6 name='award' size={20} color='black' />
          <Text className='flex-1 text-black dark:text-white'>{t('home.summary.detailsTitle')}</Text>

          <MaterialIcons name={isRtl ? 'keyboard-arrow-left' : 'keyboard-arrow-right'} size={24} />
        </View>
      </Pressable>
    </View>
  );
}

export default memo(SummaryHeaderBox);
