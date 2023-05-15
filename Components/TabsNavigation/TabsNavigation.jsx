import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../../Screens/LoginScreen";
import { RegistrationScreen } from "../../Screens/RegistrationScreen";
import { PostsScreen } from "../../Screens/PostsScreen";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { CreatePostsScreen } from "../../Screens/CreatePostsScreen";
import { ProfileScreen } from "../../Screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";

export const TabsNavigation = () => {
  const Tabs = createBottomTabNavigator();

  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Публикации"
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Hello</Text>
          </Pressable>
        ),
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
      }}
    >
      <Tabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/grid.png")} />
          ),
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
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../assets/icons/user.png")} />
          ),
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
