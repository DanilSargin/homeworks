import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../Components/LoginForm/LoginForm";

export const LoginScreen = () => {
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
            <LoginForm />
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
