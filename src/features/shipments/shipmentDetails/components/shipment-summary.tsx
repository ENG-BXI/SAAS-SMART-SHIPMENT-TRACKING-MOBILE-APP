import {Card, CardContent} from '@/components/ui/card';
import BoxInfo from '@/features/home/components/box-info';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {useTranslation} from 'react-i18next';
interface ShipmentSummaryProps {
  numberOfClient?: number;
  numberOfItem?: number;
  nextPoint?: string;
}
function ShipmentSummary({nextPoint, numberOfClient, numberOfItem}: ShipmentSummaryProps) {
  const {t} = useTranslation();
  const boxesData2 = [
    {
      icon: <Feather name='box' size={20} color='green' />,
      name: t('shipmentDetails.summary.numberOfClient'),
      data: `${numberOfClient} ${t('shipmentDetails.summary.clientLabel')}`
    },
    {
      icon: <Feather name='check-circle' size={20} color='green' />,
      name: t('shipmentDetails.summary.numberOfItems'),
      data: `${numberOfItem} ${t('shipmentDetails.summary.itemsLabel')}`
    },
    {
      icon: <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='green' />,
      name: t('shipmentDetails.summary.nextPoint'),
      data: `${nextPoint}`
    }
  ];
  return (
    <Card className='bg-gray-200 dark:bg-slate-900 rounded-3xl'>
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
