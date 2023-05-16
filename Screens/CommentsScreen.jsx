import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import { Comment } from "../Components/Comment/Comment";

export const CommentsScreen = () => {
  const [comments, setComments] = useState([
    {
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      date: Date.now(),
      user: {
        avatar: require("../assets/images/Photo_Girl_Registration.png"),
      },
    },
    {
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      date: Date.now(),
      user: {
        avatar: require("../assets/images/Photo_Girl_Registration.png"),
      },
    },
    {
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      date: Date.now(),
      user: {
        avatar: require("../assets/images/Photo_Girl_Registration.png"),
      },
    },
    {
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      date: Date.now(),
      user: {
        avatar: require("../assets/images/Photo_Girl_Registration.png"),
      },
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/photoPost.png")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {comments.map((item) => (
          <Comment text={item.text} date={item.date} user={item.user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
});
