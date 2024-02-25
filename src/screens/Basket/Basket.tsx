import { Text, View } from 'react-native';

import styles from './BasketStyles';

const BasketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Basket Screen</Text>
    </View>
  );
};

export { BasketScreen };
