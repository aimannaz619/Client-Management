import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";

function CSPSummary() {
  return (
    <View style={styles.rootHeader}>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.title}>Phone number</Text>
      <Text style={styles.title}>Email</Text>
      <Text style={styles.title}>Location</Text>
    </View>
  );
}

export default CSPSummary;

const styles = StyleSheet.create({
  rootHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 22,
    backgroundColor: GlobalStyles.colors.darkGreen,
    marginHorizontal: 14,
    borderRadius:8
  },
  title: {
    flex:1,
    textalign:"center",
    fontSize: 18,
    color: GlobalStyles.colors.white,
  },
});
