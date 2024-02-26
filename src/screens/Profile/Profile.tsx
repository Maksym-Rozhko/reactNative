import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Text, TextInputProps, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './ProfileStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectOrderHistory } from '../../store/order/orderSlice';
import { selectorFirstName, selectorLastName, setFirstName, setLastName } from '../../store/user/userSlice';

const avatarImage = require('../../../assets/avatar.png');

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<'OrdersHistoty' | 'EditProfile'>('OrdersHistoty');
  const [isEditing, setIsEditing] = useState(false);
  const firstInputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const ordersHistoty = useAppSelector(selectOrderHistory);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleTabPress = (tabName: 'OrdersHistoty' | 'EditProfile') => {
    setActiveTab(tabName);
    if (tabName === 'EditProfile') {
      handleEditProfile();
    } else {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (isEditing && firstInputRef.current !== null) {
      firstInputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    console.log(ordersHistoty);
  }, [ordersHistoty]);

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Ionicons name="alert-circle" size={20} color="orange" />;
      case 'Done':
        return <Ionicons name="checkmark-circle" size={20} color="green" />;
      case 'Canceled':
        return <Ionicons name="close-circle" size={20} color="red" />;
      default:
        return null;
    }
  };

  const firstName = useAppSelector(selectorFirstName);
  const lastName = useAppSelector(selectorLastName);

  const handleSetFirstNameChange: TextInputProps['onChangeText'] = (text) => dispatch(setFirstName(text));
  const handleSetLastNameChange: TextInputProps['onChangeText'] = (text) => dispatch(setLastName(text));

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={avatarImage} />
        <Text style={styles.screenTitle}>{firstName}</Text>
        <Text style={styles.screenTitle}>{lastName}</Text>
      </View>
      <View style={styles.profileTabs}>
        <CustomPressable
          onPress={() => {
            handleTabPress('OrdersHistoty');
          }}>
          <Text style={[styles.profileTabBtn, { color: activeTab === 'OrdersHistoty' ? 'rgb(94, 150, 26)' : 'black' }]}>
            Історія замовлення
          </Text>
        </CustomPressable>
        <CustomPressable
          onPress={() => {
            handleTabPress('EditProfile');
            handleEditProfile();
          }}>
          <Text style={[styles.profileTabBtn, { color: activeTab === 'EditProfile' ? 'rgb(94, 150, 26)' : 'black' }]}>
            Редагування профілю
          </Text>
        </CustomPressable>
      </View>
      {activeTab === 'OrdersHistoty' && (
        <View style={styles.orderContainer}>
          {ordersHistoty.length > 0 ? (
            ordersHistoty.map((order, index) => (
              <View style={styles.order} key={index}>
                <View>
                  <Text style={styles.orderText}>
                    Order Id: <Text style={styles.orderTextBold}> {order.id || order.basketItems[0].id}</Text>
                  </Text>
                  <Text style={styles.orderText}>
                    Address: <Text style={styles.orderTextBold}> {order.address}</Text>
                  </Text>
                  <Text style={styles.orderText}>
                    Payment Method: <Text style={styles.orderTextBold}> {order.paymentMethod}</Text>
                  </Text>
                  <Text style={styles.orderText}>
                    totalAmount: <Text style={styles.orderTextBold}> ${order.totalAmount}</Text>
                  </Text>
                </View>
                <View style={styles.orderStatus}>
                  {renderStatusIcon(order.status)}
                  <Text style={styles.orderStatusText}>{order.status}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.screenTitleOrder}>Історія замовлень пуста</Text>
          )}
        </View>
      )}
      {activeTab === 'EditProfile' && (
        <View>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={handleSetFirstNameChange}
            editable={isEditing}
            ref={firstInputRef}
          />
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={handleSetLastNameChange}
            editable={isEditing}
          />
        </View>
      )}
    </View>
  );
};

export { ProfileScreen };
