import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {Text} from '@/components/ui/text';
import React, {memo} from 'react';
import {View} from 'react-native';

interface PointProgressProps {
  progress?: number;
  completedLength?: number;
  pointLength?: number;
  remainderLength?: number;
}

function PointProgress({progress = 0, completedLength = 0, pointLength = 0, remainderLength = 0}: PointProgressProps) {
  return (
    <Card className='bg-gray-200 rounded-3xl'>
      <CardContent className='p-4'>
        <View className='flex-row items-center gap-6'>
          {/* Progress */}
          <View className='flex-1 gap-3'>
            <View className='flex-row items-center justify-between'>
              <Text className='text-lg font-bold'>Progress</Text>

              <Text className='text-lg font-bold'>{progress}%</Text>
            </View>

            <Progress value={progress} className='bg-gray-300' indicatorClassName='bg-custom-primary-color' />
          </View>

          {/* Details */}
          <View className='items-center'>
            <Text className='font-bold text-lg'>
              {completedLength}/{pointLength}
            </Text>

            <Text className='text-sm'>Stops Complete</Text>

            <Text className='text-sm'>{remainderLength} Reminder Point</Text>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}

export default memo(PointProgress);
