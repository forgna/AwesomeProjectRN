import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as StyleGuide from '../constants/StyleGuide';

import { HomeStackScreen, AnimationsStackScreen, ContactsStackScreen, SettingsStackScreen } from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <MaterialIcons name="home" size={size} color={color} />;
          } else if (route.name === 'Animations') {
            iconName = 'animation-play';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Contacts') {
            iconName = 'ios-contact';
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: StyleGuide.colors.primary,
        inactiveTintColor: StyleGuide.colors.grey,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Animations" component={AnimationsStackScreen} />
      <Tab.Screen name="Contacts" component={ContactsStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>

  );
};

export default TabNavigator;
