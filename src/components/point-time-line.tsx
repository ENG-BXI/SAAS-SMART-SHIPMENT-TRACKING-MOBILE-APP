import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from './ui/text';
import usePoint from '@/features/home/hook/use-point';
import {useTranslation} from 'react-i18next';

interface PointTimeLineProps {
  currentPointName?: string;
  timelineData?: {
    id: string;
    lat: string;
    lng: string;
    name: string;
    order: number;
    wayId: string;
  }[];
}
function PointTimeLine({timelineData, currentPointName}: PointTimeLineProps) {
  const {t} = useTranslation();
  const {currentIndex} = usePoint({currentPointName, points: timelineData});
  return (
    <FlatList
      className='h-60 bg-white dark:bg-slate-900 p-3 rounded-xl'
      data={timelineData}
      nestedScrollEnabled
      renderItem={({item, index}) => {
        const point =
          index === currentIndex
            ? {
                name: t('shipmentDetails.timeline.currentPoint'),
                icon: <MaterialIcons name='my-location' size={24} color='#1B8354' />
              }
            : index < currentIndex
              ? {
                  name: t('shipmentDetails.timeline.completedPoint'),
                  icon: <FontAwesome name='check-circle-o' size={24} color='#1B8354' />
                }
              : index === currentIndex + 1
                ? {
                    name: t('shipmentDetails.timeline.nextPoint'),
                    icon: <Ionicons name='location' size={24} color='#1B8354' />
                  }
                : {
                    name: t('shipmentDetails.timeline.upcomingPoint'),
                    icon: <Ionicons name='location-outline' size={24} color='gray' />
                  };
        return (
          <View className='flex-row mb-3'>
            {/* Timeline */}
            <View className='items-center mr-4'>
              {point.icon}
              <View className='border-l border-dashed flex-1 bg-gray-300 dark:bg-slate-700' />
            </View>

            {/* Content */}
            <View className='flex-1'>
              <Text className='text-gray-500 dark:text-slate-300'>{point.name}</Text>
              <Text className='font-bold text-lg text-black dark:text-white'>{item.name}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

export default memo(PointTimeLine);
