import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../Components/Input/Input";
import { Button } from "../Components/Button/Button";
import { useState } from "react";

export const CreatePostsScreen = () => {
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [location, setLocation] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.cameraIconContainer}>
          <Image source={require("../assets/icons/camera.png")} />
        </View>
      </View>

      <Text style={styles.text}>Загрузите фото</Text>
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
    </SafeAreaView>
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
  },
  cameraIconContainer: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
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
});
