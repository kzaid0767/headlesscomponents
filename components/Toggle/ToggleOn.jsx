import { ToggleContext } from "./Toggle"
import { useState, useContext, createContext } from "react"

export default function ToggleOn({ children }) {
    const { on } = useContext(ToggleContext)
    
    return on ? children : null
}