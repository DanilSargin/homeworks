import { Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const GoBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={{ paddingLeft: 16 }}
      onPress={() => navigation.navigate("Публикации")}
    >
      <Image source={require("../../assets/icons/arrow-left.png")} />
    </TouchableHighlight>
  );
};
