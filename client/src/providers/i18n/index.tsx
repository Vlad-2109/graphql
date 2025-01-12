import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';
import { LOCALES } from '../../const';
import messages from '../../messages';
import { I18NProviderProps } from './i18nType';

const Provider: React.FC<I18NProviderProps> = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={flatten(messages[locale])}
  >
    {children}
  </IntlProvider>
);

Provider.displayName = 'I18nProvider';

export default Provider;
