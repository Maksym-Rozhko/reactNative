import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import styles from './CardStyles';
import { Item } from '../../components/Item/Item';

import { HomeStackParamList } from '@/navigation/native-stack';
import { RootState } from '@/store';
import { ItemData } from '../../store/products/productsSlice';
import { connect } from 'react-redux';

type Props = NativeStackScreenProps<HomeStackParamList, 'Product'> & {
  items: ItemData[]; 
};

const mapStateToProps = (state: RootState) => ({
  items: state.products,
});

const CardScreen = ({ route, items }: Props) => {
  return (
    <View style={styles.details}>
      <Item itemData={route.params.item} numberOfLines={0} styles={styles.itemDetails} />

      <Text style={styles.screenTitle}>Product Popular</Text>
      <Item itemData={items[1]} />
      <Item itemData={items[9]} />
    </View>
  );
};

export default connect(mapStateToProps)(CardScreen);