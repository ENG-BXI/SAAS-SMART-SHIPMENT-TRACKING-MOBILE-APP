import {Text} from '@/components/ui/text';
import {Image} from 'expo-image';
import React, {memo} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '@/hooks/useLanguage';

interface HeaderAndBoxProps {
  name?: string;
  companyName?: string;
}
function HeaderAndBox({name, companyName}: HeaderAndBoxProps) {
  const {t} = useTranslation();
  const {isRtl} = useLanguage();
  return (
    <View className='flex-row items-center justify-between bg-white dark:bg-slate-950 px-5 py-4 rounded-3xl shadow-sm shadow-black/5 dark:shadow-black/20'>
      <View>
        <Text className='text-2xl font-bold text-black dark:text-white'>{t('home.header.greeting', {name})}</Text>
        <Text className='text-xl text-slate-600 dark:text-slate-300'>
          {companyName} {t('home.header.companySuffix')}
        </Text>
      </View>
      <Image source={require('@/assets/images/home-box.png')} style={{width: 250, transform: [{scaleX: isRtl ? -1 : 1}], height: 250}} />
    </View>
  );
}

export default memo(HeaderAndBox);
