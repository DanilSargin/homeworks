import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../../Screens/PostsScreen";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { CreatePostsScreen } from "../../Screens/CreatePostsScreen";
import { ProfileScreen } from "../../Screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import { LogOut } from "../LogOut/Logout";
import { GoBack } from "../GoBack/GoBack";

export const TabsNavigation = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Публикации"
      screenOptions={{
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
      }}
    >
      <Tabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/grid.png")} />
          ),
          headerRight: () => <LogOut />,
        }}
      />
      <Tabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIconContainer}>
              <Image source={require("../../assets/icons/plus.png")} />
            </View>
          ),
          headerLeft: () => <GoBack />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/user.png")} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  plusIconContainer: {
    backgroundColor: "#FF6C00",
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 20,
  },
});
