import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, TouchableHighlight } from 'react-native';
import { Input } from '../Input/Input';
import { useState } from 'react';


export const RegistrationForm = () => {

    const [login, setLogin] = useState(null)
    const [mail, setMail] = useState(null)
    const [pass, setPass] = useState(null)

    const onRegistrationHandler = () => {
        const user = {
            login,
            mail,
            password: pass
        }

        setLogin(null)
        setMail(null)
        setPass(null)

        console.log('User: ', user)
    }

    return (
        <View style={styles.container}>
        <Text style={styles.headertext}>Регистрация</Text>

        <View style={styles.inputContainer}>

        <Input 
        placeholder={'Логин'} 
        style={styles.input} 
        value={login} 
        onChange={setLogin}
        />
        <Input 
        placeholder={'Адрес электронной почты'}
        style={styles.input}
        value={mail}
        onChange={setMail}
        />
        <Input 
        placeholder={'Пароль'} 
        style={styles.input}
        value={pass}
        onChange={setPass}
        password={true}
        />
        </View>

        <View style={styles.footerContainer}>
            <TouchableHighlight style={styles.acceptBtn} onPress={onRegistrationHandler}>
                <Text style={styles.acceptBtnText}>Зарегистрироваться</Text>
            </TouchableHighlight>
            <View style={styles.linkBlock}>
                <Text style={styles.linkBlockText}>Уже есть аккаунт? </Text>
                <TouchableHighlight>
                    <Text style={styles.linkBlockText}>Войти</Text>
                    </TouchableHighlight>
            </View>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    imageBG: {
        flex: 1,
        justifyContent: 'flex-end',
      },
    headertext: {
    fontSize: 30,
    fontFamily: 'Roboto-medium',
    lineHeight: 35,
    letterSpacing: 1,
    textAlign: 'center'
    },
    input: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8'
},
    inputContainer: {
        width: '100%',
        gap: 16,
        marginTop: 34
    },
    showPassBtn: {
        position: 'absolute', 
        right: 0, 
        padding: 16,  
        height: '100%',
        justifyContent: 'center'
        },
    showPassBtnText: {
        color: '#1B4371', 
        fontSize: 16, 
        lineHeight: 19
    },
    footerContainer: {
        width: '100%'
    },
    acceptBtn: {
        marginTop: 43,
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#FF6C00',
        padding: 16,
        alignItems: 'center'
    },
    acceptBtnText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        lineHeight: 19
    },
    linkBlock: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center', 
        marginTop: 16
    },
    linkBlockText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371'
    }
})