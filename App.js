import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
