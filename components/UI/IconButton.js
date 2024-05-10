import Ionicons from "@expo/vector-icons/Ionicons";
function IconButton({ color, size, onPress }) {
  return <Ionicons name="add" size={size} color={color} onPress={onPress} />;
}

export default IconButton;
