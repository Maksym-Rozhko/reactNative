import 'react-native-gesture-handler';

import { Navigation } from '@/navigation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HomeScreen } from '@/screens/Home/HomeScreen';
// import { Carousel } from '@/screens/Carousel/Carousel';
// import { CardScreen } from '@/screens/Card/Card';

export default function App() {
  return (
    <Navigation />
    // <SafeAreaProvider>
    //   <HomeScreen />
    //   <Carousel />
    //   <CardScreen />
    // </SafeAreaProvider>
  );
}
