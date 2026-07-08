import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Dimensions, Pressable} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Goods delivery is now easier',
    desc: 'Now, managing goods delivery has become simpler than ever.',
    image: require('@/assets/images/onboard1.png')
  },
  {
    id: '2',
    title: 'Package tracking is safer',
    desc: 'Tracking your package ensures a safer delivery experience.',
    image: require('@/assets/images/onboard2.png')
  },
  {
    id: '3',
    title: 'Use points for shipping deals',
    desc: 'Consider utilizing points to unlock exclusive shipping deals.',
    image: require('@/assets/images/onboard3.png')
  }
];
export const ONBOARDING_KEY = 'onBoard';
export default function Onboarding() {
  const flatListRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < DATA.length - 1) {
      flatListRef.current?.scrollToIndex({index: index + 1});
    }
    if (index == DATA.length - 1) goToLogin();
  };

  const onScrollEnd = (e: any) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };
  const onSkip = () => {
    const lastIndex = DATA.length - 1;
    flatListRef.current?.scrollToIndex({index: lastIndex});
    setIndex(lastIndex);
  };
  const goToLogin = () => {
    SecureStore.setItem(ONBOARDING_KEY, 'true');
    router.replace('/login');
  };
  return (
    <View className='flex-1'>
      {/* Header */}
      <View className='flex-row justify-between items-center px-5 pt-6'>
        <Text className='font-bold text-lg'>S3 Tracking System</Text>

        <Pressable onPress={onSkip}>
          <Text className='text-gray-500'>Skip</Text>
        </Pressable>
      </View>

      {/* Pages */}
      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        style={{maxHeight: 600}}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={onScrollEnd}
        className='self-center max-h-50!'
        renderItem={({item}) => (
          <View className='w-screen items-center justify-center px-5'>
            <Image source={item.image} contentFit='cover' style={{width: '100%', height: height * 0.4}} />
            <Text className='text-3xl font-bold text-center mt-6'>{item.title}</Text>
            <Text className='text-gray-500 text-center mt-3 text-base'>{item.desc}</Text>
          </View>
        )}
      />
      <Pressable onPress={next} className='mb-10 relative -top-14 mx-4 bg-custom-primary-color py-4 rounded-xl'>
        <Text className='text-white text-center font-semibold'>{index === DATA.length - 1 ? 'Start' : 'Next'}</Text>
      </Pressable>
      <Text className='text-center text-sm px-4'>By Login, you agree to our Terms of service and Terms and Privacy and policy.</Text>
    </View>
  );
}
