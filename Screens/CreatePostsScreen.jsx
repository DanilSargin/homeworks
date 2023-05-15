import { View, Text, StyleSheet } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello! I'm CreatePosts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
