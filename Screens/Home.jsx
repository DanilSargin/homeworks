import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsScreen } from "./PostsScreen";
import { TabsNavigation } from "../Components/TabsNavigation/TabsNavigation";

export const HomeScreen = ({ route }) => {
  // const { user } = route.params;

  return (
    <>
      {/* <View style={styles.container}> */}
      <TabsNavigation />
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "red",
  },
});
