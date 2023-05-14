import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { LoginScreen } from "./Screens/LoginScreen";
import { HomeScreen } from "./Screens/Home";
import { LogOut } from "./Components/LogOut/Logout";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  const NavigationStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <NavigationStack.Navigator initialRouteName="Login">
          <NavigationStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <NavigationStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <NavigationStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Публикации",
              headerStyle: {
                backgroundColor: "#FFFFFF",
                shadowColor: "#000000",
                shadowOpacity: 0.3,
                shadowOffset: {
                  height: 0.5,
                },
              },
              headerTitleAlign: "center",
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontFamily: "Roboto-medium",
                fontSize: 17,
              },
              headerLeft: null,
              headerRight: () => <LogOut />,
            }}
          />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </>
  );
}
