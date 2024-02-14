import 'react-native-gesture-handler';

// import { Navigation } from '@/navigation';
import { View, Text } from 'react-native';

import useOrientation from '@/hooks/useOrientation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  const orientation = useOrientation();

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
