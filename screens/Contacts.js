import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ItemSeparator } from '../components';

const URL = 'https://randomuser.me/api/?results=50';

const Contacts = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  // const isSubscribed = React.useRef();

  const handleFetchUsers = React.useCallback(async () => {
    const response = await fetch(URL);
    // console.log(response);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      // isSubscribed.current && 
      setUsers(data.results);
    }
    setLoading(false);
    setIsRefreshing(false);
  }, []);

  const handleRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchUsers();
  }, []);

  const renderItem = item => {
    const { name, email, phone, cell, picture, nat } = item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('User', item)}>
        <Item
          name={name}
          email={email}
          phone={phone}
          cell={cell}
          picture={picture}
          nat={nat}
        />
      </TouchableOpacity>
    );
  };

  React.useEffect(() => {
    // isSubscribed.current = true;
    handleFetchUsers();
    // return () => { isSubscribed.current = false; };
  }, []);

  return (
    <View style={styles.container}>
      {loading
        ? <View style={styles.empty}><ActivityIndicator /></View>
        : <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={users}
          keyExtractor={(item, index) => item.login.uuid}
          renderItem={({ item }) => renderItem(item)}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          ItemSeparatorComponent={ItemSeparator}
        // ListEmptyComponent={ListEmpty}
        />
      }
    </View>
  );
};

const Item = ({ name, email, phone, cell, picture, nat }) => {
  return (
    <View style={styles.item}>
      <FastImage
        style={styles.avatar}
        source={{ uri: picture.large, priority: FastImage.priority.normal, }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{ marginHorizontal: 12, flex: 4 }}>
        <Text style={styles.name}>{`${name.last} ${name.first}`}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
        <MaterialIcons
          name="phone"
          size={24}
          style={{ color: "tomato" }} />
        <MaterialIcons
          name="mail"
          size={24}
          style={{ color: "tomato" }} />
      </View>
    </View>
  );
};

const ListEmpty = () => {
  return (
    <View style={styles.empty}>
      <Text>You have no contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // backgroundColor: "#6A9CFD",
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
    // backgroundColor: "#CBCBCB",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left"
  },
  phone: {
    color: "salmon",
    fontSize: 15,
    marginTop: 4,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Contacts;
