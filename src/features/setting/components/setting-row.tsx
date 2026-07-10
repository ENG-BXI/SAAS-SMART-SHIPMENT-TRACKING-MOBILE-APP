import {View, Pressable, Switch} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {Text} from '@/components/ui/text';
import {useState} from 'react';
import React from 'react';
import {cn} from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  value?: string;
  type?: 'switch';
  switchValue?: boolean;
  onToggle?: (value: boolean) => void;
  isLast?: boolean;
  onPress?: () => void;
}

export function SettingRow({icon, color, title, value, type, switchValue, onToggle, isLast, onPress}: Props) {
  const [enabled, setEnabled] = useState(false);
  const isControlledSwitch = type === 'switch' && typeof switchValue === 'boolean' && typeof onToggle === 'function';
  const currentValue = isControlledSwitch ? switchValue : enabled;
  const {isRtl} = useLanguage();

  const handleSwitchChange = (nextValue: boolean) => {
    if (isControlledSwitch) {
      onToggle?.(nextValue);
    } else {
      setEnabled(nextValue);
    }
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    if (type === 'switch') {
      handleSwitchChange(!currentValue);
    }
  };

  return (
    <Pressable onPress={handlePress} className={cn('py-[18px] flex-row items-center justify-between active:opacity-60 bg-white dark:bg-slate-950', !isLast && 'border-b border-slate-200 dark:border-slate-800')}>
      <View className='flex-row items-center flex-1'>
        <View
          className='w-9 h-9 rounded-[10px] items-center justify-center mr-3'
          style={{
            backgroundColor: color
          }}
        >
          <Ionicons name={icon} color='white' size={20} />
        </View>

        <Text className='text-[17px] text-black dark:text-white flex-1'>{title}</Text>
      </View>

      {type === 'switch' ? (
        <Switch
          value={currentValue}
          onValueChange={handleSwitchChange}
          trackColor={{
            false: '#D1D1D6',
            true: '#34C759'
          }}
          thumbColor='#fff'
        />
      ) : (
        <View className='flex-row items-center'>
          {value && <Text className='text-[17px] text-[#8E8E93] dark:text-slate-400 mr-2'>{value}</Text>}
          <MaterialIcons name={isRtl ? 'keyboard-arrow-left' : 'keyboard-arrow-right'} size={24} />
        </View>
      )}
    </Pressable>
  );
}
