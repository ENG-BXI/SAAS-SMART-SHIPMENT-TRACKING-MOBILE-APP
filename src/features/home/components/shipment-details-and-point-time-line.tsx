import {Card, CardContent} from '@/components/ui/card';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, {memo} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '@/components/ui/text';
import {Button} from '@/components/ui/button';
import {timelineData} from '../type';

function ShipmentDetailsAndPointTimeLine() {
  return (
    <Card>
      <CardContent className='px-2 pb-2 bg-[#F2F5F8]'>
        <View className='px-3 flex-row justify-between mb-5'>
          <View>
            <Text className='font-bold text-xl'>Shipment #SH-10254</Text>
            <Text>Status • Ready to Start</Text>
          </View>
          {/* Button */}
          <Button variant='primary' size={'lg'} className='flex-row items-center gap-1'>
            <EvilIcons name='location' size={24} color='white' />
            <Text className='text-white'>Movement</Text>
          </Button>
        </View>
        <FlatList
          className='h-60 bg-white p-3 rounded-xl'
          data={timelineData}
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
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentDetailsAndPointTimeLine);
