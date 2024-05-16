import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../Constants/styles";
import CSPSummary from "./cspSummary";
import CSPList from "./cspList";

function CSPOutput({ navigateTo , data}) {
  return (
    <View style={styles.rootContainer}>
      <CSPList navigateTo={navigateTo} data={data} />
    </View>
  );
}

export default CSPOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 15,
   
  },
});
