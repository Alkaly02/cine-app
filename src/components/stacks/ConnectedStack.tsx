import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Checkout from '../../screens/Checkout/Checkout'
import { appSystemDesign } from '../../constants/designSystem'
import Payment from '../../screens/Checkout/Payment'

const Stack = createStackNavigator()

const ConnectedStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "600",
                    fontSize: 25,
                    textAlign: "center",
                },
                headerStyle: {
                    backgroundColor: appSystemDesign.colors.primary
                },
            }}
        >
            <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{
                    title: "Check Out",

                }}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    title: "Payment",
                }}
            />
        </Stack.Navigator>
    )
}

export default ConnectedStack

const styles = StyleSheet.create({})