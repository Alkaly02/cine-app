import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Opening from '../../screens/Opening/Opening'
import CreateAccount from '../../screens/Auth/CreateAccount'
import Verification from '../../screens/Auth/Verification'
import Login from '../../screens/Auth/Login'

const Stack = createStackNavigator()

const OnBoardingStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Opening"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Opening"
                component={Opening}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
            />
            <Stack.Screen
                name="Verification"
                component={Verification}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}

export default OnBoardingStack

const styles = StyleSheet.create({})