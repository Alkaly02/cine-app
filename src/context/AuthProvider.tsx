import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useState } from 'react'

type AuthType = {
    children: React.ReactNode
}

type AuthContextType = {
    isConnected: boolean;
    login: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isConnected: false,
    login: () => { }
})

const AuthProvider = ({ children }: AuthType) => {
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const login = () => {
        setIsConnected(true)
    }
    return (
        <AuthContext.Provider value={{ isConnected, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuthContext = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("AuthContext is not defined")

    return ctx
}