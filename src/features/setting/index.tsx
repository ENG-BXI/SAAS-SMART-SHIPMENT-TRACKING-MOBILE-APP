import {ScrollView, View, Modal, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {router} from 'expo-router';
import {SettingRow} from '@/features/setting/components/setting-row';
import {SettingSection} from '@/features/setting/components/setting-section';
import {Text} from '@/components/ui/text';
import {useLanguage, SupportedLanguage} from '@/hooks/useLanguage';
import {useThemeMode} from '@/hooks/use-theme-mode';

const languageOptions: Array<{code: SupportedLanguage; label: string}> = [
  {code: 'en', label: 'English'},
  {code: 'ar', label: 'العربية'},
  {code: 'zh', label: '中文'},
  {code: 'hi', label: 'हिन्दी'},
  {code: 'es', label: 'Español'},
  {code: 'fr', label: 'Français'},
  {code: 'bn', label: 'বাংলা'},
  {code: 'pt', label: 'Português'},
  {code: 'ru', label: 'Русский'},
  {code: 'ur', label: 'اردو'}
];

export default function SettingsScreen() {
  const {t} = useTranslation();
  const {changeLanguage, language} = useLanguage();
  const {themeMode, setThemeMode} = useThemeMode();
  const [languagePickerVisible, setLanguagePickerVisible] = useState(false);

  const currentOption = languageOptions.find(option => option.code === language);
  const currentLanguageLabel = currentOption ? t(currentOption.label) : language;

  const toggleTheme = () => setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  const openLanguagePicker = () => setLanguagePickerVisible(true);
  const closeLanguagePicker = () => setLanguagePickerVisible(false);
  const selectLanguage = async (lang: SupportedLanguage) => {
    await changeLanguage(lang);
    closeLanguagePicker();
  };

  const openAbout = () => {
    router.push('/about');
  };

  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-slate-950'>
      <ScrollView className='' showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic'>
        <View className='mb-4'>
          <Text className='text-[34px] font-bold text-black dark:text-white'>{t('settings.title')}</Text>
          <Text className='text-[15px] text-[#6D6D72] dark:text-slate-400 mt-2'>{t('settings.description')}</Text>
        </View>

        <SettingSection title={t('settings.preferences')}>
          <SettingRow icon='moon' color='#5856D6' title={t('settings.darkMode')} type='switch' switchValue={themeMode === 'dark'} onToggle={toggleTheme} />
          <SettingRow icon='language' color='#34C759' title={t('settings.language')} value={currentLanguageLabel} onPress={openLanguagePicker} />
        </SettingSection>

        <SettingSection title={t('settings.support')}>
          <SettingRow icon='information-circle' color='#8E8E93' title={t('settings.about')} onPress={openAbout} isLast />
        </SettingSection>
      </ScrollView>

      <Modal visible={languagePickerVisible} transparent animationType='fade' onRequestClose={closeLanguagePicker}>
        <View className='flex-1 bg-black/40 justify-end'>
          <Pressable className='flex-1' onPress={closeLanguagePicker} />
          <View className='bg-white dark:bg-slate-950 rounded-t-[30px] p-4'>
            <Text className='text-lg font-semibold text-black dark:text-white mb-3'>{t('settings.language')}</Text>
            {languageOptions.map(option => {
              const selected = option.code === language;
              return (
                <Pressable key={option.code} onPress={() => selectLanguage(option.code)} className={`rounded-2xl px-4 py-4 mb-2 ${selected ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white dark:bg-slate-950'}`}>
                  <Text className={`text-base ${selected ? 'font-semibold text-black dark:text-white' : 'text-[#1C1C1E] dark:text-slate-200'}`}>{option.label}</Text>
                </Pressable>
              );
            })}
            <Pressable onPress={closeLanguagePicker} className='rounded-2xl px-4 py-4 bg-slate-100 dark:bg-slate-800'>
              <Text className='text-base text-center text-[#007AFF] dark:text-sky-400'>{t('settings.cancel') || 'Cancel'}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
