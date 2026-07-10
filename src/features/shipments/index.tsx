import CustomHeader from '@/components/custom-header';
import CustomSearch from '@/components/custom-search';
import CustomPagination from '@/components/custom-pagination';
import {Text} from '@/components/ui/text';
import ShipmentCard from '@/features/shipments/components/shipment-card';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {useFinishedShipments} from './api';
import ShipmentsSkeleton from './loading';
import ErrorState from '@/components/error-state';
import {useStatistics} from '../home/api';
import {useTranslation} from 'react-i18next';
import useDebounce from '@/hooks/use-debounce';

const Shipments = () => {
  const {t} = useTranslation();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce({value:search})
  const limit = 10;

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const {data: currentShipmentData, isLoading: isCurrentShipmentLoading, isError: isCurrentShipmentError, error: currentShipmentError, refetch: refetchCurrentShipment, isRefetching: isCurrentShipmentRefetching} = useStatistics();

  const {
    data: finishedShipmentsData,
    isLoading: isFinishedShipmentsLoading,
    isError: isFinishedShipmentsError,
    error: finishedShipmentsError,
    refetch: refetchFinishedShipments,
    isRefetching: isFinishedShipmentsRefetching
  } = useFinishedShipments({
    search: debouncedSearch,
    page,
    limit
  });
  const isLoading = isCurrentShipmentLoading || isFinishedShipmentsLoading;
  if (isCurrentShipmentError) return <ErrorState message={t('shipments.error.fetchShipments')} technicalError={currentShipmentError?.message} onRetry={refetchCurrentShipment} />;
  if (isFinishedShipmentsError) return <ErrorState message={t('shipments.error.fetchShipments')} technicalError={finishedShipmentsError?.message} onRetry={refetchFinishedShipments} />;

  const currentShipment = currentShipmentData?.data.data;
  const shipments = finishedShipmentsData?.data.data.data;
  const currentPage = finishedShipmentsData?.data.data.currentPage ?? page;
  const totalPages = finishedShipmentsData?.data.data.totalPages ?? 1;
  const hasPrevious = finishedShipmentsData?.data.data.hasPrevious ?? false;
  const hasNext = finishedShipmentsData?.data.data.hasNext ?? false;
  const isRefetching = isCurrentShipmentRefetching || isFinishedShipmentsRefetching;
  function onRefresh() {
    refetchCurrentShipment();
    refetchFinishedShipments();
  }
  return (
    <View className='flex-1 bg-white dark:bg-slate-950'>
      <CustomHeader title={t('shipments.title')} />
      <CustomSearch value={search} setValue={setSearch} />
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />} className='bg-white flex-1 dark:bg-slate-950' showsVerticalScrollIndicator={false}>
        {debouncedSearch == '' && (
          <>
            <View className='flex-row justify-between mt-6 mb-3'>
              <Text className='text-xl font-bold text-slate-900 dark:text-white'>{t('shipments.currentShipment')}</Text>
              <Text className='text-lg font-bold text-custom-primary-color'>{currentShipment?.isCompleted ? t('shipments.status.complete') : currentShipment?.isPaused ? t('shipments.status.pause') : t('shipments.status.active')}</Text>
            </View>
            <ShipmentCard currentPoint={currentShipment?.currentPoint} id={currentShipment?.id!} shipmentNumber={currentShipment?.shipmentNumber!} launchDate={currentShipment?.launchDate} way={currentShipment?.way} isCompleted={currentShipment?.isCompleted} isPaused={currentShipment?.isPaused} />
          </>
        )}
        <Text className='text-xl font-bold my-4 text-slate-950 dark:text-white'>{t('shipments.finishedShipment')}</Text>
        <View className='flex-1'>
          {isLoading ? <ShipmentsSkeleton /> :
            <View className='gap-4 mb-6'>
              {shipments && shipments.length > 0 ? shipments.map(shipment => <ShipmentCard key={shipment.shipmentNumber} {...shipment} />)
                : <Text className='text-center text-gray-500'>{t('shipments.empty')}</Text>}
            </View>
          }
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            onPrevious={() => setPage(prev => Math.max(prev - 1, 1))}
            onNext={() => setPage(prev => Math.min(prev + 1, totalPages))}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Shipments;
