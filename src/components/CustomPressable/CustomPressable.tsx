import React, { ReactNode } from 'react';
import { Pressable, ViewStyle } from 'react-native';

interface CustomPressableProps {
  onPress?: () => void;
  children: ReactNode;
  style?: ViewStyle | { [key: string]: any };
}

const CustomPressable: React.FC<CustomPressableProps> = ({ children, style, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true }}
      onPress={onPress}
      style={({ pressed }) => [
        style,
        {
          transform: pressed ? 'scale(1.2)' : 'scale(1)',
        },
      ]}>
      {children}
    </Pressable>
  );
};

export { CustomPressable };
