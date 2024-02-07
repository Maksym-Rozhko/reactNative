import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import styles from './CardStyles';
import { Item } from '../../components/Item/Item';
import { mockItemData } from '../Home/HomeScreen';

import { HomeStackParamList } from '@/navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Product'>;

const CardScreen = ({ route }: Props) => {
  return (
    <View style={styles.details}>
      <Item itemData={route.params.item} numberOfLines={0} styles={styles.itemDetails} />

      <Text style={styles.screenTitle}>Product Popular</Text>
      <Item itemData={mockItemData[1]} />
      <Item itemData={mockItemData[9]} />
    </View>
  );
};

export { CardScreen };
