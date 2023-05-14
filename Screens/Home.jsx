import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsScreen } from "../Components/PostsScreen/PostsScreen";
import { TabsNavigation } from "../Components/TabsNavigation/TabsNavigation";

export const HomeScreen = ({ route }) => {
  // const { user } = route.params;

  return (
    <>
      <View style={styles.container}>
        <PostsScreen />
      </View>
      <TabsNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});
