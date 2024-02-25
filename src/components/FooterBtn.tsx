import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../constants/designSystem'
import Button from './Button'

type FooterBtnType = {
    btnText: string,
    onPress: () => any
}

const FooterBtn = ({ btnText, onPress }: FooterBtnType) => {
    const { footer, btnContainer, button } = styles
    return (
        <View style={footer}>
            <Button
                btnContainer={btnContainer}
                textStyle={button}
                onPress={onPress}
            >
                <Text>{btnText}</Text>
            </Button>
        </View>
    )
}

export default FooterBtn

const styles = StyleSheet.create({
    footer: {
        // flex: 1,
        paddingVertical: 30,
        // backgroundColor: "red",
        justifyContent: "flex-end"
    },
    btnContainer: {
        backgroundColor: appSystemDesign.colors.secondary
    },
    button: {
        color: appSystemDesign.colors.primary
    },
})