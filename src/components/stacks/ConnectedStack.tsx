import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Checkout from '../../screens/Checkout/Checkout'
import { appSystemDesign } from '../../constants/designSystem'

const Stack = createStackNavigator()

const ConnectedStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false
            }}
        >
            <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{
                    title: "Check Out",
                    headerStyle: {
                        backgroundColor: appSystemDesign.colors.primary
                    },
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 25,
                        textAlign: "center",
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default ConnectedStack

const styles = StyleSheet.create({})