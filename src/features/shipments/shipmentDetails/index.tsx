import CustomHeader from '@/components/custom-header';
import React from 'react';
import {ScrollView, View} from 'react-native';
import AllPointTimeLine from './components/all-point-time-line';
import PointProgress from './components/point-progress';
import ShipmentSummary from './components/shipment-summary';
import ShipmentWatDetails from './components/shipment-wat-details';
import {Text} from '@/components/ui/text';
import {Button} from '@/components/ui/button';

const ShipmentDetails = () => {
  const isFinish = false;
  return (
    <View className='px-4 flex-1'>
      <CustomHeader title='Shipment #SH-10025' description='Active' descriptionClassName='text-custom-primary-color' />
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false} contentContainerClassName='gap-4'>
        <ShipmentWatDetails />
        <AllPointTimeLine />
        <PointProgress />
        <ShipmentSummary />
        {isFinish ? (
          <Button variant={'outline'} className='border-gray-400 rounded-xl mb-10' size={'lg'}>
            <Text className='text-black'>FInished</Text>
          </Button>
        ) : (
          <Button variant={'primary'} size={'lg'} className='mb-10'>
            <Text className='text-white'>Movement</Text>
          </Button>
        )}
      </ScrollView>
    </View>
  );
};

export default ShipmentDetails;
