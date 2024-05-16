import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import { Ionicons } from "@expo/vector-icons";

function PrimaryButton({ children, pressHandler, mode, icon }) {
  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.button, mode === "flat" && styles.flat]}>
        {icon && (
          <Ionicons style={styles.icon} name={icon} size={18} color="white" />
        )}
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: GlobalStyles.colors.bottleGreen,
    borderRadius: 4,
  },
  icon: {
    marginRight: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  flat: {
    backgroundColor: "transparent",
  },
});
