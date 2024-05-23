import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Dimensions,
} from "react-native";

import { GlobalStyles } from "../../Constants/styles";

import { useEffect, useState } from "react";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";
function LocationPicker({ location }) {
  const navigation = useNavigation();
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    setPickedLocation({
      lat: location?.latitude,
      lng: location?.longitude,
    });
  }, [location]);
  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }
  function pressHandler() {
    navigation.navigate("map", {
      pickedLocation: pickedLocation,
    });
  }
  return (
    <View>
      <Pressable onPress={pressHandler}>
        <View style={styles.mapPreview}>{locationPreview}</View>
      </Pressable>
    </View>
  );
}

export default LocationPicker;

const deviceWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.lightCyan,
    width: "100%",
    height: 240,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",

    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 4
  },
});
