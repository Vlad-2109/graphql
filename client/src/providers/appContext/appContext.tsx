import { useReducer, createContext } from 'react';
import { useDefaultContext } from './defaultContext';
import { STORAGE_KEY } from '../../const';
import { saveToStorage } from '../../utils/localStorage';
import {
  AppAction,
  AppActionKind,
  AppContextType,
  AppState,
} from './contextType';

const AppContext = createContext<AppContextType | null>(null);

let reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionKind.SETLOCALE:
      saveToStorage(STORAGE_KEY, action.payload);
      return { ...state, locale: action.payload };
  }
};

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultContext = useDefaultContext();
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
