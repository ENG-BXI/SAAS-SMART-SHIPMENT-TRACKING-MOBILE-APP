import PointTimeLine from '@/components/point-time-line';
import {Card, CardContent} from '@/components/ui/card';
import {Text} from '@/components/ui/text';
import {timelineData} from '@/features/home/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
interface AllPointTimeLineProps {
  currentPointName: string;
  points: {
    id: string;
    lat: string;
    lng: string;
    name: string;
    order: number;
    wayId: string;
  }[];
}
function AllPointTimeLine({currentPointName, points}: AllPointTimeLineProps) {
  const {t} = useTranslation();
  return (
    <Card className='bg-gray-200 dark:bg-slate-900 rounded-3xl'>
      <CardContent className='flex gap-2 p-4'>
        <Text className='font-bold text-lg px-2 text-slate-900 dark:text-white'>{t('shipmentDetails.timeline.title')}</Text>
        <PointTimeLine currentPointName={currentPointName} timelineData={points} />
      </CardContent>
    </Card>
  );
}

export default AllPointTimeLine;
