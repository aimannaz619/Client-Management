import { StyleSheet, View } from "react-native";


import CSPList from "./cspList";

function CSPOutput({ navigateTo, data, headers }) {
  return (
    <View style={styles.rootContainer}>
      
      <CSPList navigateTo={navigateTo} data={data} headers={headers} />
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
