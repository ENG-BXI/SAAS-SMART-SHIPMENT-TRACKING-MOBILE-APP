import React, {memo} from 'react';
import {View} from 'react-native';
import BoxInfo from './box-info';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
interface BoxesProps {
  pointLength?: number;
  completedLength?: number;
  remainderLength?: number;
  progress?: number;
}
const Boxes = ({pointLength, completedLength, progress, remainderLength}: BoxesProps) => {
  const boxesData = [
    {
      icon: <Feather name='box' size={20} color='green' />,
      name: 'Total Point',
      data: `${pointLength}`
    },
    {
      icon: <Feather name='check-circle' size={20} color='green' />,
      name: 'Completed',
      data: `${completedLength}`
    },
    {
      icon: <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='green' />,
      name: 'Remainder',
      data: `${remainderLength}`
    },
    {
      icon: <MaterialCommunityIcons name='progress-star' size={20} color='green' />,
      name: 'Progress',
      data: `${progress}%`
    }
  ];

  return (
    <View className='flex-row flex-wrap justify-between mt-5 gap-4 mb-10'>
      {boxesData.map(box => {
        return <BoxInfo key={box.name} {...box} />;
      })}
    </View>
  );
};

export default memo(Boxes);
