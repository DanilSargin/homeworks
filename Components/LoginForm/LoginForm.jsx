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
import { useNavigation } from "@react-navigation/native";
import { Input } from "../Input/Input";
import { useCallback, useState } from "react";
import { Button } from "../Button/Button";

export const LoginForm = () => {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);

  const navigation = useNavigation();

  const onLoginHandler = useCallback(() => {
    const user = {
      mail,
      password: pass,
    };

    setMail(null);
    setPass(null);

    navigation.navigate("Home", { user });
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
            <Button
              title="Войти"
              onPress={onLoginHandler}
              style={styles.acceptBtn}
            />
            <View style={styles.linkBlock}>
              <Text style={styles.linkBlockText}>Нет аккаунта? </Text>
              <TouchableHighlight
                onPress={() => navigation.navigate("Registration")}
              >
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
