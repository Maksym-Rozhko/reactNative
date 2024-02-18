import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './ProfileStyles';

import { CustomPressable } from '@/components/CustomPressable/CustomPressable';
import { useRootStore } from '@/context';

const ProfileScreen = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const firstInputRef = useRef<TextInput>(null);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing && firstInputRef.current !== null) {
      firstInputRef.current.focus();
    }
  }, [isEditing]);

  const {
    user: { firstName, lastName, fullName, setFirstName, setLastName },
  } = useRootStore();
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
        onChangeText={setFirstName}
        editable={isEditing}
        ref={firstInputRef}
      />
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} editable={isEditing} />
    </View>
  );
});

export { ProfileScreen };
