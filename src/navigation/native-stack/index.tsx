import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModalScreen } from '../../components/Modal/NavigatorModal';
import { CardScreen } from '../../screens/Card/Card';
import { TabsGroup, TabsGroupParamList } from '../bottom-tabs';

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
      description: string;
    };
  };
  ModalScreen: undefined;
};

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="TabsGroup"
        component={TabsGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Product"
        component={CardScreen}
        options={{
          presentation: 'card',
          headerTitle: 'Product Details',
        }}
      />
      <HomeStack.Screen name="ModalScreen" component={ModalScreen} options={{ presentation: 'modal' }} />
    </HomeStack.Navigator>
  );
};
