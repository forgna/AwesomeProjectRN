import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const CARD_ASPECT_RATIO = 1324 / 863;
const CARD_WIDTH = width - 8 * 8;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

const Card = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "salmon",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 14,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  }
});

export default Card;
