import { useState, useMemo } from 'react'
import { options, useResize, LANDSCAPE, PORTRAIT } from '.'

const getIsLandscape = function() {
    const s = window.screen
    // @ts-ignore
    const orientation = (s.mozOrientation || s.orientation || { type: 'portrait' }).type || s.msOrientation
    return orientation && orientation.includes('landscape')
}

type TBreakpointItem = [string, unknown]

type TCalculateValue = (
    defaultValue: unknown,
    breakpointValues: TBreakpointItem[] | TBreakpointItem,
    iw?: number
) => typeof defaultValue

// We will save the calculated value until innerWidth changes
let cachedProplessValue = {}
const calculateProplessValue = function(iw) {
    if (cachedProplessValue[iw]) return cachedProplessValue[iw]

    const isLandscape = getIsLandscape()
    const proplessValue = { isLandscape, isPortrait: !isLandscape, isHDPI: window.devicePixelRatio > 1 }

    // @ts-ignore
    for (const [[firstLetter, secondLetter, ...restLetter], [from, to]] of Object.entries(options.breakpoints)) {
        const isOrientedLandscape = LANDSCAPE === firstLetter
        const isOrientedPortrait = PORTRAIT === firstLetter
        const isOriented = isOrientedLandscape || isOrientedPortrait
        const key = isOriented ? `${firstLetter}${secondLetter.toUpperCase()}${restLetter.join('')}`
            : `${firstLetter.toUpperCase()}${secondLetter}${restLetter.join('')}`
        proplessValue[`is${key}`] = (iw > from && iw <= to && (!isOriented || (isOrientedLandscape && isLandscape) || (isOrientedPortrait && !isLandscape)))
    }

    cachedProplessValue = { [iw]: proplessValue }

    return proplessValue
}

/* eslint-disable no-continue */
export const calculateValue: TCalculateValue = function(defaultValue, breakpointValues = [], iw = window.innerWidth) {
    if (defaultValue === undefined && !breakpointValues.length) {
        return calculateProplessValue(iw)
    }
    const isLandscape = getIsLandscape()
    if (!breakpointValues || !breakpointValues.length) {
        return defaultValue
    }
    if (typeof breakpointValues[0] === 'string') {
        // @ts-ignore
        breakpointValues = [breakpointValues] // eslint-disable-line
    }
    for (const [key, value] of breakpointValues as TBreakpointItem[]) {
        if (!options.breakpoints[key]) continue
        const bp = options.breakpoints[key]
        if (isLandscape && key[0] === PORTRAIT) continue
        if (!isLandscape && key[0] === LANDSCAPE) continue
        if (iw > bp[0] && iw <= bp[1]) return value
    }
    return defaultValue
}

// @ts-ignore
const getInnerWidth = () => typeof window !== 'undefined' ? window.innerWidth : (global.innerWidth || 1920)

let cachedIw = getInnerWidth()

export function useBreakpoint(defaultValue: any, breakpointValues: any[]): any
export function useBreakpoint(defaultValue: undefined, breakpointValues: undefined): { [key: string]: boolean }
export function useBreakpoint(defaultValue, breakpointValues) {
    const [innerWidth, setInnerWidth] = useState(cachedIw)
    useResize(() => {
        cachedIw = getInnerWidth()
        setInnerWidth(cachedIw)
    })
    return useMemo(() => calculateValue(defaultValue, breakpointValues, innerWidth), [innerWidth, defaultValue])
}

export default useBreakpoint
