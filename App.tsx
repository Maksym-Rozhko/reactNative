import 'react-native-gesture-handler';

// import { Navigation } from '@/navigation';
import React, { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';

import { useBackHandler } from '@/hooks/useBackHandler';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useOrientation } from '@/hooks/useOrientation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  const orientation = useOrientation();
  const { keyboardShown, keyboardHeight, keyboardWidth } = useKeyboard();

  const handleBack = useCallback(() => {
    console.warn('Натиснуто кнопку Назад');
    return true;
  }, []);

  useBackHandler(handleBack);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`Orientation: ${orientation}`}</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
        placeholder="Введіть текст"
      />
      <Text>Клавіатурa {keyboardShown ? 'відкрита' : 'закрита'}</Text>
      {keyboardShown && (
        <View>
          <Text>{`Висота клавіатури: ${keyboardHeight}`}</Text>
          <Text>{`Ширина клавіатури: ${keyboardWidth}`}</Text>
        </View>
      )}
    </View>

    // <Navigation />
    // <SafeAreaProvider>
    //   <HomeScreen />
    //   <Carousel />
    //   <CardScreen />
    // </SafeAreaProvider>
  );
}
