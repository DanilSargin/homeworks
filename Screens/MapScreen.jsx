import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { Pressable, StyleSheet, Image } from "react-native";

export const MapScreen = ({ navigation, route }) => {
  const coord = route.params.geoCoords;

  console.log(route);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Image source={require("../assets/icons/arrow-left.png")} />
      </Pressable>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: coord.latitude,
          longitude: coord.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.05,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          coordinate={{ latitude: coord.latitude, longitude: coord.longitude }}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backBtn: {
    position: "absolute",
    top: 10,
    left: 20,
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 50,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});
