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
import PointTimeLine from '@/components/point-time-line';

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
        <PointTimeLine timelineData={timelineData} />
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentDetailsAndPointTimeLine);
