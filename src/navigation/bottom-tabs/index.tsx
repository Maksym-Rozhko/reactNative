import { Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';

import { useAppSelector } from '../../hooks/useAppSelector';
import { BasketScreen } from '../../screens/Basket/Basket';
import { Carousel } from '../../screens/Carousel/Carousel';
import { FavoritesScreen } from '../../screens/Favorites/Favorites';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { ProfileScreen } from '../../screens/Profile/Profile';
import { DrawerParamList } from '../drawer';
import { HomeStackParamList } from '../native-stack';

import { RootState } from '@/store';

export type TabsGroupParamList = {
  Home: undefined;
  Products: undefined;
  Profile: undefined;
  Basket: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabsGroupParamList>();

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'TabsGroup'>,
  DrawerScreenProps<DrawerParamList>
>;

export const TabsGroup = ({ navigation }: Props) => {
  const totalItemsInCart = useAppSelector((state: RootState) => state.basket.totalItems);
  const totalItemsInFavorites = useAppSelector((state: RootState) => state.favorites.totalItems);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5e961a',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Carousel}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={navigation.openDrawer}>
              <Entypo name="menu" size={24} color="black" />
            </Pressable>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'storefront' : 'storefront-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-sharp'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'basket' : 'basket-sharp'} size={size} color={color} />
          ),
          tabBarBadge: totalItemsInCart || undefined,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'heart' : 'heart-sharp'} size={size} color={color} />
          ),
          tabBarBadge: totalItemsInFavorites || undefined,
        }}
      />
    </Tab.Navigator>
  );
};
