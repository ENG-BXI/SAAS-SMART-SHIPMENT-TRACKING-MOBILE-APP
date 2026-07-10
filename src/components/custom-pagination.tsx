import React from 'react';
import {Pressable, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text} from './ui/text';
import {useLanguage} from '@/hooks/useLanguage';

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export default function CustomPagination({
  currentPage,
  totalPages,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext
}: CustomPaginationProps) {
  const {isRtl} = useLanguage();
  const {t} = useTranslation();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <View className={`flex-row items-center justify-between px-4 pb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
      <Pressable
        disabled={!hasPrevious}
        onPress={onPrevious}
        className={`rounded-2xl px-4 py-3 ${hasPrevious ? 'bg-custom-primary-color' : 'bg-slate-200'} ${hasPrevious ? '' : 'opacity-60'}`}>
        <Text className={`${hasPrevious ? 'text-white' : 'text-slate-500'}`}>{t('shared.pagination.previous')}</Text>
      </Pressable>

      <Text className='text-sm font-medium text-slate-900 dark:text-white'>
        {t('shared.pagination.page', {currentPage, totalPages})}
      </Text>

      <Pressable
        disabled={!hasNext}
        onPress={onNext}
        className={`rounded-2xl px-4 py-3 ${hasNext ? 'bg-custom-primary-color' : 'bg-slate-200'} ${hasNext ? '' : 'opacity-60'}`}>
        <Text className={`${hasNext ? 'text-white' : 'text-slate-500'}`}>{t('shared.pagination.next')}</Text>
      </Pressable>
    </View>
  );
}
