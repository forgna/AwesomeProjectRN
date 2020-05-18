import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { Transition, Transitioning } from 'react-native-reanimated';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Card } from '../components';

const { width } = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;

const layouts = [
  {
    id: "column",
    name: "Column",
    layout: {
      container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    }
  },
  {
    id: "row",
    name: "Row",
    layout: {
      container: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  },
  {
    id: "wrap",
    name: "Wrap",
    layout: {
      container: {
        flexDirection: "row",
        flexWrap: "wrap"
      },
      child: {
        flex: 0,
        width: width / 2 - 8 * 2
      }
    }
  }
];

const transition = <Transition.Change interpolation="easeInOut" durationMs={400} />;

const Transitions = () => {
  const ref = React.useRef(null);
  const [selectedLayout, setLayout] = React.useState(layouts[0].layout);

  const pressHandler = layout => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }
    setLayout(layout);
  };

  return (
    <>
      <Transitioning.View
        style={[styles.container, selectedLayout.container]}
        {...{ transition, ref }}
      >
        {[...Array(3)].map((card, index) => (
          <FlexibleCard
            key={index}
            style={selectedLayout.child}
          // {...{ card }}
          />
        ))}
      </Transitioning.View>
      {layouts.map(({ id, name, layout }) => (
        <Selection
          key={id}
          onPress={() => pressHandler(layout)}
          isSelected={selectedLayout === layout}
          {...{ name }}
        />
      ))}
    </>
  );
};

const FlexibleCard = ({ card, style }) => (
  <Animated.View style={[styles.flexibleContainer, style]} />
);

const Selection = ({ name, onPress, isSelected }) => {
  return (
    <View style={styles.buttonContainer}>
      <RectButton {...{ onPress }}>
        <View style={styles.button} accessible>
          <Text>{name}</Text>
          {isSelected && <View style={styles.icon}>
            <FeatherIcon name="check" color="white" size={24} />
          </View>}
        </View>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 8 * 2 + 35,
    padding: 8,
    // backgroundColor: "salmon",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#3884ff",
  },
  flexibleContainer: {
    flex: 1,
    maxWidth: "100%",
    aspectRatio: CARD_ASPECT_RATIO,
    margin: 8,
    borderRadius: 18,
    resizeMode: "contain",
    backgroundColor: "salmon",
  }
});

export default Transitions;
