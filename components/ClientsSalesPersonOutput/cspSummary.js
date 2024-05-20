import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import { useState } from "react";

function CSPSummary({ headers }) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded(!expanded);
  }
  return (
    <Pressable onPress={toggleExpand}>
      <View style={styles.rootHeader}>
        {Object.values(headers)?.map((header, index) => (
          <View style={styles.title}>
            <Text
              numberOfLines={expanded ? null : 1}
              ellipsizeMode="tail"
              style={styles.titleText}
            >
              {header}
            </Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.bottleGreen,
    paddingVertical: 13,
    marginVertical: 4,
    elevation: 4,
    borderRadius: 8,
    marginHorizontal: 14,
  },

  title: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default CSPSummary;
