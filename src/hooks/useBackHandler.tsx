import { useEffect } from 'react';
import { BackHandler } from 'react-native';

type Callback = () => boolean;

const useBackHandler = (callback: Callback): void => {
  useEffect(() => {
    const handleBackPress = () => {
      return callback();
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [callback]);
};

export { useBackHandler };
