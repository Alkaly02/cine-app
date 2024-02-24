import { SafeAreaView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import Button from '../../components/Button'
import Input from '../../components/Input'
import TermsPrivacy from '../../components/TermsPrivacy'
import YellowLogo from '../../components/YellowLogo'

type VerificationType = {
    navigation: any
}


const Verification = ({ navigation }: VerificationType) => {
    const { width } = useWindowDimensions()
    const {
        safeAria,
        container,
        btnContainer,
        textCenter,
        verify,
        checkEmail,
        button,
        question,
        tryAgain
    } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <YellowLogo />
                <View style={{ width: width - 80 }}>
                    <Text style={[textCenter, verify]}>Verify account</Text>
                    <Text style={[textCenter, checkEmail]}>
                        Please check your email.
                        We just sent a verification code on your email
                    </Text>
                    <Input
                        text=""
                        onChangeText={() => { }}
                        placeholder="- - - -"
                    />
                    <Text
                        style={question}
                    >
                        Didn't get the code ?
                        <Text style={tryAgain}> Try again</Text>
                    </Text>
                <Button
                        title="Verify"
                    btnContainer={btnContainer}
                    textStyle={button}
                        onPress={() => navigation.navigate("Login")}
                    />
                </View>
            </View>
            <TermsPrivacy />
        </SafeAreaView>
    )
}

export default Verification

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
    textCenter: {
        textAlign: "center",
    },
    verify: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: "400"
    },
    checkEmail: {
        fontSize: 16,
        marginBottom: 10,
        color: appSystemDesign.colors.verify
    },
    btnContainer: {
        backgroundColor: appSystemDesign.colors.secondary
    },
    button: {
        color: appSystemDesign.colors.primary
    },
    question: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 16,
        fontSize: 15
    },
    tryAgain: {
        color: appSystemDesign.colors.secondary,
        marginLeft: 10
    }
})