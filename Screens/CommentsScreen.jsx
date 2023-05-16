import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, ScrollView } from "react-native";

export const CommentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/photoPost.png")} />
      <ScrollView>
        <Text>Comments</Text>
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
