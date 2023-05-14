import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../../Screens/LoginScreen";
import { RegistrationScreen } from "../../Screens/RegistrationScreen";
import { HomeScreen } from "../../Screens/Home";

export const TabsNavigation = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Login" component={LoginScreen} />
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Registration" component={RegistrationScreen} />
    </Tabs.Navigator>
  );
};
