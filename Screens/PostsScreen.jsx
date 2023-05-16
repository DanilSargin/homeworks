import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { PostCard } from "../Components/PostCard/PostCard";
import { useFocusEffect } from "@react-navigation/native";

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const newPost = route.params?.post;
    if (newPost) {
      setPosts((prev) => [...prev, { ...newPost, comments: 0, likes: 0 }]);
    }
  }, [route]);

  console.log("++", posts);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.photo}
          source={require("../assets/images/Photo_Girl_Registration.png")}
        />
        <View>
          <Text style={styles.loginText} numberOfLines={1}>
            Нет информации
          </Text>
          <Text style={styles.mailtext}>Нет информации</Text>
        </View>
      </View>

      <ScrollView
        style={styles.postsContainer}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post, index) => (
          <PostCard
            key={index}
            tittle={post.title}
            photo={post.imageUri}
            comments={post.comments}
            likes={post.likes}
            location={post.location}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  postsContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#E8E8E8",
  },
  loginText: {
    fontSize: 13,
    fontFamily: "Roboto-bold",
    lineHeight: 15,
    color: "#212121",
  },
  mailtext: {
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
    opacity: 0.8,
  },
});
