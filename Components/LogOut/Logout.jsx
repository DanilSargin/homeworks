import { Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LogOut = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={{ paddingRight: 16 }}
      onPress={() => navigation.navigate("Login")}
    >
      <Image source={require("../../assets/icons/log-out.png")} />
    </TouchableHighlight>
  );
};
