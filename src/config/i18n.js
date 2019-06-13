import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from '../locale/en';
import kh from '../locale/kh';

i18n
  .use(reactI18nextModule)
  .init({
    resources: {
      en,
      kh,
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });
export default i18n;
