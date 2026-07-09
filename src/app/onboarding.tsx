import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Dimensions, Pressable} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import '@/i18n';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

const ONBOARDING_IMAGES: Record<string, any> = {
  onboard1: require('@/assets/images/onboard1.png'),
  onboard2: require('@/assets/images/onboard2.png'),
  onboard3: require('@/assets/images/onboard3.png')
};
export const ONBOARDING_KEY = 'onBoard';
export default function Onboarding() {
  const {t} = useTranslation();
  const flatListRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const pages = t('onboarding.pages', {returnObjects: true}) as Array<{title: string; description: string; image: string}>;

  const next = () => {
    if (index < pages.length - 1) {
      flatListRef.current?.scrollToIndex({index: index + 1});
    }
    if (index == pages.length - 1) goToLogin();
  };

  const onScrollEnd = (e: any) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };
  const onSkip = () => {
    const lastIndex = pages.length - 1;
    flatListRef.current?.scrollToIndex({index: lastIndex});
    setIndex(lastIndex);
  };
  const goToLogin = () => {
    SecureStore.setItem(ONBOARDING_KEY, 'true');
    router.replace('/login');
  };
  return (
    <View className='flex-1 bg-white dark:bg-slate-950'>
      {/* Header */}
      <View className='flex-row justify-between items-center px-5 pt-6'>
        <Text className='font-bold text-lg text-custom-primary-color dark:text-custom-primary-color'>{t('onboarding.headerTitle')}</Text>

        <Pressable onPress={onSkip}>
          <Text className='text-custom-primary-color dark:text-custom-primary-color'>{t('onboarding.skip')}</Text>
        </Pressable>
      </View>

      {/* Pages */}
      <FlatList
        ref={flatListRef}
        data={pages}
        horizontal
        style={{maxHeight: 600}}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => String(idx)}
        onMomentumScrollEnd={onScrollEnd}
        className='self-center max-h-50!'
        renderItem={({item}) => (
          <View className='w-screen items-center justify-center px-5'>
            <View className='w-full rounded-3xl bg-white dark:bg-slate-950 p-5 shadow-sm dark:shadow-black/25'>
              <Image source={ONBOARDING_IMAGES[item.image]} contentFit='cover' style={{width: '100%', height: height * 0.4, borderRadius: 24}} />
              <Text className='text-3xl font-bold text-center mt-6 text-black dark:text-white'>{item.title}</Text>
              <Text className='text-gray-500 dark:text-slate-300 text-center mt-3 text-base'>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Pressable onPress={next} className='mb-10 relative -top-14 mx-4 bg-custom-primary-color py-4 rounded-xl shadow-lg shadow-custom-primary-color/30'>
        <Text className='text-white text-center font-semibold'>{index === pages.length - 1 ? t('onboarding.button.start') : t('onboarding.button.next')}</Text>
      </Pressable>
      <Text className='text-center text-sm px-4 text-black dark:text-slate-300'>{t('onboarding.footer.agreement')}</Text>
    </View>
  );
}
