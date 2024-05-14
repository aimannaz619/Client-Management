import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map({ route }) {
  const pickedLocation = route.params?.pickedLocation;
  const region = {
    latitude: pickedLocation.lat,
    longitude: pickedLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker
        coordinate={{
          latitude: pickedLocation.lat,
          longitude: pickedLocation.lng,
        }}
      />
    </MapView>
  );
}
export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
