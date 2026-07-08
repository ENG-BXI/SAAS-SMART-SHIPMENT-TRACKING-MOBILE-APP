import React, {useEffect} from 'react';
import {cn} from '@/lib/utils';
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

interface SkeletonProps {
  className?: string;
}

function Skeleton({className}: SkeletonProps) {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.8, {
        duration: 600
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  return <Animated.View style={animatedStyle} className={cn('bg-gray-300 rounded-md', className)} />;
}

export {Skeleton};
