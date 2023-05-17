import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CameraBox = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [picture, setPicture] = useState(null);

  const cameraRef = useRef(null);

  const { status } = requestPermission();

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPicture(photo.uri);
        await MediaLibrary.saveToLibraryAsync(photo.uri);
      } catch (error) {
        console.log("Error taking photo: ", error);
      }
    }
  };

  if (picture) {
    return (
      <View style={styles.photoContainer}>
        <Image source={{ uri: picture }} style={styles.photoImage} />
      </View>
    );
  }

  return (
    <View style={styles.photoContainer}>
      <Camera
        style={[
          styles.photoContainer,
          status !== "granted" && { backgroundColor: "#F6F6F6" },
        ]}
        type={type}
        ref={cameraRef}
      >
        <TouchableHighlight
          onPress={takePhoto}
          style={styles.cameraIconContainer}
        >
          <Image source={require("../../assets/icons/camera.png")} />
        </TouchableHighlight>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: 240,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIconContainer: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  photoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
