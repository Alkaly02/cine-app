import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

type VerificationType = {
    navigation: any
}


const Verification = ({ navigation }: VerificationType) => {
    const { safeAria, container, btnContainer, button } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <Logo />
                <Text>Verification</Text>
                <Button
                    title="Sign up with email"
                    btnContainer={btnContainer}
                    textStyle={button}
                    onPress={() => navigation.navigate("Verification")}
                />
            </View>
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
    btnContainer: {
        backgroundColor: appSystemDesign.colors.secondary
    },
    button: {

    }
})