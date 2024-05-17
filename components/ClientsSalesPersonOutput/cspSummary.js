import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
 
function CSPSummary({headers}) {
  return (
    <View style={styles.rootHeader}>
      <Text style={styles.title}>{headers.client}</Text>
      <Text style={styles.title}> {headers.date}</Text>
      <Text style={styles.title}>{headers.time}</Text>
      <Text style={styles.title}>{headers.schedule}</Text>
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
    backgroundColor: GlobalStyles.colors.bottleGreen,
    marginHorizontal: 14,
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    flex:1,
    textalign:"center",
    fontSize: 18,
    color: GlobalStyles.colors.white,
    fontWeight:'bold'
  },
});