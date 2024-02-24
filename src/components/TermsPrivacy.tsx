import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TermsPrivacy = () => {
    const { container, textCenter, agreed } = styles
    return (
        <View style={container}>
            <Text style={[textCenter, agreed]}>By signing up you have agreed to our</Text>
            <Text style={[textCenter]}>Terms of Use & Privacy Policy</Text>
        </View>
    )
}

export default TermsPrivacy

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // position: "absolute",
        // bottom: 0,
    },
    textCenter: {
        textAlign: "center",
        fontWeight: "300",
        fontSize: 18
    },
    agreed: {
        color: "#868585"
    }
})