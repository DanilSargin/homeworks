import { useCallback, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  KeyboardAvoidingView,
} from "react-native";

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
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
      >
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
      </KeyboardAvoidingView>
    </>
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
