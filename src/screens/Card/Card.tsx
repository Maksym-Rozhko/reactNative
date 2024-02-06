import { Text, View } from 'react-native';
import { mockItemData } from '../Home/HomeScreen';
import { Item } from '../../components/Item/Item';

import styles from './CardStyles';

const CardScreen = () => {
    return (
        <View style={styles.details}>
            <Text>Product Details</Text>
            <Item itemData={mockItemData[0]} numberOfLines={0} styles={styles.itemDetails} />
            
            <Text>Product Popular</Text>
            <Item itemData={mockItemData[1]} />
            <Item itemData={mockItemData[9]} />
        </View>
    )
};

export { CardScreen };