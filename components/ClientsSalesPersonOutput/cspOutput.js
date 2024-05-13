import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../Constants/styles";
import CSPSummary from "./cspHeader";
import CSPList from "./cspList";

function CSPOutput({ navigateTo }) {
  return (
    <View style={styles.rootContainer}>
      {/* <CSPSummary /> */}
      <CSPList navigateTo={navigateTo} />
    </View>
  );
}

export default CSPOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop:15
  },
});
