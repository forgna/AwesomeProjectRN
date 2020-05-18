import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Item, ItemSeparator, Search } from '../components';

const Messages = () => {

  const renderItem = item => {
    return (
      <View style={{ marginHorizontal: 16 }}>
        <Item
          picture={null}
          name={{ last: 'John', first: 'Appleseed' }}
          text={'Hey'}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, marginVertical: 8 }}
          data={[...Array(20)]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => renderItem(item)}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={HeaderComponent}
        />
        <View style={{ height: 80, backgroundColor: 'red' }}>
          <Text>Camera</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Camera</Text>
      </View>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
  },
  header: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  footer: {
    backgroundColor: 'red',
  }
});

export default Messages;