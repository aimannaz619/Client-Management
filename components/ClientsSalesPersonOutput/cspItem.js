import { Pressable, View, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../Constants/styles";
function CSPItem({ name, phoneNumber, email, location, navigateTo, id }) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate(navigateTo, {
      id: id,
    });
  }
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.textStyle}>{phoneNumber}</Text>
        <Text style={styles.textStyle}>{email}</Text>
        <Text style={styles.textStyle}>{location}</Text>
      </View>
    </Pressable>
  );
}
export default CSPItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.lightGreen,
    paddingVertical: 15,
    marginVertical: 4,
    elevation: 4,
    borderRadius: 8,
    marginHorizontal: 14,
  },

  textStyle: {
    flex: 1,
    color: "black",
    padding: 10,

    textAlign: "center",
  },
});
