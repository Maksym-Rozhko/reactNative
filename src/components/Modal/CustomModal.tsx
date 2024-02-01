import React, { ReactNode } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './CustomModalStyles';
import { CustomPressable } from '../CustomPressable/CustomPressable';

interface ModalProps {
  modalVisibleProp: boolean;
  setModalVisibleProp: (visible: boolean) => void;
  onPress?: () => void;
  children?: ReactNode;
  style?: ViewStyle | { [key: string]: any };
}
const CustomModal: React.FC<ModalProps> = ({ children, style, onPress, modalVisibleProp, setModalVisibleProp }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisibleProp}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleProp(false);
        }}>
        <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPress={() => setModalVisibleProp(false)}>
          <View style={[styles.centeredView, styles.touchableBackground]}>
            <TouchableOpacity style={styles.modalView} onPress={() => setModalVisibleProp(true)} activeOpacity={1}>
              {children || (
                <CustomPressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisibleProp(false)}>
                  <Text style={styles.textStyle}>Close Modal</Text>
                </CustomPressable>
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export { CustomModal };
