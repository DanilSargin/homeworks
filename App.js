import {  StyleSheet,  } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font'
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {
  const [fontsLoaded]= useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

  if(!fontsLoaded) return null

  return (
    <> 
      <RegistrationScreen/>
      {/* <LoginScreen /> */}
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
