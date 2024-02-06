import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      {/* <Carousel /> */}
      {/* <CardScreen /> */}
    </SafeAreaProvider>
  );
}
