import { Pressable, View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../Constants/styles";
import { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
function CSPItem({ name, phoneNumber, email, location, navigateTo, id }) {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded(!expanded);
  }

  function handlePress() {
    toggleExpand();
  }

  function navigateHandler() {
    navigation.navigate(navigateTo, {
      id: id,
    });
  }
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.rootContainer}>
        <View style={styles.textStyle}>
          <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
        <View style={styles.textStyle}>
          <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
            {phoneNumber}
          </Text>
        </View>
        <View style={styles.textStyle}>
          <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
            {email}
          </Text>
        </View>
        <View style={styles.textStyle}>
          <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
            {location}
          </Text>
        </View>
        <View style={styles.textStyle}>
          <PrimaryButton pressHandler={navigateHandler}>View</PrimaryButton>
        </View>
      </View>
    </Pressable>
  );
}
export default CSPItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.lightGreen,
    paddingVertical: 10,
    marginVertical: 4,
    elevation: 4,
    borderRadius: 8,
    marginHorizontal: 14,
  },

  textStyle: {
    flex: 1,
    padding: 10,
  },
  // buttonViewStyle: {
  //   marginRight: 5,
  //   alignItems: "center",
  // },
  buttonStyle: {
    backgroundColor: GlobalStyles.colors.darkGreen,
  },
});
