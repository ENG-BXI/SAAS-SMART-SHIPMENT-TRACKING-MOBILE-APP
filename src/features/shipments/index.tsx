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

const Shipments = () => {
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
  if (isCurrentShipmentError) return <ErrorState message="We couldn't fetch your shipments." technicalError={currentShipmentError?.message} onRetry={refetchCurrentShipment} />;
  if (isFinishedShipmentsError) return <ErrorState message="We couldn't fetch your shipments." technicalError={finishedShipmentsError?.message} onRetry={refetchFinishedShipments} />;

  const currentShipment = currentShipmentData?.data.data;
  const shipments = finishedShipmentsData?.data.data.data;
  return (
    <View className='pb-28'>
      <CustomHeader title='Shipments' />
      <CustomSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row justify-between mt-6 mb-3'>
          <Text className='text-xl font-bold'>Current Shipment</Text>
          <Text className='text-lg font-bold text-custom-primary-color'>{currentShipment?.isCompleted ? 'COMPLETE' : currentShipment?.isPaused ? 'PAUSE' : 'ACTIVE'}</Text>
        </View>
        <ShipmentCard currentPoint={currentShipment?.currentPoint} id={currentShipment?.id!} shipmentNumber={currentShipment?.shipmentNumber!} launchDate={currentShipment?.launchDate} way={currentShipment?.way} isCompleted={currentShipment?.isCompleted} isPaused={currentShipment?.isPaused} />
        <Text className='text-xl font-bold my-4'>Finished Shipment</Text>
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
