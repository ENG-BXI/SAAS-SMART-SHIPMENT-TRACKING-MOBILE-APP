import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SettingRow} from '@/features/setting/components/setting-row';
import {SettingSection} from '@/features/setting/components/setting-section';
import {Text} from '@/components/ui/text';
import {useLanguage} from '@/hooks/useLanguage';
import {useThemeMode} from '@/hooks/use-theme-mode';

export default function SettingsScreen() {
  const {t} = useTranslation();
  const {changeLanguage, language} = useLanguage();
  const {themeMode, setThemeMode} = useThemeMode();

  const currentLanguageLabel = language === 'ar' ? t('settings.languageOptions.ar') : t('settings.languageOptions.en');

  const toggleTheme = () => setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => changeLanguage(language === 'en' ? 'ar' : 'en');

  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-slate-950'>
      <ScrollView className='' showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic'>
        <View className='mb-4'>
          <Text className='text-[34px] font-bold text-black dark:text-white'>{t('settings.title')}</Text>
          <Text className='text-[15px] text-[#6D6D72] dark:text-slate-400 mt-2'>{t('settings.description')}</Text>
        </View>

        <SettingSection title={t('settings.preferences')}>
          <SettingRow icon='moon' color='#5856D6' title={t('settings.darkMode')} type='switch' switchValue={themeMode === 'dark'} onToggle={toggleTheme} />
          <SettingRow icon='language' color='#34C759' title={t('settings.language')} value={currentLanguageLabel} onPress={toggleLanguage} />
        </SettingSection>

        <SettingSection title={t('settings.support')}>
          <SettingRow icon='help-circle' color='#34C759' title={t('settings.help')} />
          <SettingRow icon='information-circle' color='#8E8E93' title={t('settings.about')} isLast />
        </SettingSection>
      </ScrollView>
    </SafeAreaView>
  );
}
