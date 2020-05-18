/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './navigations/AppNavigator';

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;

// Colors
// const RootStack = createStackNavigator()
// const MainStack = createStackNavigator()

// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={Home} />
//       <MainStack.Screen
//         name="ColorPalette"
//         component={ColorPalette}
//         options={({ route }) => ({ title: route.params.paletteName })}
//       />
//     </MainStack.Navigator>
//   )
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator mode="modal">
//         <RootStack.Screen
//           name="Main"
//           component={MainStackScreen}
//           options={{ headerShown: false }}
//         />
//         <RootStack.Screen name="ColorPaletteModal" component={ColorPaletteModal} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   )
// }
