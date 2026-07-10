import React from 'react';
import {View, ScrollView, Linking, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '@/components/custom-header';
import {Text} from '@/components/ui/text';
import {useTranslation} from 'react-i18next';
import {APP_CONTACT_PHONE, APP_WEBSITE} from '@/lib/app-info';

export default function AboutScreen() {
  const {t} = useTranslation();

  const handleCall = () => {
    Linking.openURL(`tel:${APP_CONTACT_PHONE}`);
  };

  const openWebsite = () => {
    Linking.openURL(APP_WEBSITE);
  };

  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-slate-950'>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic' className='px-4'>
        <CustomHeader title={t('about.title')} hasBack description={t('about.subtitle')} />

        <View className='mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50 dark:bg-slate-900'>
          <Text className='text-xl font-bold text-black dark:text-white mb-3'>{t('about.introTitle')}</Text>
          <Text className='text-base text-[#3C3C43] dark:text-slate-300 leading-7'>{t('about.introText')}</Text>
        </View>

        <View className='mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-950 shadow-sm'>
          <Text className='text-xl font-semibold text-black dark:text-white mb-3'>{t('about.teamTitle')}</Text>
          <Text className='text-base text-[#3C3C43] dark:text-slate-300 leading-7'>{t('about.developerName')}</Text>
          <Text className='text-base text-[#3C3C43] dark:text-slate-300 leading-7 mt-2'>{t('about.developerRole')}</Text>
        </View>

        <View className='mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50 dark:bg-slate-900'>
          <Text className='text-xl font-semibold text-black dark:text-white mb-3'>{t('about.contactTitle')}</Text>
          <Text className='text-base text-[#3C3C43] dark:text-slate-300 leading-7'>{t('about.contactText')}</Text>

          <Pressable onPress={handleCall} className='mt-4 rounded-2xl bg-gray-100 dark:bg-slate-800 px-4 py-3'>
            <Text style={{textDecorationLine: 'underline'}} className='text-base text-center font-semibold text-[#1B8354] dark:text-slate-100'>
              {APP_CONTACT_PHONE}
            </Text>
          </Pressable>

          <Pressable onPress={openWebsite} className='mt-3 rounded-2xl bg-gray-100 dark:bg-slate-800 px-4 py-3'>
            <Text style={{textDecorationLine: 'underline'}} className='text-base text-center font-semibold text-[#1D4ED8] dark:text-slate-100'>
              {APP_WEBSITE}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
