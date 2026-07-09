import React, {memo} from 'react';
import {View} from 'react-native';
import BoxInfo from './box-info';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {useTranslation} from 'react-i18next';
interface BoxesProps {
  pointLength?: number;
  completedLength?: number;
  remainderLength?: number;
  progress?: number;
}
const Boxes = ({pointLength, completedLength, progress, remainderLength}: BoxesProps) => {
  const {t} = useTranslation();
  const boxesData = [
    {
      icon: <Feather name='box' size={20} color='green' />,
      name: t('home.boxes.totalPoint'),
      data: `${pointLength}`
    },
    {
      icon: <Feather name='check-circle' size={20} color='green' />,
      name: t('home.boxes.completed'),
      data: `${completedLength}`
    },
    {
      icon: <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='green' />,
      name: t('home.boxes.remainder'),
      data: `${remainderLength}`
    },
    {
      icon: <MaterialCommunityIcons name='progress-star' size={20} color='green' />,
      name: t('home.boxes.progress'),
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
