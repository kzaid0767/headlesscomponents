import { ToggleContext } from "./Toggle"
import { useState, useContext, createContext } from "react"

export default function ToggleOff({ children }) {
    const { on } = useContext(ToggleContext)
    
    return on ? null : children
}