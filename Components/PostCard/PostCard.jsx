import { View, Image, Text, StyleSheet } from "react-native";

export const PostCard = ({ photo, comments, likes, tittle, location }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={photo} />
      <View style={styles.textContentContainer}>
        <Text style={styles.title}>{tittle}</Text>
        <View style={styles.bottomLine}>
          <View style={styles.countersBlock}>
            <View style={styles.contentsBlock}>
              <Image source={require("../../assets/icons/comments.png")} />
              <Text>{comments}</Text>
            </View>
            <View style={styles.contentsBlock}>
              <Image source={require("../../assets/icons/thumbs-up.png")} />
              <Text>{likes}</Text>
            </View>
          </View>
          <View style={styles.contentsBlock}>
            <Image source={require("../../assets/icons/map-pin.png")} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
  textContentContainer: {
    paddingTop: 8,
  },
  title: {
    fontFamily: "Roboto-medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  countersBlock: {
    flexDirection: "row",
    gap: 24,
  },
  contentsBlock: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationText: {
    textDecorationLine: "underline",
  },
  bottomLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
});
