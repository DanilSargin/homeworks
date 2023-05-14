import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../Components/LoginForm/LoginForm";

export const LoginScreen = () => {
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
              <LoginForm />
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
    width: "100%",
    justifyContent: "flex-end",
    position: "absolute",
    resizeMode: "cover",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 78,
  },
});
