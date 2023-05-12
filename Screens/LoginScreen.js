import { StyleSheet, Image, View, ImageBackground, Pressable } from 'react-native';
import { LoginForm } from '../Components/LoginForm/LoginForm';


export const LoginScreen = () => {



    return (
            <View style={styles.container}>
                <ImageBackground  resizeMode='cover' style={styles.imageBG} source={require('../assets/images/PhotoBG.png')}>
              
              <View style={styles.contentContainer}>

                

                <LoginForm />
                   
              </View>
                </ImageBackground>
             </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBG: {
        flex: 1,
        justifyContent: 'flex-end',
      },
    contentContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 78
      },
      photoContainer: {
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        top: -60
      },
      addBtn: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 14,
        right: -12,
      }
})