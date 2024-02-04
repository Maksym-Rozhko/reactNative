import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './DotIndicatorStyles';

interface DotIndicatorProps {
  slides: number;
  currentIndex: number;
  onPress: (index: number) => void;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({ slides, currentIndex, onPress }) => {
  return (
    <View style={styles.container}>
      {[...Array(slides).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(index)}
          style={[styles.dot, index === currentIndex ? styles.activeDot : undefined]}
        />
      ))}
    </View>
  );
};

export default DotIndicator;
