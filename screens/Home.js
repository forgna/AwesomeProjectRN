import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../navigations/AppNavigator';
import * as StyleGuide from '../constants/StyleGuide';

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(20)]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Item />}
        ListHeaderComponent={ListHeader}
      />
    </View>
  );
};

const ListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[...Array(20)]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ItemHeader />}
      />
    </View>
  );
};

const ItemHeader = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", }}>
      <View style={styles.avatar}></View>
    </View>
  );
};

const Item = () => {
  const { mode: theme } = useTheme();
  // console.log(theme);
  // console.log(JSON.stringify(theme, 0, 2));

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.userPhoto}></View>
          <Text style={[styles.username, { color: theme.colors.text }]}>username</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { }}>
            <View style={{ padding: 4 }}>
              <Text style={{ color: theme.colors.text }}>•••</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image}></View>
      <View style={styles.footer}>
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon>
                <MaterialCommunityIcons name={false ? "heart" : "heart-outline"} size={24} color={theme.colors.text} />
              </Icon>
              <Icon>
                <MaterialCommunityIcons name="comment-outline" size={24} color={theme.colors.text} />
              </Icon>
              <Icon>
                <Ionicons name="md-paper-plane" size={24} color={theme.colors.text} />
              </Icon>
            </View>
            <View>
              <Icon>
                <MaterialCommunityIcons name="bookmark-outline" size={24} color={theme.colors.text} />
              </Icon>
            </View>
          </View>
          <Text style={[styles.likesText, { color: theme.colors.text }]}>10 likes</Text>
        </View>
        <View style={{ marginHorizontal: 16 }}>
          <View style={styles.caption}>
            <Text style={{ color: theme.colors.text }}>
              <Text style={[styles.username, { color: theme.colors.text }]}>username </Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit libero aliquam odio facere animi ex neque tempore sequi repellendus, perferendis voluptates et, voluptatum iusto nemo nam nostrum dolor? Veritatis.
            </Text>
          </View>
          <Text style={styles.createdAt}>10 HOURS AGO</Text>
        </View>
      </View>
    </View>
  );
};

const Icon = ({ children }) => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <View style={{ paddingHorizontal: 8 }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  listHeader: {
    // height: 90,
    paddingVertical: 8,
    backgroundColor: StyleGuide.colors.primary,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    borderWidth: 2,
    borderColor: StyleGuide.colors.white,
    backgroundColor: StyleGuide.colors.greyLight,
    marginHorizontal: 16
  },
  item: {
    marginVertical: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userPhoto: {
    backgroundColor: StyleGuide.colors.primary,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 8
  },
  username: {
    fontWeight: "bold",
  },
  body: {

  },
  image: {
    width: 450,
    height: 450,
    backgroundColor: StyleGuide.colors.primary
  },
  footer: {
    marginVertical: 8,
  },
  likesText: {
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  caption: {
    flexDirection: "row",
    marginBottom: 8
  },
  createdAt: {
    fontSize: 12,
    fontWeight: "400",
    color: StyleGuide.colors.grey,
  }
});

export default Home;