import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegistrationForm } from "../Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import { UserProfileAvatar } from "../Components/UserProfileAvatar/UserProfileAvatar";

export const RegistrationScreen = () => {
  const [photo, setPhoto] = useState(null); // change on true, and look at photo

  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : undefined}
        >
          <ImageBackground
            resizeMode="cover"
            style={[styles.imageBG, { height }]}
            source={require("../assets/images/PhotoBG.png")}
          >
            <View style={styles.contentContainer}>
              <UserProfileAvatar photo={photo} />

              <RegistrationForm />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
  },
  addBtn: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
