import {ITimeline} from '@/features/home/type';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from './ui/text';

interface PointTimeLineProps {
  timelineData: ITimeline[];
}
function PointTimeLine({timelineData}: PointTimeLineProps) {
  return (
    <FlatList
      className='h-60 bg-white p-3 rounded-xl'
      data={timelineData}
      nestedScrollEnabled
      renderItem={({item}) => {
        const point = item.isCurrent ? {name: 'Current Point', icon: <MaterialIcons name='my-location' size={24} color='green' />} : item.isCompleted ? {name: 'Competed Point', icon: <FontAwesome name='check-circle-o' size={24} color='green' />} : item.isNext ? {name: 'Next Point', icon: <Ionicons name='location' size={24} color='green' />} : {name: 'Last Point', icon: <Ionicons name='location' size={24} color='green' />};
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
              <Text className='font-bold text-lg'>{item.title}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

export default memo(PointTimeLine);
