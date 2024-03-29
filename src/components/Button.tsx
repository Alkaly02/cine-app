import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    btnContainer: object,
    textStyle: object,
    onPress: () => any
}

const Button = ({ btnContainer, textStyle, onPress, children }: ButtonProps) => {
    const { button, text } = styles
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[button, btnContainer]}>
                <Text style={[text, textStyle]}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
        borderRadius: 10
    },
    toucheOpacity: {
        backgroundColor: "yellow",
        height: "100%",
    },
    text: {
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 16
    }
})