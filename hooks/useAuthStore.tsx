"use client"
import { AuthContext } from "@/context/AuthProvider"
import { useContext } from "react"

export const useAuthStore = () => {
    const context = useContext(AuthContext)

    if(context === undefined) {
        throw new Error("useAuthStore must be used within an AuthProvider")
    }

    return context
}