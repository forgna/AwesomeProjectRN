import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: uuidv4(),
    title: 'Values',
  },
  {
    id: uuidv4(),
    title: 'Transitions',
  },
];

const Animations = () => {
  const navigation = useNavigation();

  const renderItem = React.useCallback(item => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
        <Item title={item.title} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "tomato",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 24,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white"
  },
});

export default Animations;
