import React, { createContext, useState } from 'react'
import useResize from "./useResize";

// @ts-ignore
export const getInnerWidth = () => (typeof window !== 'undefined' ? window.innerWidth : global.innerWidth || 1920)
// @ts-ignore
export const getInnerHeight = () => (typeof window !== 'undefined' ? window.innerHeight : global.innerHeight || 1080)

export const defaultState = {
    innerWidth: getInnerWidth(),
    innerHeight: getInnerHeight(),
}

export const Context = createContext(defaultState)

export const BreakpointProvider = ({children}) => {
    const [value, setValue] = useState(defaultState)
    useResize(() => {
        setValue({
            innerWidth: getInnerWidth(),
            innerHeight: getInnerHeight()
        })
    })

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default BreakpointProvider
