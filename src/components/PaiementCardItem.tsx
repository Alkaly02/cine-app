import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../constants/designSystem'

type CardType = {
    isActive: boolean,
    cardType: string,
    cardImg: ImageProps
}

const PaiementCardItem = ({ isActive = false, cardType = "Credit Card", cardImg }: CardType) => {
    const {
        cardContainer,
        logoTitle,
        title,
        cardNumber,
        circle,
        activeCardBg,
        activeCardColor,
        activeCardCircle
    } = styles

    return (
        <TouchableOpacity>
            <View style={!isActive ? cardContainer : [cardContainer, activeCardBg]}>
                <View style={logoTitle}>
                    <Image
                        source={cardImg}
                        style={{ height: 10, width: 45, aspectRatio: 2 / 2 }}
                    />
                    <View>
                        <Text style={!isActive ? title : [title, activeCardColor]}>{cardType}</Text>
                        <Text
                            style={!isActive ? cardNumber : [cardNumber, activeCardColor]}
                        >
                            1234******7890
                        </Text>
                    </View>
                </View>
                <View style={!isActive ? circle : [circle, activeCardCircle]}></View>
            </View>
        </TouchableOpacity>
    )
}

export default PaiementCardItem

const styles = StyleSheet.create({
    cardContainer: {
        padding: 20,
        height: 100,
        backgroundColor: appSystemDesign.colors.paymentCardBg,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
    },
    activeCardBg: {
        backgroundColor: appSystemDesign.colors.activePaymentCardBg
    },
    activeCardColor: {
        color: appSystemDesign.colors.primary
    },
    logoTitle: {
        gap: 20,
        flexDirection: "row",
    },
    title: {
        fontWeight: "600",
        fontSize: 18
    },
    cardNumber: {
        marginTop: 5,
        fontWeight: "500",
        color: "#353535"
    },
    circle: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "gray",
    },
    activeCardCircle: {
        borderColor: "white",
    }
})