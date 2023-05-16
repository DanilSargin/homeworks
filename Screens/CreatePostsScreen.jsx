import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../Components/Input/Input";
import { Button } from "../Components/Button/Button";
import { useState, useRef, useMemo, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = () => {
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [location, setLocation] = useState(null);

  const [type, setType] = useState(CameraType.back);

  const cameraRef = useRef(null);

  const takePhoto = useCallback(async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setImage(photo.uri);
        await MediaLibrary.saveToLibraryAsync(photo.uri);
      } catch (error) {
        console.log("Error taking photo: ", error);
      }
    }
  }, []);

  const camera = useMemo(
    () => (
      <View style={styles.photoContainer}>
        <Camera style={[styles.photoContainer]} type={type} ref={cameraRef}>
          <TouchableHighlight
            onPress={takePhoto}
            style={styles.cameraIconContainer}
          >
            <Image source={require("../assets/icons/camera.png")} />
          </TouchableHighlight>
        </Camera>
      </View>
    ),
    []
  );

  //FIXME: Don't get camera-white.png icon on photoBox

  const photoBox = useMemo(
    () => (
      <View style={styles.photoContainer}>
        <Image source={{ uri: image }} style={styles.photoImage} />
        <TouchableHighlight
          onPress={() => setImage(null)}
          style={[
            styles.cameraIconContainerWithImage,
            { position: "absolute" },
          ]}
        >
          <Image source={require("../assets/icons/camera.png")} />
        </TouchableHighlight>
      </View>
    ),
    [image]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {image ? photoBox : camera}

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            {image ? "Редактировать фото" : "Загрузите фото"}
          </Text>
          <Input
            style={styles.nameInput}
            placeholder="Название..."
            value={imageTitle}
            onChange={setImageTitle}
          />
          <Input
            withIcon
            icon={require("../assets/icons/map-pin.png")}
            style={styles.locationInput}
            placeholder="Местность..."
            value={location}
            onChange={setLocation}
          />

          <Button title="Опубликовать" disabled style={{ marginTop: 32 }} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  photoContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  cameraIconContainer: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  cameraIconContainerWithImage: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
    opacity: 0.3,
  },
  text: {
    fontFamily: "Roboto-regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,
  },
  nameInput: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 32,
    marginBottom: 16,
  },
  locationInput: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
