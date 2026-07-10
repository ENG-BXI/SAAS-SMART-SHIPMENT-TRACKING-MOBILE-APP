import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';

import ar from '../locales/ar.json';
import bn from '../locales/bn.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import hi from '../locales/hi.json';
import pt from '../locales/pt.json';
import ru from '../locales/ru.json';
import ur from '../locales/ur.json';
import zh from '../locales/zh.json';
import es from '../locales/es.json';
import {LANGUAGE_KEY, SUPPORTED_LANGUAGES, SupportedLanguage} from '@/lib/language';

async function initI18n() {
  const savedLanguage = (await SecureStore.getItemAsync(LANGUAGE_KEY)) as SupportedLanguage | null;
  const language: SupportedLanguage = savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : 'en';

  I18nManager.allowRTL(true);
  I18nManager.forceRTL(language === 'ar' || language === 'ur');

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: language,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      },
      zh: {
        translation: zh
      },
      hi: {
        translation: hi
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      bn: {
        translation: bn
      },
      pt: {
        translation: pt
      },
      ru: {
        translation: ru
      },
      ur: {
        translation: ur
      }
    }
  });

  return language;
}

export {initI18n};

export default i18n;
