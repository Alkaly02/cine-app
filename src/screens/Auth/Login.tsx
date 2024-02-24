import { StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { appSystemDesign } from '../../constants/designSystem'
import AuthForm from '../../components/AuthForm'

type LoginType = {
    navigation: any
}

const Login = ({ navigation }: LoginType) => {

    const { width } = useWindowDimensions()
    const { safeAria, container, btnWrapper, btnContainer, button } = styles

    return <SafeAreaView style={safeAria}>
        <View style={container}>
            <Logo />
            <AuthForm
                btnText="Login"
                onPress={() => navigation.navigate("Verification")}
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