import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabsGroup, TabsGroupParamList } from '../bottom-tabs';

import { CardScreen } from '@/screens/Card/Card';

export type HomeStackParamList = {
  TabsGroup: NavigatorScreenParams<TabsGroupParamList>;
  Product: {
    item: {
      id: string;
      title: string;
      isNew: boolean;
      image: string;
      newPrice: string;
      oldPrice: string;
      descriotion: string;
    };
  };
};

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="Product"
        component={CardScreen}
        options={{
          presentation: 'card',
          headerTitle: 'Product Details',
        }}
      />
    </HomeStack.Navigator>
  );
};
