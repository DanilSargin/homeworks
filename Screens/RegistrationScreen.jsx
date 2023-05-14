import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegistrationForm } from "../Components/RegistrationForm/RegistrationForm";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [photo, setPhoto] = useState(null); // change on true, and look at photo

  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          resizeMode="cover"
          style={[styles.imageBG, { height }]}
          source={require("../assets/images/PhotoBG.png")}
        >
          <View style={styles.contentContainer}>
            <View style={styles.photoContainer}>
              {photo ? (
                <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  source={require("../assets/images/Photo_Girl_Registration.png")}
                />
              ) : null}
              <Pressable style={styles.addBtn}>
                {photo ? (
                  <Image source={require("../assets/icons/cancel.png")} />
                ) : (
                  <Image source={require("../assets/icons/add.png")} />
                )}
              </Pressable>
            </View>

            <RegistrationForm />
          </View>
        </ImageBackground>
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
