import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Button } from '../components';
import { AuthContext, useTheme } from '../navigations/AppNavigator';
import * as StyleGuide from '../constants/StyleGuide';

const Settings = () => {
  const { signOut } = React.useContext(AuthContext);
  // const navigation = useNavigation();
  const theme = useTheme();
  // console.log(theme.mode.dark);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profile}>
          <View style={styles.avatar} />
          <View>
            <Text style={[styles.name, { color: theme.mode.colors.text }]}>John Appleseed</Text>
            <Text style={styles.phone}>+855 77 752 406</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
        <Text style={{ color: theme.mode.colors.text }}>Dark Mode</Text>
        <Switch
          value={theme.mode.dark}
          onValueChange={value => theme.setMode(value)}
        />
      </View>
      <View>

        <Button label="Sign Out" onPress={signOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // marginHorizontal: 16,
  },
  profileSection: {
    // flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    height: 100,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: StyleGuide.colors.greyDark,
    marginRight: 16
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  phone: {
    color: StyleGuide.colors.primary,
    fontSize: 15,
    marginTop: 4,
  },
});

export default Settings;
