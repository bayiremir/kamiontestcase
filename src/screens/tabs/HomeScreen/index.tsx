import {FlatList, RefreshControl, View} from 'react-native';
import React, {useState, useMemo} from 'react';
import TabBar from '../../../components/tab_components/TabBar';
import {styles} from './styles';
import {useShipmentsQuery} from '../../../redux/services/mobileApi';
import SearchBar from '../../../components/tab_components/SearchBar';
import Lottie from '../../../components/other_components/lottie';
import ShipmentListContainer from '../../../components/other_components/home/ShipmentListContainer';

const HomeScreen = () => {
  const {data, isLoading, refetch} = useShipmentsQuery();
  const [searchText, setSearchText] = useState('');

  const filteredData = useMemo(() => {
    if (!data?.data || !searchText.trim()) {
      return data?.data || [];
    }

    return data.data.filter((item: any) => {
      const searchAsNumber = parseInt(searchText);

      return (
        item.id &&
        (item.id.toString().includes(searchText) ||
          (!isNaN(searchAsNumber) && item.id === searchAsNumber))
      );
    });
  }, [data?.data, searchText]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TabBar headerText="Yükler" />
      <SearchBar
        placeholder="Arayın."
        onSearch={handleSearch}
        value={searchText}
        onChangeText={setSearchText}
      />
      {isLoading ? (
        <Lottie />
      ) : (
        <FlatList
          data={filteredData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => refetch()}
            />
          }
          renderItem={({item}) => <ShipmentListContainer item={item} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
