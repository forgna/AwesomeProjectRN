import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({ children, label, onPress }) => {

  if (children) {
    return (
      <TouchableOpacity onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 4,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default Button;
