import React, {memo} from 'react';
import {View} from 'react-native';
import {boxesData} from '../type';
import BoxInfo from './box-info';
const Boxes = () => {
  return (
    <View className='flex-row justify-between mt-5 px-4'>
      {boxesData.map(box => {
        return <BoxInfo key={box.name} {...box} />;
      })}
    </View>
  );
};

export default memo(Boxes);
