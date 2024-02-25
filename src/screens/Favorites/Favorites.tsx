import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import styles from './FavoritesStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { Item } from '../../components/Item/Item';
import { RootState } from '../../store';
import { clearFavorites } from '../../store/favorites/favoritesSlice';

const FavoritesScreen = () => {
  const favorites = useAppSelector((state: RootState) => state.favorites.cartItems);
  const dispatch = useAppDispatch();

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
    Toast.show({
      type: 'error',
      text1: 'Обранi товари очищено',
      visibilityTime: 2000,
    });
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.screenTitle}>Обранi порожнi</Text>
      ) : (
        <View style={styles.flatlistParent}>
          <FlatList
            data={favorites}
            renderItem={({ item }) => <Item itemData={item} isInBasket={false} isInFavorites />}
            nestedScrollEnabled
            maxToRenderPerBatch={3}
            initialNumToRender={3}
          />
          <CustomPressable onPress={handleClearFavorites} style={styles.favoritesClearBtn}>
            <Text style={styles.favoritesClearBtnText}>Очистити обранi</Text>
          </CustomPressable>
        </View>
      )}
    </View>
  );
};

export { FavoritesScreen };
