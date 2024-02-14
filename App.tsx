import 'react-native-gesture-handler';

// import { Navigation } from '@/navigation';
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';

import { useBackHandler } from '@/hooks/useBackHandler';
import { useOrientation } from '@/hooks/useOrientation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  const orientation = useOrientation();

  const handleBack = useCallback(() => {
    console.warn('Нажата кнопка назад');
    return true;
  }, []);

  useBackHandler(handleBack);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`Orientation: ${orientation}`}</Text>
    </View>
    // <Navigation />
    // <SafeAreaProvider>
    //   <HomeScreen />
    //   <Carousel />
    //   <CardScreen />
    // </SafeAreaProvider>
  );
}
