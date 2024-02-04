import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import homeStyles from './HomeScreenStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { CustomModal } from '../../components/Modal/CustomModal';
import { Item } from '../Item/Item';

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

const mockItemData: ItemData[] = [
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

const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<ItemData[]>(mockItemData);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  const [isNewChecked, setIsNewChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsNewChecked(!isNewChecked);
  };

  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    const filterData = () => {
      let filtered = mockItemData;
      if (searchText !== '') {
        filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
      }
      if (isNewChecked) {
        filtered = filtered.filter((item) => item.isNew);
      }
      setFilteredData(filtered);
    };

    filterData();
  }, [searchText, isNewChecked]);

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
        <CustomPressable onPress={() => setModalVisible(true)}>
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
        data={filteredData}
        renderItem={({ item }) => <Item itemData={item} />}
        keyExtractor={(item) => item.id}
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
