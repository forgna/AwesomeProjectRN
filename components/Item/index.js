import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as StyleGuide from '../../constants/StyleGuide';

const Item = ({ picture, name, text, icons }) => {
  return (
    <View style={styles.container}>
      {picture ? (<FastImage
        style={styles.avatar}
        source={{ uri: picture.large, priority: FastImage.priority.normal, }}
        resizeMode={FastImage.resizeMode.contain}
      />) : (
          <View style={styles.avatar} />
        )}
      <View style={{ marginHorizontal: 12, flex: 4 }}>
        <Text style={styles.name}>{`${name.last} ${name.first}`}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: StyleGuide.colors.greyDark,
    borderRadius: 44 / 2,
    width: 44,
    height: 44,
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left"
  },
  text: {
    color: "salmon",
    fontSize: 15,
    marginTop: 4,
  }
});

export default Item;
