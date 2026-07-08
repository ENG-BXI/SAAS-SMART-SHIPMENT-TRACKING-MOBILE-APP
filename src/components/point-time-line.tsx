import {ITimeline} from '@/features/home/type';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from './ui/text';
import usePoint from '@/features/home/hook/use-point';

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
  const {currentIndex} = usePoint({points: timelineData});
  return (
    <FlatList
      className='h-60 bg-white p-3 rounded-xl'
      data={timelineData}
      nestedScrollEnabled
      renderItem={({item, index}) => {
        const point =
          index === currentIndex
            ? {
                name: 'Current Point',
                icon: <MaterialIcons name='my-location' size={24} color='green' />
              }
            : index < currentIndex
              ? {
                  name: 'Completed Point',
                  icon: <FontAwesome name='check-circle-o' size={24} color='green' />
                }
              : index === currentIndex + 1
                ? {
                    name: 'Next Point',
                    icon: <Ionicons name='location' size={24} color='green' />
                  }
                : {
                    name: 'Upcoming Point',
                    icon: <Ionicons name='location-outline' size={24} color='gray' />
                  };
        return (
          <View className='flex-row mb-3'>
            {/* Timeline */}
            <View className='items-center mr-4'>
              {point.icon}
              <View className='border-l border-dashed flex-1 bg-gray-300' />
            </View>

            {/* Content */}
            <View className='flex-1'>
              <Text className='text-gray-500'>{point.name}</Text>
              <Text className='font-bold text-lg'>{item.name}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

export default memo(PointTimeLine);
