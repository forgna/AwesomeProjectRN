import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../components';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button label="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  }
});

export default Settings;
