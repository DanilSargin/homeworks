import { StyleSheet, View, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import { LoginForm } from '../Components/LoginForm/LoginForm';


export const LoginScreen = () => {

    const height = Dimensions.get('screen').height


    return (
            <SafeAreaView style={styles.container}>
                <ImageBackground  resizeMode='cover' style={[styles.imageBG, {height}]} source={require('../assets/images/PhotoBG.png')}>
              
              <View style={styles.contentContainer}>

                

                <LoginForm />
                   
              </View>
                </ImageBackground>
             </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBG: {
        width: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
        resizeMode: 'cover',
      },
    contentContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 78,
      },
})