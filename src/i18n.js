import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = require('./locales/en.json');
const mr = require('./locales/mr.json');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mr: { translation: mr },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
