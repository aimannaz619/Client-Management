import { StyleSheet, View } from "react-native";

import CSPList from "./cspList";

function CSPOutput({ navigateTo, data, headers, items, requiredProps }) {
  return (
    <View style={styles.rootContainer}>
      <CSPList
        navigateTo={navigateTo}
        data={data}
        headers={headers}
        items={items}
        requiredProps={requiredProps}
      />
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
