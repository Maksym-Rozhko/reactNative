import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

interface KeyboardState {
  keyboardShown: boolean;
  keyboardHeight: number;
  keyboardWidth: number;
}

const useKeyboard = (): KeyboardState => {
  const [keyboardState, setKeyboardState] = useState<KeyboardState>({
    keyboardShown: false,
    keyboardHeight: 0,
    keyboardWidth: 0,
  });

  useEffect(() => {
    const onKeyboardDidShow = (event: KeyboardEvent): void => {
      setKeyboardState({
        keyboardShown: true,
        keyboardHeight: event.endCoordinates.height,
        keyboardWidth: event.endCoordinates.width,
      });
    };

    const onKeyboardDidHide = (): void => {
      setKeyboardState({
        keyboardShown: false,
        keyboardHeight: 0,
        keyboardWidth: 0,
      });
    };

    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
  }, []);

  return keyboardState;
};

export { useKeyboard };
