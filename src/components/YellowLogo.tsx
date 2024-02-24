import { StyleSheet } from 'react-native'
import React from 'react'
import Logo from './Logo'
import { appSystemDesign } from '../constants/designSystem'

const YellowLogo = () => {
    return (
        <Logo
            logo={require("../../assets/yellow.png")}
            nowColor={{ color: appSystemDesign.colors.secondary }}
        />
    )
}

export default YellowLogo

const styles = StyleSheet.create({})