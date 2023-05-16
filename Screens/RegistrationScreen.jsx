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
import { useCallback, useState } from "react";
import { LoginForm } from "../Components/LoginForm/LoginForm";

export const RegistrationScreen = () => {
  const [photo] = useState(null); // change on true, and look at photo

  const { height } = useWindowDimensions();

  const [mode, setMode] = useState("SIGN_UP");

  const onChangeMode = useCallback(() => {
    if (mode === "SIGN_UP") {
      setMode("SIGN_IN");
    } else {
      setMode("SIGN_UP");
    }
  }, [mode]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={[styles.imageBG, { height }]}
        source={require("../assets/images/PhotoBG.png")}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.keyboardViewContainer}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
          >
            <View style={styles.contentContainer}>
              {mode === "SIGN_UP" ? (
                <>
                  <View style={styles.photoContainer}>
                    {photo ? (
                      <Image
                        source={require("../assets/images/Photo_Girl_Registration.png")}
                        style={styles.photo}
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
                  <RegistrationForm onChangeMode={onChangeMode} />
                </>
              ) : (
                <LoginForm onChangeMode={onChangeMode} />
              )}
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardViewContainer: {
    flex: 1,
    justifyContent: "flex-end",
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
    paddingBottom: 78,
  },
  photoContainer: {
    backgroundColor: "#F6F6F6",
    marginTop: -70,
    marginBottom: 32,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addBtn: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
