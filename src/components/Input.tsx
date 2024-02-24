import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { appSystemDesign } from '../constants/designSystem';

interface InputProps extends TextInputProps {
    text: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    icon?: any
}

const Input: React.FC<InputProps> = ({ text, placeholder = "Enter text", onChangeText, icon }) => {
    const { inputContainer, input } = styles
    return (
        <View style={inputContainer}>
            <Ionicons
                // style={{ margin: 0, padding: 0, alignSelf: "flex-end" }}
                name={icon}
                size={30}
                color={"gray"}
            />
            <TextInput
                style={input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: 70,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: appSystemDesign.colors.input,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        borderRadius: appSystemDesign.borders.radius.input,
        marginVertical: 10,
        // backgroundColor: "yellow"
    },
    input: {
        fontSize: 20,
        alignSelf: "center",
        // backgroundColor: "red",
        width: "100%",
        height: "100%"
    },
});