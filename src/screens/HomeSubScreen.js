import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

const renderitem = ({item}) => {
  console.log(item);
  return (
    <TouchableOpacity>
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
        <Text style={{color: 'white'}}>{item.id}</Text>
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

const HomeSubScreen = ({route}) => {
  const data = route.params.data;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.idWrapper}>
        <Text style={{color: 'black'}}>{data.id}</Text>
        <Text style={{color: 'black'}}>{data.email}</Text>
        <Text style={{color: 'black'}}>{data.first_name}</Text>
        <Text style={{color: 'black'}}>{data.last_name}</Text>
        <Image
          style={{height: 50, width: 50, borderRadius: 50}}
          source={{uri: data.avatar}}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderitem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeSubScreen;
