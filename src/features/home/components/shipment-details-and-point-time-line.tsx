import {Card, CardContent} from '@/components/ui/card';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, {memo} from 'react';
import {View} from 'react-native';
import {Text} from '@/components/ui/text';
import {Button} from '@/components/ui/button';
import {timelineData} from '../type';
import PointTimeLine from '@/components/point-time-line';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  const status = isCompleted ? t('home.summary.status.complete') : isPaused ? t('home.summary.status.pause') : t('home.summary.status.current');
  const des = isCompleted ? t('home.summary.description.complete') : isPaused ? t('home.summary.description.pause') : t('home.summary.description.current');
  const isFinish = isCompleted;
  return (
    <Card>
      <CardContent className='px-2 pb-2 bg-[#F2F5F8] dark:bg-slate-950'>
        <View className='px-3 flex gap-2 justify-between mb-5'>
          <View>
            <Text className='font-bold text-xl text-black dark:text-white'>{t('home.summary.shipmentNumber', {shipmentNumber})}</Text>
            <Text className='text-slate-600 dark:text-slate-300'>
              {status} • {des}
            </Text>
          </View>
          {/* Button */}
          {isFinish ? (
            <Button variant={'outline'} className='border-gray-400 rounded-xl ' size={'lg'}>
              <Text className='text-black dark:text-white'>{t('shipmentDetails.button.finished')}</Text>
            </Button>
          ) : (
            <Button variant={'primary'} size={'lg'} className=''>
              <Text className='text-white'>{t('shipmentDetails.button.movement')}</Text>
            </Button>
          )}
        </View>
        <PointTimeLine currentPointName={currentPointName} timelineData={points} />
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentDetailsAndPointTimeLine);
