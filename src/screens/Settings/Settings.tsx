import { observer } from 'mobx-react-lite';
import { Text, View, useColorScheme, Switch } from 'react-native';

import styles from './SettingsStyles';

import { useRootStore } from '@/context';

const SettingsScreen = observer(() => {
  const { ui } = useRootStore();
  const isDark = useColorScheme() === 'dark';
  const screenTitleStyle = [styles.screenTitle, { color: isDark ? '#fff' : '#000' }];

  return (
    <View style={styles.container}>
      <Text style={[styles.screenTitle, screenTitleStyle]}>Settings Screen</Text>
      <Text style={[styles.screenTitle, screenTitleStyle]}>{ui.theme}</Text>
      <Switch value={ui.theme === 'dark'} onValueChange={() => ui.setTheme(ui.theme === 'dark' ? 'light' : 'dark')} />
    </View>
  );
});

export { SettingsScreen };
