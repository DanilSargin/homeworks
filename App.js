import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { LoginScreen } from "./Screens/LoginScreen";
import { HomeScreen } from "./Screens/Home";
import { store, persistor } from "./store/store";
import { MapScreen } from "./Screens/MapScreen";
import { CommentsScreen } from "./Screens/CommentsScreen";
import { GoBack } from "./Components/GoBack/GoBack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <NavigationContainer>
          <NavigationStack.Navigator
            initialRouteName="Login"
            // screenOptions={{ headerShown: false }}
          >
            <NavigationStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <NavigationStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <NavigationStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
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
      </Provider>
    </>
  );
}
