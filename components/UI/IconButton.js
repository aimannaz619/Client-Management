import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet  , View} from "react-native";
function IconButton({ name, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.rootcontainer}>
        <Ionicons name={name} size={size} color={color} onPress={onPress} />
      </View>
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  rootcontainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});