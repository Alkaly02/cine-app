import { Image, ImageProps, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../constants/designSystem'

type LogoType = {
    logo: ImageProps,
    nowColor?: TextStyle
}

const Logo = ({ logo, nowColor }: LogoType) => {
    const { imageContainer, image, textContainer, textType, cine, now } = styles
    return (
        <View style={imageContainer}>
            <Image
                source={logo}
                style={image}
            />
            <View style={textContainer}>
                <Text style={[textType, cine]}>Cine</Text>
                <Text style={[textType, now, nowColor]}>Now</Text>
            </View>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    imageContainer: {
        // borderColor: "black",
        // borderWidth: 4,
        alignItems: "center"
    },
    image: {
        // borderColor: "white",
        // borderWidth: 2,
        // width: 250,
        height: 60,
        aspectRatio: 1
    },
    textType: {
        fontSize: 35,
        fontWeight: "800",
        letterSpacing: 1
    },
    textContainer: {
        flexDirection: "row"
    },
    cine: {

    },
    now: {
        color: appSystemDesign.colors.primary
    }
})