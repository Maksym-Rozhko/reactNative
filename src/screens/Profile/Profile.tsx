import { Text, View } from 'react-native';

import styles from './ProfileStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
    </View>
  );
};

export { ProfileScreen };
