import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import TermsPrivacy from '../../components/TermsPrivacy'
import AuthForm from '../../components/AuthForm'
import YellowLogo from '../../components/YellowLogo'

type CreateAccountType = {
    navigation: any
}

const CreateAccount = ({ navigation }: CreateAccountType) => {
    const { safeAria, container } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <YellowLogo />
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
})