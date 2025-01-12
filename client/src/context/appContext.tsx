import { useReducer, createContext } from 'react';
import defaultContext from './defaultContext';
import { AppAction, AppActionKind, AppContextType, AppState } from './contextType';

const AppContext = createContext<AppContextType | null>(null);

let reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionKind.RESET:
      return defaultContext;
    case AppActionKind.SETLOCALE:
      return { ...state, locale: action.payload };
  }
};

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
