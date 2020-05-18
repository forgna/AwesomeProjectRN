import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as StyleGuide from '../../constants/StyleGuide';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: StyleGuide.colors.greyDark,
    marginLeft: 16 + 44 + 16,
  },
});

export default ItemSeparator;
