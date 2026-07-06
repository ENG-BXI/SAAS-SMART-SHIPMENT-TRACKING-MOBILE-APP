import CustomHeader from '@/components/custom-header';
import CustomSearch from '@/components/custom-search';
import {Text} from '@/components/ui/text';
import ShipmentCard from '@/features/shipments/components/shipment-card';
import {currenPoint, shipmentsMock} from '@/features/shipments/type';
import React from 'react';
import {ScrollView, View} from 'react-native';

const Shipments = () => {
  return (
    <View>
      <CustomHeader title='Shipments' />
      <CustomSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row justify-between mt-6 mb-3'>
          <Text className='text-xl font-bold'>Current Shipment</Text>
          <Text className='text-lg font-bold text-custom-primary-color'>Active</Text>
        </View>
        <ShipmentCard {...currenPoint} />
        <Text className='text-xl font-bold my-4'>Finished Shipment</Text>
        <View className='gap-4'>
          {shipmentsMock.map(shipment => {
            return <ShipmentCard key={shipment.shipmentNumber} {...shipment} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Shipments;
