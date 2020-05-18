import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from './AppNavigator';

// Authentication
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

// Home
import HomeScreen from '../screens/Home';
import MessagesScreen from '../screens/Messages';

// Animations
import AnimationsScreen from '../screens/Animations';
import ValuesScreen from '../screens/Values';
import TransitionsScreen from '../screens/Transitions';

// Contacts
import ContactsScreen from '../screens/Contacts';
import UserScreen from '../screens/User';
import NewContact from '../screens/NewContact';

// Settings
import SettingsScreen from '../screens/Settings';
import DetailsScreen from '../screens/Details';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({ state }) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
          // When logging out, a pop animation feels intuitive
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  const { mode: theme } = useTheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeftContainerStyle: {
            paddingHorizontal: 16,
            justifyContent: "center",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <View>
                <MaterialCommunityIcons name="camera" size={20} color={theme.colors.text} />
              </View>
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingHorizontal: 16,
            justifyContent: "center",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push('Messages')}>
              <View>
                <Ionicons name="ios-paper-plane" size={20} color={theme.colors.text} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

const AnimationsStack = createStackNavigator();

const AnimationsStackScreen = () => {
  return (
    <AnimationsStack.Navigator>
      <AnimationsStack.Screen name="Animations" component={AnimationsScreen} />
      <AnimationsStack.Screen name="Values" component={ValuesScreen} />
      <AnimationsStack.Screen name="Transitions" component={TransitionsScreen} />
    </AnimationsStack.Navigator>
  );
};


const ContactsStack = createStackNavigator();

const ContactsStackScreen = () => {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
              <View style={{ marginRight: 16 }}>
                <Ionicons name="ios-add" size={24} color="tomato" />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <ContactsStack.Screen
        name="NewContact"
        component={NewContact}
        options={({ navigation }) => ({
          title: "New Contact",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ marginLeft: 16 }}>
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <View style={{ marginRight: 16 }}>
                <Text>Done</Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <ContactsStack.Screen
        name="User"
        component={UserScreen}
        options={({ route }) => ({ title: route.params.name.last })}
      />
    </ContactsStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export {
  AuthStackScreen,
  HomeStackScreen,
  AnimationsStackScreen,
  ContactsStackScreen,
  SettingsStackScreen,
};
