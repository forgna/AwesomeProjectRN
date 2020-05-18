import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return <TextInput style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B6BBB6",
    paddingHorizontal: 16,
    paddingVertical: 10,
  }
});

export default Input;
