import { Text, View, useColorScheme, Switch } from 'react-native';

import styles from './SettingsStyles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTheme, toggleTheme } from '../../store/theme/themeSlice';

const SettingsScreen = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const isDark = useColorScheme() === 'dark';
  const screenTitleStyle = [styles.screenTitle, { color: isDark ? '#fff' : '#000' }];

  const handleThemeChange = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.screenTitle, screenTitleStyle]}>Settings Screen</Text>
      <Text style={[styles.screenTitle, screenTitleStyle]}>{theme}</Text>
      <Switch value={theme === 'dark'} onValueChange={handleThemeChange} />
    </View>
  );
};

export { SettingsScreen };
