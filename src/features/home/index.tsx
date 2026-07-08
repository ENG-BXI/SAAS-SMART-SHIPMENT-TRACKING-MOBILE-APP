import React from 'react';
import HeaderAndBox from './components/header-and-box';
import SummaryHeaderBox from './components/summary-header-box';
import ShipmentDetailsAndPointTimeLine from './components/shipment-details-and-point-time-line';
import {ScrollView} from 'react-native';
import Boxes from './components/boxes';
import {useStatistics} from './api';
import usePoint from './hook/use-point';
import ShipmentHomeSkeleton from './loading';
import ErrorState from '@/components/error-state';

const ShipmentHome = () => {
  const {data, isLoading, isError, error, refetch} = useStatistics();
  if (isLoading) return <ShipmentHomeSkeleton />;
  if (isError) {
    return <ErrorState message="We couldn't fetch your shipment information." technicalError={error?.message} onRetry={refetch} />;
  }

  const statstics = data?.data.data;
  const {completedLength, pointLength, progress, currentIndex, remainderLength} = usePoint({currentPointName: statstics?.currentPoint.name, points: statstics?.way.points});
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderAndBox name={statstics?.userName} companyName={statstics?.company.name} />
      <SummaryHeaderBox id={statstics?.id!} currentPoint={statstics?.currentPoint.name} shipmentNumber={statstics?.shipmentNumber} way={statstics?.way} isCompleted={statstics?.isCompleted} isPaused={statstics?.isPaused} />
      <ShipmentDetailsAndPointTimeLine shipmentNumber={statstics?.shipmentNumber} currentPointName={statstics?.currentPoint.name} isCompleted={statstics?.isCompleted} isPaused={statstics?.isPaused} points={statstics?.way.points} />
      <Boxes pointLength={pointLength} completedLength={completedLength} remainderLength={remainderLength} progress={progress} />
      {/* <HelpCenter /> */}
    </ScrollView>
  );
};

export default ShipmentHome;
