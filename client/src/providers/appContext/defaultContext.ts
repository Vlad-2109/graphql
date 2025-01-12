import { LOCALES } from '../../const';
import { STORAGE_KEY } from '../../const';
import { getFromStorage } from '../../utils/localStorage';

export const useDefaultContext = () => {
  return {
    locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
  };
};
