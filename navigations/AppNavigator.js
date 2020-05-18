import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { AppearanceProvider, Appearance } from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import MessagesScreen from '../screens/Messages';
import CameraScreen from '../screens/Camera';
import TabNavigator from './TabNavigator';

export const AuthContext = React.createContext();
const ThemeContext = React.createContext(null);

export const useTheme = () => React.useContext(ThemeContext);

const Stack = createStackNavigator();

const initialState = { isLoading: true, isSignout: false, token: null };

function reducer(prevState, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        token: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        token: null,
      };
    default:
      throw new Error();
  }
}

const AppNavigator = () => {
  const [themeState, setThemeState] = React.useState(DefaultTheme);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setMode = mode => {
    // console.log("mode", mode);
    setThemeState(mode ? DarkTheme : DefaultTheme);
  };

  React.useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
    return () => subscription.remove();
  }, []);

  const authContext = React.useMemo(() => ({
    signIn: async data => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      try {
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
      } catch (error) {
        // Error saving data
      }
    },
    signOut: async () => {
      dispatch({ type: 'SIGN_OUT' });
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        // Error removing data
      }
    },
    signUp: async data => {
      // In a production app, we need to send user data to server and get a token
      // We will also need to handle errors if sign up failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      try {
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
      } catch (error) {
        // Error saving data
      }
    },
  }), []);

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeContext.Provider value={{ mode: themeState, setMode }}>
        <AppearanceProvider>
          <>
            {Platform.OS === "ios" && <StatusBar barStyle={themeState.dark ? "light-content" : "dark-content"} />}
            <NavigationContainer theme={themeState.dark ? DarkTheme : DefaultTheme}>
              <Stack.Navigator>
                {state.token ? (
                  <>
                    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Messages" component={MessagesScreen} />
                    <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
                  </>
                ) : (
                    <>
                      <Stack.Screen name="SignIn"
                        component={SignInScreen}
                        options={{
                          headerShown: false,
                          // When logging out, a pop animation feels intuitive
                          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                        }} />
                      <Stack.Screen name="SignUp"
                        component={SignUpScreen}
                        options={{
                          headerShown: false,
                        }} />
                    </>
                  )
                }
              </Stack.Navigator>
            </NavigationContainer>
          </>
        </AppearanceProvider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default AppNavigator;
