import {Card, CardContent} from '@/components/ui/card';
import BoxInfo from '@/features/home/components/box-info';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
interface ShipmentSummaryProps {
  numberOfClient?: number;
  numberOfItem?: number;
  nextPoint?: string;
}
function ShipmentSummary({nextPoint, numberOfClient, numberOfItem}: ShipmentSummaryProps) {
  const boxesData2 = [
    {
      icon: <Feather name='box' size={20} color='green' />,
      name: 'Number Of Client',
      data: `${numberOfClient} Client`
    },
    {
      icon: <Feather name='check-circle' size={20} color='green' />,
      name: 'Number Of Items',
      data: `${numberOfItem} Items`
    },
    {
      icon: <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='green' />,
      name: 'Next Point',
      data: `${nextPoint}`
    }
  ];
  return (
    <Card className='bg-gray-200 rounded-3xl'>
      <CardContent className='flex flex-row items-center gap-6 p-4'>
        <View className='flex-row flex-wrap gap-4 justify-between'>
          {boxesData2.map(box => {
            return <BoxInfo key={box.name} {...box} />;
          })}
        </View>
      </CardContent>
    </Card>
  );
}

export default memo(ShipmentSummary);
