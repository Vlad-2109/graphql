export enum AppActionKind {
  RESET = 'reset',
  SETLOCALE = 'setLocale',
}

export interface AppAction {
  type: AppActionKind;
  payload: string;
}

export interface AppState {
  locale: string | undefined;
}

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}
