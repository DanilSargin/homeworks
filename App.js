import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { LoginScreen } from "./Screens/LoginScreen";
import { HomeScreen } from "./Screens/Home";
import { LogOut } from "./Components/LogOut/Logout";
import { MapScreen } from "./Screens/MapScreen";
import { CommentsScreen } from "./Screens/CommentsScreen";
import { GoBack } from "./Components/GoBack/GoBack";

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
        <NavigationStack.Navigator
          initialRouteName="Login"
          // screenOptions={{ headerShown: false }}
        >
          <NavigationStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <NavigationStack.Screen name="Login" component={LoginScreen} />
          <NavigationStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
            // options={{
            //   headerStyle: {
            //     backgroundColor: "#FFFFFF",
            //     shadowColor: "#000000",
            //     shadowOpacity: 0.3,
            //     shadowOffset: {
            //       height: 0.5,
            //     },
            //   },
            //   headerTitleAlign: "center",
            //   headerTintColor: "#212121",
            //   headerTitleStyle: {
            //     fontFamily: "Roboto-medium",
            //     fontSize: 17,
            //   },
            //   headerLeft: null,
            //   headerRight: () => <LogOut />,
            // }}
          />
          <NavigationStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
          <NavigationStack.Screen
            name="Комментарии"
            component={CommentsScreen}
            options={{
              headerTitleAlign: "center",

              tabBarShowLabel: false,
              tabBarStyle: {
                height: 80,
                paddingHorizontal: 50,
              },
              tabBarItemStyle: {
                borderRadius: 30,
                height: 40,
                width: 70,
                marginTop: 9,
              },
              headerStyle: {
                height: 88,
              },
              headerLeft: () => <GoBack />,
            }}
          />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </>
  );
}
