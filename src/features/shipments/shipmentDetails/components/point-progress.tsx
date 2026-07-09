import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {Text} from '@/components/ui/text';
import React, {memo} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

interface PointProgressProps {
  progress?: number;
  completedLength?: number;
  pointLength?: number;
  remainderLength?: number;
}

function PointProgress({progress = 0, completedLength = 0, pointLength = 0, remainderLength = 0}: PointProgressProps) {
  const {t} = useTranslation();
  return (
    <Card className='bg-gray-200 dark:bg-slate-900 rounded-3xl'>
      <CardContent className='p-4'>
        <View className='flex-row items-center gap-6'>
          {/* Progress */}
          <View className='flex-1 gap-3'>
            <View className='flex-row items-center justify-between'>
              <Text className='text-lg font-bold text-slate-900 dark:text-white'>{t('shipmentDetails.progress.title')}</Text>

              <Text className='text-lg font-bold text-slate-900 dark:text-white'>{progress}%</Text>
            </View>

            <Progress value={progress} className='bg-gray-300 dark:bg-slate-700' indicatorClassName='bg-custom-primary-color' />
          </View>

          {/* Details */}
          <View className='items-center'>
            <Text className='font-bold text-lg text-slate-900 dark:text-white'>
              {completedLength}/{pointLength}
            </Text>

            <Text className='text-sm text-slate-700 dark:text-slate-300'>{t('shipmentDetails.progress.stopsComplete')}</Text>

            <Text className='text-sm text-slate-700 dark:text-slate-300'>
              {remainderLength} {t('shipmentDetails.progress.remainderPoint')}
            </Text>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}

export default memo(PointProgress);
