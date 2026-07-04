import React from 'react';
import HeaderAndBox from './components/header-and-box';
import SummaryHeaderBox from './components/summary-header-box';
import ShipmentDetailsAndPointTimeLine from './components/shipment-details-and-point-time-line';
import {ScrollView} from 'react-native';
import Boxes from './components/boxes';
import HelpCenter from './components/help-center';

const ShipmentHome = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderAndBox />
      <SummaryHeaderBox />
      <ShipmentDetailsAndPointTimeLine />
      <Boxes />
      <HelpCenter />
    </ScrollView>
  );
};

export default ShipmentHome;
