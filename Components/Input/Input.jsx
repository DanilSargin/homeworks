import { useCallback, useState } from "react";
import { TextInput, StyleSheet, Pressable, Text, View } from "react-native";

export const Input = ({
  value,
  password = false,
  style,
  placeholder,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(password);
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => setFocus(true), []);
  const onBlur = useCallback(() => setFocus(false), []);
  const showPassword = useCallback(() => setShowPass(!showPass), [showPass]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          { ...style },
          password && { paddingRight: 100 },
          focus && { borderColor: "#FF6C00" },
        ]}
        placeholder={placeholder}
        onChangeText={(v) => onChange(v)}
        value={value}
        secureTextEntry={showPass}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {password && (
        <Pressable onPress={showPassword} style={styles.showPassBtn}>
          <Text style={styles.showPassBtnText}>
            {showPass ? "Показать" : "Скрыть"}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  showPassBtn: {
    position: "absolute",
    height: "100%",
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: "center",
  },
  showPassBtnText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
