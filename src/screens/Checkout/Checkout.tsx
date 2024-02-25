import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appSystemDesign } from '../../constants/designSystem'
import PaiementCardItem from '../../components/PaiementCardItem'
import Button from '../../components/Button'
import { FontAwesome } from '@expo/vector-icons'

const Checkout = () => {
    const {
        safeAria,
        container,
        paymentsContainer,
        cardContainer,
        newCardContainer,
        newCard,
        newCardText,
        totalContainer,
        totalText,
        btnContainer,
        button, footer, flexRow } = styles
    return (
        <SafeAreaView style={safeAria}>
            <View style={container}>
                <View style={paymentsContainer}>
                    <View style={cardContainer}>
                        <PaiementCardItem
                            isActive={true}
                            cardType="Master card"
                            cardImg={require("../../../assets/master.png")}
                        />
                    </View>
                    <View style={cardContainer}>
                        <PaiementCardItem
                            isActive={false}
                            cardType="Visa"
                            cardImg={require("../../../assets/visa.png")}
                        />
                    </View>
                </View>
                <View style={newCardContainer}>
                    <Button
                        btnContainer={newCard}
                        textStyle={newCardText}
                        onPress={() => { }}
                    >
                        <View style={flexRow}>
                            <FontAwesome name="plus" size={20} color="black" />
                            <Text style={newCardText}>Add new card</Text>
                        </View>
                    </Button>
                </View>
                <View style={footer}>
                    <View style={totalContainer}>
                        <Text style={totalText}>Total Price</Text>
                        <Text style={totalText}>$38.00</Text>
                    </View>
                    <Button
                        btnContainer={btnContainer}
                        textStyle={button}
                        onPress={() => { }}
                    >
                        <Text>Confirm</Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Checkout

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
    paymentsContainer: {
        flex: 1,
    },
    cardContainer: {
        marginVertical: 10
    },
    newCardContainer: {
        // width: 300,
        paddingVertical: 20,
        alignItems: "center",
        // backgroundColor: "red"
    },
    newCard: {
        backgroundColor: appSystemDesign.colors.paymentCardBg
    },
    newCardText: {
        color: '#5F5F5F',
        fontWeight: "900",
        fontSize: 20,
        // alignSelf: "center"
    },
    footer: {
        paddingVertical: 30
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 50
    },
    totalText: {
        fontSize: 25,
        fontWeight: "800"
    },
    btnContainer: {
        backgroundColor: appSystemDesign.colors.secondary
    },
    button: {
        color: appSystemDesign.colors.primary
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        // backgroundColor: "red"
    }
})