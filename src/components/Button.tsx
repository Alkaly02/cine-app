import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    title: string,
    btnContainer: object,
    textStyle: object,
    onPress: () => any
}

const Button = ({ btnContainer, textStyle, onPress, title = "Button" }: ButtonProps) => {
    const { button, text } = styles
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[button, btnContainer]}>
                <Text style={[text, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        // backgroundColor: "red",
        justifyContent: "center",
        paddingHorizontal: 40,
        borderRadius: 7
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