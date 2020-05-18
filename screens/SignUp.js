import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Button, TextInput } from '../components';
import { AuthContext } from '../navigations/AppNavigator';
import { isIphoneXorAbove } from '../utils/isIphoneXorAbove';

const SignUp = ({ navigation }) => {
  const [photo, setPhoto] = React.useState(null);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signUp } = React.useContext(AuthContext);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };

    ImagePicker.showImagePicker(options, (response) => {
      // console.log(response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setPhoto(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.signinSection}
        behavior="padding"
      >
        <View style={{ marginBottom: 44 }}>
          <Text style={styles.titleText}>AwesomeProjectRN</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 32 }}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            <View style={styles.photo}>
              {photo
                ? <Image source={{ uri: photo.uri }} style={styles.avatar} />
                : <FeatherIcon name="user" size={36} color="#BBB" />
              }
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            autoCapitalize="none"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{ marginBottom: 32 }}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View>
          <Button label="Sign Up" onPress={() => signUp({ username, email, password })} />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.signupSection}>
        <View style={styles.signupAccount}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <View>
              <Text style={styles.signupText}> Sign in</Text>
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
    color: "tomato",
    textAlign: "center",
    shadowColor: "salmon",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },
  photo: {
    width: 108,
    height: 108,
    borderRadius: 108 / 2,
    borderWidth: 2,
    borderColor: "#BBB",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 108,
    height: 108,
    borderRadius: 108 / 2,
    borderColor: "white",
    borderWidth: 4,
    // backgroundColor: "#CBCBCB",
  },
  signupSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#BBB",
    paddingTop: 20,
    paddingBottom: isIphoneXorAbove() ? 34 : 20,
  },
  signupAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accountText: {
    color: "tomato",
  },
  signupText: {
    fontWeight: "bold",
    color: "tomato",
  }
});

export default SignUp;
