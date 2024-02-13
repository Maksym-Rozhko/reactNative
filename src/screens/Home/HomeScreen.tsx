import { useScrollToTop, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useRef, useState, RefObject } from 'react';
import { FlatList, View, Image, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import homeStyles from './HomeScreenStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { Item } from '../../components/Item/Item';
import { CustomModal } from '../../components/Modal/CustomModal';

import { HomeStackParamList } from '@/navigation/native-stack';

const checkedImage = require('../../../assets/checked.png');
const likeImage = require('../../../assets/like.png');
const searchImage = require('../../../assets/search.png');

interface ItemData {
  id: string;
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  descriotion: string;
}

export const mockItemData: ItemData[] = [
  {
    id: '141793-2158',
    title: 'Pizza 1',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    newPrice: '250$',
    oldPrice: '150$',
    descriotion:
      'Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2159',
    title: 'Pizza 2',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2159.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2157',
    title: 'Pizza 3',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2157.jpg',
    newPrice: '135$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2156',
    title: 'Pizza 4',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2156.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2155',
    title: 'Pizza 2',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2155.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2154',
    title: 'Pizza 6',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2154.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2153',
    title: 'Pizza 7',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2153.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2152',
    title: 'Pizza 8',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2152.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2151',
    title: 'Pizza 9',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2151.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2150',
    title: 'Pizza 10',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2150.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2160',
    title: 'Pizza 11',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
];

const mockItemDataLocalRefresh: ItemData[] = [
  {
    id: '141793-21581',
    title: 'Pizza 1 Refresh',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2150.jpg',
    newPrice: '250$',
    oldPrice: '150$',
    descriotion:
      'Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-21592',
    title: 'Pizza 2 Refresh',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-21573',
    title: 'Pizza 3 Refresh',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2152.jpg',
    newPrice: '135$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-21564',
    title: 'Pizza 4 Refresh',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-21555',
    title: 'Pizza 2 Refresh',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
];

const mockItemDataLocalEnd: ItemData[] = [
  {
    id: '141793-215642',
    title: 'Pizza 4 END',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-215812',
    title: 'Pizza 1 END',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2150.jpg',
    newPrice: '250$',
    oldPrice: '150$',
    descriotion:
      'Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-215552',
    title: 'Pizza 2 END',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-215732',
    title: 'Pizza 3 END',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2152.jpg',
    newPrice: '135$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-215922',
    title: 'Pizza 2 END',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
];

const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<ItemData[]>(mockItemData);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  const [isNewChecked, setIsNewChecked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isNewDataAdded, setIsNewDataAdded] = useState(false);
  const flatListRef: RefObject<FlatList<ItemData>> = useRef(null);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  useScrollToTop(flatListRef);

  useFocusEffect(
    useCallback(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      }
    }, [flatListRef.current]),
  );

  const toggleCheckbox = () => {
    setIsNewChecked(!isNewChecked);
  };

  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    const filterData = () => {
      let filtered = [...mockItemData];

      if (isNewDataAdded) {
        filtered = [...mockItemData, ...mockItemDataLocalRefresh, ...mockItemDataLocalEnd];
      }

      if (searchText !== '') {
        filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
      }
      if (isNewChecked) {
        filtered = filtered.filter((item) => item.isNew);
      }
      setFilteredData(filtered);
    };

    filterData();
  }, [searchText, isNewChecked, isNewDataAdded, mockItemDataLocalRefresh, mockItemDataLocalEnd]);

  const handleDataUpdate = useCallback((newData: ItemData[], prepend: boolean = false) => {
    setFilteredData((prevFilteredData) => {
      let updatedData;
      if (prepend) {
        updatedData = [...newData, ...prevFilteredData];
      } else {
        updatedData = [...prevFilteredData, ...newData];
      }
      return updatedData.filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));
    });
  }, []);

  const loadMoreData = useCallback(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        handleDataUpdate(mockItemDataLocalEnd);
        setLoading(false);
      }, 0);
    }
  }, [loading, handleDataUpdate, mockItemDataLocalEnd]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      handleDataUpdate(mockItemDataLocalRefresh, true);
      setRefreshing(false);
    }, 3000);
  }, [handleDataUpdate, mockItemDataLocalRefresh]);

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <View style={homeStyles.headerTop}>
        {!isSearching || (
          <TextInput
            style={homeStyles.inputSearch}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Search..."
          />
        )}
        <CustomPressable onPress={() => navigation.navigate('ModalScreen')}>
          <Image style={homeStyles.likeImage} source={likeImage} />
        </CustomPressable>
        <CustomPressable style={homeStyles.searchBtn} onPress={handleToggleSearch}>
          <Image style={homeStyles.searchIcon} source={searchImage} />
        </CustomPressable>
      </View>
      <CustomPressable style={homeStyles.filterBtn} onPress={() => setModalFilterVisible(true)}>
        <Text style={homeStyles.filterBtnText}>Show Filter</Text>
      </CustomPressable>
      <FlatList
        ref={flatListRef}
        data={filteredData}
        renderItem={({ item }) => <Item itemData={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
      />
      <CustomModal modalVisibleProp={modalVisible} setModalVisibleProp={setModalVisible} />
      <CustomModal modalVisibleProp={modalFilterVisible} setModalVisibleProp={setModalFilterVisible}>
        <Text style={homeStyles.filterTitle}>Filter</Text>
        <TouchableOpacity onPress={toggleCheckbox} style={homeStyles.checkboxContainer}>
          {isNewChecked ? (
            <ImageBackground source={checkedImage} style={homeStyles.checkboxBackground}>
              <View style={[homeStyles.checkbox, isNewChecked && homeStyles.checked]} />
            </ImageBackground>
          ) : (
            <View style={[homeStyles.checkbox, isNewChecked && homeStyles.checked]} />
          )}
          <Text style={homeStyles.label}>Checkbox</Text>
        </TouchableOpacity>
      </CustomModal>
    </SafeAreaView>
  );
};

export { HomeScreen };
