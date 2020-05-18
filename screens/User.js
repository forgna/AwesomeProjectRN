import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const User = ({ navigation, route }) => {
  const { name, email, phone, cell, picture, nat } = route.params;
  const colorStyle = {
    color: "white",
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <View style={styles.thumbnail}>
          <View>
            <FastImage
              style={styles.avatar}
              source={{ uri: picture.large, priority: FastImage.priority.normal }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          {name !== '' && (
            <Text style={[styles.name, colorStyle]}>{`${name.last} ${name.first}`}</Text>
          )}

          {phone !== '' && (
            <View style={styles.phoneSection}>
              <MaterialIcons name="phone" size={16} style={{ color: "white" }} />
              <Text style={[styles.phone, colorStyle]}>{phone}</Text>
            </View>
          )}
        </View>

      </View>

      <View style={styles.detailsSection}>
        <Item icon="mail" title="Email" subtitle={email} />
        <Item icon="phone" title="Work" subtitle={phone} />
        <Item icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

const Item = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.containerStyle}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              style={{ color: "black", marginRight: 20, }}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>
            {subtitle && (
              <Text style={styles.subtitle}>{subtitle}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "salmon",
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
  thumbnail: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: "bold",
  },
  phoneSection: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "salmon",
    fontSize: 15,
    marginTop: 4,
  },
});

export default User;