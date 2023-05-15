import {
  View,
  ImageBackground,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

export const UserProfileAvatar = ({ photo = false, positionStyles }) => {
  return (
    <View style={[styles.photoContainer, positionStyles]}>
      {photo ? (
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/Photo_Girl_Registration.png")}
        />
      ) : null}
      <Pressable style={styles.addBtn}>
        {photo ? (
          <Image source={require("../../assets/icons/cancel.png")} />
        ) : (
          <Image source={require("../../assets/icons/add.png")} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
  },
  addBtn: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
