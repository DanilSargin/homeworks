import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { UserProfileAvatar } from "../Components/UserProfileAvatar/UserProfileAvatar";
import { LogOut } from "../Components/LogOut/Logout";
import { PostCard } from "../Components/PostCard/PostCard";

export const ProfileScreen = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const { height } = useWindowDimensions();

  const title = "Title post";
  const image = require("../assets/images/photoPost.png");
  const comments = 42;
  const likes = 146;
  const location = "Ukraine";

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={[styles.imageBG, { height }]}
        source={require("../assets/images/PhotoBG.png")}
      />
      <View style={styles.contentContainer}>
        <UserProfileAvatar photo={userPhoto} />
        <View style={styles.logOutIconContainer}>
          <LogOut />
        </View>
        <Text style={styles.nameText}>Natali Romanova</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        ></ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBG: {
    width: "100%",
    justifyContent: "flex-end",
    position: "absolute",
    resizeMode: "cover",
  },
  contentContainer: {
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 147,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    width: "100%",
    paddingTop: 33,
  },
  logOutIconContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 22,
    marginRight: -16,
  },
  nameText: {
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    letterSpacing: 1,
    marginTop: 46,
  },
});
