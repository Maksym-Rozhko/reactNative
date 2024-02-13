import { Text, View } from 'react-native';

import styles from './SettingsStyles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Settings Screen</Text>
    </View>
  );
};

export { SettingsScreen };
