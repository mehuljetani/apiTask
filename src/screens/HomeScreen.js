import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const getApiData = page => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then(res => {
      setData(res?.data?.data);
      if (page === 1) {
        setData(res?.data?.data);
      } else {
        //let array = data.concat(res?.data?.data);
        setData(data.concat(res?.data?.data));
      }
    });
  };

  useEffect(() => {
    alert('hi this is me from helloworld and welcome to the world of heaven');
    getApiData(1);
  }, []);

  const renderitem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeSubScreen', {data: item})}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            backgroundColor: 'gray',
            borderRadius: 20,
            paddingHorizontal: 90,
            paddingVertical: 10,
          }}>
          <Text style={{color: 'white'}}>{item.id} </Text>
          <Text style={{color: 'white'}}>{item.email}</Text>
          <Text style={{color: 'white'}}>{item.first_name}</Text>
          <Text style={{color: 'white'}}>{item.last_name}</Text>
          <Image
            style={{height: 50, width: 50, borderRadius: 50}}
            source={{uri: item.avatar}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.idWrapper}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 10,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => getApiData(1)}
              style={{
                alignItems: 'center',
                marginBottom: 10,
                paddingHorizontal: 24,
                paddingVertical: 12,
                backgroundColor: 'purple',
                borderRadius: 30,
              }}>
              <Text style={{fontSize: 16, color: 'white'}}>Page 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getApiData(2)}
              style={{
                alignItems: 'center',
                marginBottom: 10,
                paddingHorizontal: 24,
                paddingVertical: 12,
                backgroundColor: 'purple',
                borderRadius: 30,
              }}>
              <Text style={{fontSize: 16, color: 'white'}}>Page 2</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <FlatList
          data={data}
          renderItem={renderitem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  idWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
