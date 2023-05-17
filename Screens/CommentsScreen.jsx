import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Touchable,
  TouchableHighlight,
} from "react-native";
import { useCallback, useState } from "react";
import { Comment } from "../Components/Comment/Comment";
import { Input } from "../Components/Input/Input";
import { useDateNow } from "../hooks/useDateNow";

export const CommentsScreen = () => {
  const [comments, setComments] = useState([]);

  const [commentText, setCommentText] = useState(null);

  const { formattedDateTime } = useDateNow();

  const sendComment = useCallback(() => {
    const comment = {
      date: formattedDateTime,
      text: commentText,
      user: {
        avatar: require("../assets/images/Photo_Girl_Registration.png"),
      },
    };
    setComments((prev) => [...prev, comment]);
    setCommentText(null);
  }, [commentText]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/photoPost.png")} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {comments.map((item, i) => (
          <Comment key={i} text={item.text} date={item.date} user={item.user} />
        ))}
      </ScrollView>
      <Input
        style={styles.input}
        placeholder="Комментировать..."
        value={commentText}
        onChange={setCommentText}
        containerStyle={styles.inputContainer}
      >
        <TouchableHighlight onPress={sendComment} style={styles.sendCommentBtn}>
          <Image source={require("../assets/icons/white_arrow_top.png")} />
        </TouchableHighlight>
      </Input>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  scrollContainer: {
    paddingTop: 32,
    flex: 1,
  },
  input: {
    width: "100%",
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-medium",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    paddingRight: 50,
  },
  inputContainer: {
    position: "relative",
    marginTop: 10,
  },
  sendCommentBtn: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 8,
    right: 8,
  },
});
