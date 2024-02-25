import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import Input from '../../components/Input'
import FooterBtn from '../../components/FooterBtn'

const Payment = () => {
    const {
        safeAria,
        container,
        cardBgContainer,
        formContainer,
        logo
    } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <View>
                    <Image
                        style={logo}
                        source={require("../../../assets/card.png")}
                    />
                </View>
                <View style={formContainer}>
                    <Input
                        text=''
                        placeholder="Card Number"
                        onChangeText={() => { }}
                    />
                    <Input
                        text=''
                        placeholder="Card Number"
                        onChangeText={() => { }}
                    />
                </View>
                <FooterBtn btnText="Confirm" onPress={() => { }} />
            </View>
        </SafeAreaView>
    )
}

export default Payment

const styles = StyleSheet.create({
    safeAria: {
        flex: 1,
        backgroundColor: appSystemDesign.colors.primary
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
    cardBg: {
        borderRadius: 100,
        height: "100%",
        // padding: 10,
        // backgroundColor: "red"
    },
    cardBgContainer: {
        height: 200,
        borderRadius: 20,
        // backgroundColor: "green",
        padding: 5
    },
    logo: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    formContainer: {
        flex: 1
    }
})