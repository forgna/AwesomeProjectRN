import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, Switch, TouchableOpacity, FlatList, Alert } from 'react-native';
import { COLORS } from '../constants/Colors';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Plase enter a palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please add at least 3 colors');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name, selectedColors]);

  const handleValueChange = useCallback((value, color) => {
    if (value === true) {
      setSelectedColors(colors => [...colors, color]);
    } else {
      setSelectedColors(colors => colors.filter(selectedColor => color.colorName !== selectedColor.colorName));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of your color palette</Text>
      <TextInput style={styles.input} placeholder="Palette name" value={name} onChangeText={text => setName(text)} />
      <FlatList
        data={COLORS}
        keyExtractor={item => item.colorName}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={!!selectedColors.find(color => color.colorName === item.colorName)}
              onValueChange={selected => { handleValueChange(selected, item); }}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
  }
});

export default ColorPaletteModal;