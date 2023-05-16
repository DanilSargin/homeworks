import { View, StyleSheet, Image, Text } from "react-native";

export const Comment = ({ text, date, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarContainer} source={user.avatar} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>{text}</Text>
        <View>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  contentContainer: {
    backgroundColor: "#F7F7F7",
    padding: 16,
  },
  mainText: {
    fontFamily: "Roboto-regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
});
