import CustomHeader from '@/components/custom-header';
import CustomSearch from '@/components/custom-search';
import {Text} from '@/components/ui/text';
import ShipmentCard from '@/features/shipments/components/shipment-card';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useFinishedShipments} from './api';
import ShipmentsSkeleton from './loading';
import ErrorState from '@/components/error-state';
import {useStatistics} from '../home/api';
import {useTranslation} from 'react-i18next';

const Shipments = () => {
  const {t} = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 10;
  const {data: currentShipmentData, isLoading: isCurrentShipmentLoading, isError: isCurrentShipmentError, error: currentShipmentError, refetch: refetchCurrentShipment} = useStatistics();

  const {
    data: finishedShipmentsData,
    isLoading: isFinishedShipmentsLoading,
    isError: isFinishedShipmentsError,
    error: finishedShipmentsError,
    refetch: refetchFinishedShipments
  } = useFinishedShipments({
    page,
    limit
  });
  if (isCurrentShipmentLoading || isFinishedShipmentsLoading) return <ShipmentsSkeleton />;
  if (isCurrentShipmentError) return <ErrorState message={t('shipments.error.fetchShipments')} technicalError={currentShipmentError?.message} onRetry={refetchCurrentShipment} />;
  if (isFinishedShipmentsError) return <ErrorState message={t('shipments.error.fetchShipments')} technicalError={finishedShipmentsError?.message} onRetry={refetchFinishedShipments} />;

  const currentShipment = currentShipmentData?.data.data;
  const shipments = finishedShipmentsData?.data.data.data;
  return (
    <View className='pb-28 bg-white dark:bg-slate-950'>
      <CustomHeader title={t('shipments.title')} />
      <CustomSearch />
      <ScrollView className='bg-white dark:bg-slate-950' showsVerticalScrollIndicator={false}>
        <View className='flex-row justify-between mt-6 mb-3'>
          <Text className='text-xl font-bold text-slate-900 dark:text-white'>{t('shipments.currentShipment')}</Text>
          <Text className='text-lg font-bold text-custom-primary-color'>{currentShipment?.isCompleted ? t('shipments.status.complete') : currentShipment?.isPaused ? t('shipments.status.pause') : t('shipments.status.active')}</Text>
        </View>
        <ShipmentCard currentPoint={currentShipment?.currentPoint} id={currentShipment?.id!} shipmentNumber={currentShipment?.shipmentNumber!} launchDate={currentShipment?.launchDate} way={currentShipment?.way} isCompleted={currentShipment?.isCompleted} isPaused={currentShipment?.isPaused} />
        <Text className='text-xl font-bold my-4 text-slate-900 dark:text-white'>{t('shipments.finishedShipment')}</Text>
        <View className='gap-4 mb-6'>
          {shipments?.map(shipment => {
            return <ShipmentCard key={shipment.shipmentNumber} {...shipment} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Shipments;
