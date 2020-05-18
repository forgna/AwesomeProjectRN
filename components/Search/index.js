import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as StyleGuide from '../../constants/StyleGuide';

const Search = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="ios-search" size={24} color={StyleGuide.colors.grey} style={styles.icon} />
      <TextInput
        clearButtonMode="while-editing"
        style={styles.input}
        placeholder="Search"
        value={text}
        onChangeText={setText}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: StyleGuide.colors.greyDark,
    borderWidth: 1,
    borderRadius: 4,
  },
  icon: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    padding: 4
  }
});

export default Search;
