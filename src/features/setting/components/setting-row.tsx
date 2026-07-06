import {View, Pressable, Switch} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Text} from '@/components/ui/text';
import {useState} from 'react';
import React from 'react';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  value?: string;
  type?: 'switch';
  isLast?: boolean;
  onPress?: () => void;
}

export function SettingRow({icon, color, title, value, type, isLast, onPress}: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Pressable onPress={onPress} className='py-[18px] flex-row items-center justify-between active:opacity-60'>
      <View className='flex-row items-center flex-1'>
        <View
          className='w-9 h-9 rounded-[10px] items-center justify-center mr-3'
          style={{
            backgroundColor: color
          }}
        >
          <Ionicons name={icon} color='white' size={20} />
        </View>

        <Text className='text-[17px] text-black flex-1'>{title}</Text>
      </View>

      {type === 'switch' ? (
        <Switch
          value={enabled}
          onValueChange={setEnabled}
          trackColor={{
            false: '#D1D1D6',
            true: '#34C759'
          }}
          thumbColor='#fff'
        />
      ) : (
        <View className='flex-row items-center'>
          {value && <Text className='text-[17px] text-[#8E8E93] mr-2'>{value}</Text>}

          <Ionicons name='chevron-forward' size={18} color='#C7C7CC' />
        </View>
      )}

    </Pressable>
  );
}
