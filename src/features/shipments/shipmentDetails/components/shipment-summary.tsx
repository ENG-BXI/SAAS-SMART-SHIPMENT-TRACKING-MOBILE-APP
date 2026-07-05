import {Card, CardContent} from '@/components/ui/card';
import BoxInfo from '@/features/home/components/box-info';
import React from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import {boxesData2} from '../type';

function ShipmentSummary() {
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
