import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './CardStyles';
import { Item } from '../../components/Item/Item';
import { ItemData } from '../../store/products/productsSlice';

import { HomeStackParamList } from '@/navigation/native-stack';
import { RootState } from '@/store';

type Props = NativeStackScreenProps<HomeStackParamList, 'Product'> & {
  items: ItemData[];
};

const mapStateToProps = (state: RootState) => ({
  items: state.products,
});

const CardScreen = ({ route, items }: Props) => {
  return (
    <View style={styles.details}>
      <Item
        itemData={route.params.item}
        numberOfLines={0}
        styles={styles.itemDetails}
        isInBasket={false}
        isInFavorites={false}
      />

      <Text style={styles.screenTitle}>Product Popular</Text>
      <Item itemData={items[1]} isInBasket={false} isInFavorites={false} />
      <Item itemData={items[9]} isInBasket={false} isInFavorites={false} />
    </View>
  );
};

export default connect(mapStateToProps)(CardScreen);
