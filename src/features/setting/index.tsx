import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {SettingRow} from '@/features/setting/components/setting-row';
import {SettingSection} from '@/features/setting/components/setting-section';
import {Text} from '@/components/ui/text';

export default function SettingsScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic'>
        <View className=''>
          <Text className='text-[34px] font-bold text-black'>الإعدادات</Text>
          <Text className='text-[15px] text-[#6D6D72] mt-2'>تحكم في تجربة التطبيق وخيارات الخصوصية والإشعارات.</Text>
        </View>

        <SettingSection title='التفضيلات'>
          <SettingRow icon='moon' color='#5856D6' title='الوضع الداكن' type='switch' />
          <SettingRow icon='language' color='#34C759' title='اللغة' value='العربية' />
        </SettingSection>

        <SettingSection title='الدعم'>
          <SettingRow icon='help-circle' color='#34C759' title='مساعدة' />
          <SettingRow icon='information-circle' color='#8E8E93' title='حول التطبيق' isLast />
        </SettingSection>
      </ScrollView>
    </SafeAreaView>
  );
}
