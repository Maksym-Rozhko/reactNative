import { useEffect, useRef, useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './ProfileStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectorFirstName,
  selectorFullName,
  selectorLastName,
  setFirstName,
  setLastName,
} from '../../store/user/userSlice';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const firstInputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing && firstInputRef.current !== null) {
      firstInputRef.current.focus();
    }
  }, [isEditing]);

  const firstName = useAppSelector(selectorFirstName);
  const lastName = useAppSelector(selectorLastName);
  const fullName = useAppSelector(selectorFullName);

  const handleSetFirstNameChange: TextInputProps['onChangeText'] = (text) => dispatch(setFirstName(text));
  const handleSetLastNameChange: TextInputProps['onChangeText'] = (text) => dispatch(setLastName(text));

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.screenTitle}>fullName: {fullName}</Text>
      <CustomPressable style={styles.editBtn} onPress={handleEditProfile}>
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </CustomPressable>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={handleSetFirstNameChange}
        editable={isEditing}
        ref={firstInputRef}
      />
      <TextInput style={styles.input} value={lastName} onChangeText={handleSetLastNameChange} editable={isEditing} />
    </View>
  );
};

export { ProfileScreen };
