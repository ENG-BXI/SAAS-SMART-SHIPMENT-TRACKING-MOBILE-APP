import CustomHeader from '@/components/custom-header';
import React from 'react';
import {ScrollView, View} from 'react-native';
import AllPointTimeLine from './components/all-point-time-line';
import PointProgress from './components/point-progress';
import ShipmentSummary from './components/shipment-summary';
import ShipmentWatDetails from './components/shipment-wat-details';
import {Text} from '@/components/ui/text';
import {Button} from '@/components/ui/button';
import {useShipmentDetails} from './api';
import {useLocalSearchParams} from 'expo-router';
import usePoint from '@/features/home/hook/use-point';
import ErrorState from '@/components/error-state';
import ShipmentDetailsSkeleton from './loading';
import {useTranslation} from 'react-i18next';
type TDataParams = {
  way: {
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
  currentPoint: string;
  isCompleted?: boolean;
  isPaused?: boolean;
};
const ShipmentDetails = () => {
  const {t} = useTranslation();
  const {id, data} = useLocalSearchParams<{id: string; data: string}>();
  const parseData = JSON.parse(data) as TDataParams;
  const {data: shipmentData, isLoading, isError, error, refetch} = useShipmentDetails(id as string);
  if (isLoading) return <ShipmentDetailsSkeleton />;
  if (isError) return <ErrorState message={t('shipmentDetails.error.fetchDetails')} technicalError={error?.message} onRetry={refetch} />;
  const {completedLength, pointLength, progress, remainderLength, nextPointName} = usePoint({currentPointName: parseData.currentPoint, points: parseData.way.points});
  const shipment = shipmentData?.data.data;
  const status = parseData.isCompleted ? t('shipmentDetails.status.complete') : parseData.isPaused ? t('shipmentDetails.status.pause') : t('shipmentDetails.status.current');
  const isFinish = parseData.isCompleted;
  const shipmentTitle = shipment?.shipmentNumber ? t('shipmentDetails.header.title', {shipmentNumber: shipment.shipmentNumber}) : t('shipmentDetails.header.title', {shipmentNumber: id});
  return (
    <View className='px-4 flex-1 bg-white dark:bg-slate-950'>
      <CustomHeader title={shipmentTitle} hasBack description={status} descriptionClassName='text-custom-primary-color' />
      <ScrollView className='flex-1 bg-white dark:bg-slate-950' showsVerticalScrollIndicator={false} contentContainerClassName='gap-4 pb-10'>
        <ShipmentWatDetails wayName={shipment?.way.name} launchDate={shipment?.launchDate} endDate={shipment?.endDate} fromCity='' toCity='' pointLength={pointLength} currentPointName={parseData.currentPoint} status={status} />
        <AllPointTimeLine currentPointName={parseData.currentPoint} points={parseData.way.points} />
        <PointProgress completedLength={completedLength} pointLength={pointLength} progress={progress} remainderLength={remainderLength} />
        <ShipmentSummary nextPoint={nextPointName} numberOfClient={shipment?.clients} numberOfItem={shipment?.shipmentItem} />
        {isFinish ? (
          <Button variant={'outline'} className='border-gray-400 rounded-xl mb-10 dark:border-slate-700 dark:bg-slate-900' size={'lg'}>
            <Text className='text-black dark:text-white'>{t('shipmentDetails.button.finished')}</Text>
          </Button>
        ) : (
          <Button variant={'primary'} size={'lg'} className='mb-10'>
            <Text className='text-white'>{t('shipmentDetails.button.movement')}</Text>
          </Button>
        )}
      </ScrollView>
    </View>
  );
};

export default ShipmentDetails;
