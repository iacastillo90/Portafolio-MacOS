import { createContext, useState } from 'react';

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [openApps, setOpenApps] = useState({
    finder: false,
  });

  const openApp = (appName) => setOpenApps({ ...openApps, [appName]: true });
  const closeApp = (appName) => setOpenApps({ ...openApps, [appName]: false });

  return (
    <WindowContext.Provider value={{ openApps, openApp, closeApp }}>
      {children}
    </WindowContext.Provider>
  );
};