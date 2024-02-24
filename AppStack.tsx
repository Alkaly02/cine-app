import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingStack from './src/components/stacks/OnBoardingStack';
import ConnectedStack from './src/components/stacks/ConnectedStack';
import { useAuthContext } from './src/context/AuthProvider';

const AppStack = () => {
    const { isConnected } = useAuthContext()
    return (
        <NavigationContainer>
            {
                !isConnected ? <OnBoardingStack /> : <ConnectedStack />
            }
        </NavigationContainer>
    );
}

export default AppStack

const styles = StyleSheet.create({})