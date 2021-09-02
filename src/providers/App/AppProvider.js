import React, { createContext, useReducer } from 'react';
import AppReducer, { initialApp } from './AppReducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(AppReducer, initialApp);

  return <AppContext.Provider value={{ app, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext };
export default AppProvider;
