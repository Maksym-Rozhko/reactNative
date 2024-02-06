import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { HomeScreen } from '@/screens/Home/HomeScreen';
import { Carousel } from '@/components/Carousel/Carousel';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      <Carousel />
    </SafeAreaProvider>
  );
}
