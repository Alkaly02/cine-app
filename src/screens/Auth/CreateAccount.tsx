import { SafeAreaView, StatusBar, StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import { appSystemDesign } from '../../constants/designSystem'
import Input from '../../components/Input'
import TermsPrivacy from '../../components/TermsPrivacy'
import AuthForm from '../../components/AuthForm'

type CreateAccountType = {
    navigation: any
}

const CreateAccount = ({ navigation }: CreateAccountType) => {
    const { width } = useWindowDimensions()
    const { safeAria, container, btnWrapper, btnContainer, button } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <Logo />
                <AuthForm
                    btnText="Create Account"
                    onPress={() => navigation.navigate("Verification")}
                />
            </View>
            <TermsPrivacy />
        </SafeAreaView>
    )
}

export default CreateAccount

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