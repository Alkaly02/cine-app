import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

type OpeningType = {
    navigation: any
}

const Opening = ({ navigation }: OpeningType) => {
    const { safeAria, container, btnContainer, button, text } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <Logo />
                <Button
                    title="Sign up with email"
                    btnContainer={btnContainer}
                    textStyle={button}
                    onPress={() => navigation.navigate("CreateAccount")}
                />
                <Text style={text}>Already have an account?</Text>
            </View>
        </SafeAreaView>
    )
}

export default Opening

const styles = StyleSheet.create({
    safeAria: {
        flex: 1,
        backgroundColor: appSystemDesign.colors.secondary
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
    btnContainer: {
        borderWidth: 3,
        borderColor: appSystemDesign.colors.primary
    },
    button: {
        color: appSystemDesign.colors.primary,
    },
    text: {
        color: appSystemDesign.colors.primary,
        fontSize: 18,
        marginTop: 20,
        fontWeight: "300",
        letterSpacing: 1
    }
})