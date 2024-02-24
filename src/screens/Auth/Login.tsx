import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appSystemDesign } from '../../constants/designSystem'
import AuthForm from '../../components/AuthForm'
import YellowLogo from '../../components/YellowLogo'
import { useAuthContext } from '../../context/AuthProvider'

type LoginType = {
    navigation: any
}

const Login = ({ navigation }: LoginType) => {
    const { login } = useAuthContext()
    const { safeAria, container } = styles

    return <SafeAreaView style={safeAria}>
        <View style={container}>
            <YellowLogo />
            <AuthForm
                btnText="Login"
                onPress={() => {
                    login()
                    return navigation.push("Checkout")
                }}
            />
        </View>
    </SafeAreaView>
}

export default Login

const styles = StyleSheet.create({
    safeAria: {
        flex: 1,
        backgroundColor: appSystemDesign.colors.primary
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
    // formContainer: {
    //     width:
    // },
    btnWrapper: {
        marginTop: 30
    },
    btnContainer: {
        backgroundColor: appSystemDesign.colors.secondary
    },
    button: {
        color: appSystemDesign.colors.primary
    }
})