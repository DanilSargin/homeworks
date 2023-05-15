import { TouchableHighlight, Text, StyleSheet } from "react-native";

export const Button = ({ title, disabled = false, onPress, style }) => {
  return (
    <TouchableHighlight
      style={[
        styles.acceptBtn,
        style,
        disabled && { backgroundColor: "#F6F6F6" },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.acceptBtnText, disabled && { color: "#BDBDBD" }]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  acceptBtn: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
  },
  acceptBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
});
