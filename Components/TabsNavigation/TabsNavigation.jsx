import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../../Screens/LoginScreen";
import { RegistrationScreen } from "../../Screens/RegistrationScreen";
import { HomeScreen } from "../../Screens/Home";
import { PostsScreen } from "../../Screens/PostsScreen";

export const TabsNavigation = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="Login" component={LoginScreen} />
      <Tabs.Screen name="Home" component={PostsScreen} />
      <Tabs.Screen name="Registration" component={RegistrationScreen} />
    </Tabs.Navigator>
  );
};
