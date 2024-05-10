import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../Constants/styles";
import CSPSummary from "./cspSummary";
import CSPList from "./cspList";

function CSPOutput() {
  return (
    <View style={styles.rootContainer}>
      <CSPSummary />
      <CSPList />
    </View>
  );
}

export default CSPOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lightGreen,
  },
});
