import { createContext, FC, PropsWithChildren, useContext } from 'react';

import { rootStore } from '@/store';

const ApplicationContext = createContext<typeof rootStore | null>(null);

export const RootStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApplicationContext.Provider value={rootStore}>{children}</ApplicationContext.Provider>;
};

export const useRootStore = () => {
  const store = useContext(ApplicationContext);

  if (!store) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }

  return store;
};
