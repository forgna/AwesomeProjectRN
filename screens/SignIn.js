import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { Button, TextInput } from '../components';
import { AuthContext } from '../navigations/AppNavigator';
import { isIphoneXorAbove } from '../utils/isIphoneXorAbove';
import * as StyleGuide from '../constants/StyleGuide';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.signinSection}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={{ marginBottom: 44 }}>
          <Text style={styles.titleText}>AwesomeProjectRN</Text>
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={{ marginBottom: 32 }}>
          <TouchableOpacity>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Button label="Sign In" onPress={() => signIn({ username, password })} />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.signupSection}>
        <View style={styles.signupAccount}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <View>
              <Text style={styles.signupText}> Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signinSection: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: StyleGuide.colors.primary,
    textAlign: "center",
    shadowColor: "salmon",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "tomato",
  },
  signupSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: StyleGuide.colors.greyDark,
    paddingTop: 20,
    paddingBottom: isIphoneXorAbove() ? 34 : 20,
  },
  signupAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accountText: {
    color: StyleGuide.colors.primary,
  },
  signupText: {
    fontWeight: "bold",
    color: StyleGuide.colors.primary,
  }
});

export default SignIn;
