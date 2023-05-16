import { useState } from "react";
import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";

export const Input = ({
  value,
  password = false,
  style,
  placeholder,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(password);
  const [focus, setFocus] = useState(false);

  return (
    <View>
      <TextInput
        style={[
          { ...style },
          password ? { paddingRight: 100 } : null,
          focus ? { borderColor: "#FF6C00" } : null,
        ]}
        placeholder={placeholder}
        onChangeText={(v) => onChange(v)}
        value={value}
        secureTextEntry={showPass}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      {password ? (
        <Pressable
          onPress={() => setShowPass(!showPass)}
          style={styles.showPassBtn}
        >
          <Text style={styles.showPassBtnText}>
            {showPass ? "Показать" : "Скрыть"}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  showPassBtn: {
    position: "absolute",
    right: 0,
    padding: 16,
    height: "100%",
    justifyContent: "center",
  },
  showPassBtnText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
