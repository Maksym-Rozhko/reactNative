import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Image, View } from 'react-native';

import styles from './NavigatorModalStyles';
import { CustomPressable } from '../CustomPressable/CustomPressable';

import { HomeStackParamList } from '@/navigation/native-stack';

const likeImage = require('../../../assets/like.png');

type Props = NativeStackScreenProps<HomeStackParamList, 'ModalScreen'>;

const ModalScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CustomPressable style={styles.closeButton} onPress={navigation.goBack}>
        <Text style={styles.closeButtonText}>X</Text>
      </CustomPressable>
      <Text style={styles.screenTitle}>Wish List</Text>
      <Image style={styles.likeImage} source={likeImage} />
    </View>
  );
};

export { ModalScreen };
