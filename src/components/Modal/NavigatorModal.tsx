import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import styles from './NavigatorModalStyles';
import { RootState } from '../../store/';
import { CustomPressable } from '../CustomPressable/CustomPressable';
import { Item } from '../Item/Item';

import { HomeStackParamList } from '@/navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'ModalScreen'>;

const ModalScreen = ({ navigation }: Props) => {
  const favorites = useSelector((state: RootState) => state.favorites.cartItems);

  return (
    <View style={styles.container}>
      <CustomPressable style={styles.closeButton} onPress={navigation.goBack}>
        <Text style={styles.closeButtonText}>X</Text>
      </CustomPressable>
      <Text style={styles.screenTitle}>Wish List</Text>
      <View style={styles.container}>
        {favorites.length === 0 ? (
          <Text style={styles.screenTitle}>Обранi порожнi</Text>
        ) : (
          <View style={styles.flatlistParent}>
            <FlatList
              data={favorites}
              renderItem={({ item }) => <Item itemData={item} isInBasket={false} isInFavorites />}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export { ModalScreen };
