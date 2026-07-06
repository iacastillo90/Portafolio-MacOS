import { createContext, useState } from 'react';

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [openApps, setOpenApps] = useState({
    finder: false,
  });
  const [minimizedApps, setMinimizedApps] = useState({});

  const openApp = (appName) => {
    setOpenApps(prev => ({ ...prev, [appName]: true }));
    setMinimizedApps(prev => ({ ...prev, [appName]: false }));
  };

  const closeApp = (appName) => {
    setOpenApps(prev => ({ ...prev, [appName]: false }));
  };

  const minimizeApp = (appName) => {
    setMinimizedApps(prev => ({ ...prev, [appName]: true }));
  };

  return (
    <WindowContext.Provider value={{ openApps, minimizedApps, openApp, closeApp, minimizeApp }}>
      {children}
    </WindowContext.Provider>
  );
};