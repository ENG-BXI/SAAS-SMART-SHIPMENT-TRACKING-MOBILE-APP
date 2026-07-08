import React from 'react';
import {View, Pressable} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Text} from '@/components/ui/text';

interface ErrorStateProps {
  message?: string;
  technicalError?: string;
  onRetry?: () => void;
}

const ErrorState = ({message = 'Unable to load shipment data', technicalError, onRetry}: ErrorStateProps) => {
  return (
    <View className='flex-1 items-center justify-center px-6'>
      {/* Icon */}
      <View className='bg-red-100 h-24 w-24 rounded-full items-center justify-center mb-6'>
        <MaterialIcons name='cloud-off' size={45} color='#ef4444' />
      </View>

      {/* Title */}
      <Text className='text-2xl font-bold text-center'>Something went wrong</Text>

      {/* Message */}
      <Text className='text-gray-500 text-center mt-3 text-base'>{message}</Text>

      {/* Technical info */}
      {technicalError && (
        <View className='bg-gray-100 rounded-xl p-4 mt-5 w-full'>
          <Text className='font-bold text-sm mb-2'>Technical Details</Text>

          <Text className='text-xs text-gray-600'>{technicalError}</Text>
        </View>
      )}

      {/* Retry */}
      {onRetry && (
        <Pressable onPress={onRetry} className='bg-green-600 rounded-xl px-8 py-3 mt-6'>
          <Text className='text-white font-bold'>Try Again</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ErrorState;
