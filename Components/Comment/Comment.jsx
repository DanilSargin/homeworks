import { View, StyleSheet, Image, Text } from "react-native";

export const Comment = ({ text, date, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarContainer} source={user.avatar} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>{text}</Text>
        <View style={styles.textDateContainer}>
          <Text style={styles.dateText}>{date}</Text>
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
    marginBottom: 24,
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  contentContainer: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 16,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  mainText: {
    fontFamily: "Roboto-regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  textDateContainer: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  dateText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-regular",
    fontSize: 10,
    lineHeight: 12,
  },
});
