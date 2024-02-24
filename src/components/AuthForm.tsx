import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Input from './Input'
import Button from './Button'
import { appSystemDesign } from '../constants/designSystem'

type AuthFormType = {
    btnText: string,
    onPress: () => any
}

const AuthForm = ({ btnText = "Click", onPress }: AuthFormType) => {
    const { width } = useWindowDimensions()
    const { btnWrapper, btnContainer, button } = styles
    return (
        <View style={{ width: width - 50 }}>
            <Input
                text=''
                placeholder="Email"
                onChangeText={() => { }}
                icon="mail-outline"
            />
            <Input
                text=''
                placeholder="Password"
                onChangeText={() => { }}
                icon="lock-closed-outline"
            />
            <View style={btnWrapper}>
                <Button
                    title={btnText}
                    btnContainer={btnContainer}
                    textStyle={button}
                    onPress={onPress}
                />
            </View>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
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