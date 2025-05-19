"use client"
import { createContext } from "react";

export const AuthContext = createContext<{id: string, email:string} | null>(null)

export const AuthProvider = ({children, user}: {children: React.ReactNode, user: {id: string, email:string} | null}) => {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}