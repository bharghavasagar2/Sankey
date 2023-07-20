import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language resources
import translationEN from '../locales/en.json';
import translationFR from '../locales/fr.json';
// Add more language resources as needed

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
      // Add more language resources as needed
    },
  });

export default i18n;
