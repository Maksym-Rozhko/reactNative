// import { Navigation } from '@/navigation';
import React, { useCallback } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { useApi } from '@/hooks/useApi';
import { useBackHandler } from '@/hooks/useBackHandler';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useOrientation } from '@/hooks/useOrientation';
import { useRefresh } from '@/hooks/useRefresh';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  const orientation = useOrientation();
  const { keyboardShown, keyboardHeight, keyboardWidth } = useKeyboard();
  const { isRefreshing, onRefresh } = useRefresh(() => {
    console.warn('Дані оновлено');
  });

  const handleBack = useCallback(() => {
    console.warn('Нажата кнопка Назад');
    return true;
  }, []);

  useBackHandler(handleBack);

  const { data: postData, error, isLoading } = useApi('https://jsonplaceholder.typicode.com/posts/1');

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
      <Button title="Refresh" onPress={onRefresh} disabled={isRefreshing} />
      {isRefreshing && <Text>Оновлення...</Text>}

      {isLoading && <Text>Оновлення...</Text>}
      {error && <Text>Error: {error['message']}</Text>}
      {postData && (
        <View>
          <Text>Post:</Text>
          <Text>{`ID: ${postData['id']}`}</Text>
          <Text>{`Title: ${postData['title']}`}</Text>
          <Text>{`Body: ${postData['body']}`}</Text>
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
