import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
    const { imageContainer, image } = styles
    return (
        <View style={imageContainer}>
            <Image
                source={require("../../assets/cineNow.png")}
                style={image}
            />
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
        height: 200,
        aspectRatio: 2 / 2
    }
})