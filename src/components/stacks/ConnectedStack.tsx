import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Checkout from '../../screens/Checkout/Checkout'

const Stack = createStackNavigator()

const ConnectedStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Checkout"
                component={Checkout}
            />
        </Stack.Navigator>
    )
}

export default ConnectedStack

const styles = StyleSheet.create({})