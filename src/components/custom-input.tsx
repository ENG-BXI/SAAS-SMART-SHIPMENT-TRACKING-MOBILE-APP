import React, {ReactNode} from 'react';
import {TextInput, View} from 'react-native';
import {Label} from './ui/label';
import {Input} from './ui/input';
import {cn} from '@/lib/utils';
import {ControllerRenderProps, FieldValues} from 'react-hook-form';
import {Text} from './ui/text';
interface CustomInputProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T>;
  invalid: boolean;
  error?: string;
  subfixIcon?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  className?: string;
  isPassword?: boolean;
  props?: React.ComponentProps<typeof TextInput> & React.RefAttributes<TextInput>;
}
function CustomInput<T extends FieldValues>({label, field, labelClassName, inputClassName, subfixIcon, isPassword = false, className, invalid, error, props}: CustomInputProps<T>) {
  return (
    <View className={cn('mb-3 relative', className)}>
      {label && <Label className={cn('font-semibold text-lg mb-1', labelClassName)}>{label}</Label>}
      <Input value={field.value} onChangeText={field.onChange} className={cn('h-12 rounded-2xl border-gray-400 pr-11', inputClassName)} secureTextEntry={isPassword} {...props} />
      <View className='absolute top-11 right-4'>{subfixIcon}</View>
      {invalid && <Text className='ps-2 text-red-500 text-sm'>{error}</Text>}
    </View>
  );
}

export default CustomInput;
