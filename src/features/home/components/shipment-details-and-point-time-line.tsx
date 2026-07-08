import {Card, CardContent} from '@/components/ui/card';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, {memo} from 'react';
import {View} from 'react-native';
import {Text} from '@/components/ui/text';
import {Button} from '@/components/ui/button';
import {timelineData} from '../type';
import PointTimeLine from '@/components/point-time-line';
interface ShipmentDetailsAndPointTimeLineProps {
  shipmentNumber?: string;
  currentPointName?: string;
  isCompleted?: boolean;
  isPaused?: boolean;
  points?: {
    id: string;
    lat: string;
    lng: string;
    name: string;
    order: number;
    wayId: string;
  }[];
}
function ShipmentDetailsAndPointTimeLine({shipmentNumber, currentPointName, isCompleted, isPaused, points}: ShipmentDetailsAndPointTimeLineProps) {
  const status = isCompleted ? 'COMPLETE' : isPaused ? 'PAUSE' : 'CURRENT';
  const des = isCompleted ? 'Shipment has been completed' : isPaused ? 'Ready to Start' : 'Shipment is currently in progress';
  return (
    <Card>
      <CardContent className='px-2 pb-2 bg-[#F2F5F8]'>
        <View className='px-3 flex gap-2 justify-between mb-5'>
          <View>
            <Text className='font-bold text-xl'>Shipment #{shipmentNumber}</Text>
            <Text>
              {status} • {des}
            </Text>
          </View>
          {/* Button */}
          <Button variant='primary' size={'lg'} className='flex-row items-center gap-1'>
            <EvilIcons name='location' size={24} color='white' />
            <Text className='text-white'>Movement</Text>
          </Button>
        </View>
        <PointTimeLine currentPointName={currentPointName} timelineData={points} />
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentDetailsAndPointTimeLine);
