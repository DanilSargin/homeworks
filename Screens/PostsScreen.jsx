import { View, Image, Text, StyleSheet } from "react-native";

export const PostsScreen = ({ photo, login, mail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.photo}
          source={
            photo || require("../assets/images/Photo_Girl_Registration.png")
          }
        />
        <View>
          <Text style={styles.loginText} numberOfLines={1}>
            {login || "Нет информации"}
          </Text>
          <Text style={styles.mailtext}>{mail || "Нет информации"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  itemContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
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
