import { useState, useCallback } from 'react';

interface RefreshState {
  isRefreshing: boolean;
  onRefresh: () => void;
}

const useRefresh = (callback: () => void): RefreshState => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      callback();
    }, 2000);
  }, []);

  return {
    isRefreshing,
    onRefresh: handleRefresh,
  };
};

export { useRefresh };
