import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { Input } from "../Input/Input";
import { useCallback, useState } from "react";

export const LoginForm = () => {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);

  const onLoginHandler = useCallback(() => {
    const user = {
      mail,
      password: pass,
    };

    setMail(null);
    setPass(null);

    console.log("User: ", user);
  }, [mail, pass]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : undefined}
        >
          <Text style={styles.headertext}>Войти</Text>

          <View style={styles.inputContainer}>
            <Input
              placeholder="Адрес электронной почты"
              style={styles.input}
              value={mail}
              onChange={setMail}
            />
            <Input
              placeholder="Пароль"
              style={styles.input}
              value={pass}
              onChange={setPass}
              password={true}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableHighlight
              style={styles.acceptBtn}
              onPress={onLoginHandler}
            >
              <Text style={styles.acceptBtnText}>Войти</Text>
            </TouchableHighlight>
            <View style={styles.linkBlock}>
              <Text style={styles.linkBlockText}>Нет аккаунта? </Text>
              <TouchableHighlight>
                <Text style={styles.linkBlockText}>Зарегистрироваться</Text>
              </TouchableHighlight>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageBG: {
    flex: 1,
    justifyContent: "flex-end",
  },
  headertext: {
    fontSize: 30,
    fontFamily: "Roboto-medium",
    lineHeight: 35,
    letterSpacing: 1,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputContainer: {
    width: "100%",
    gap: 16,
    marginTop: 34,
  },
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
  footerContainer: {
    width: "100%",
  },
  acceptBtn: {
    marginTop: 43,
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
  linkBlock: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 16,
  },
  linkBlockText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
