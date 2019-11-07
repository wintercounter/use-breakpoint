import { useState, useMemo } from 'react'
import useResize from './useResize'

const UP = '+'
const DOWN = '-'
const LANDSCAPE = '-'
const PORTRAIT = '|'

let options

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

    for (const [[firstLetter, secondLetter, ...restLetter], [from, to]] of Object.entries(options.breakpoints)) {
        const key = [LANDSCAPE, PORTRAIT].includes(firstLetter)
            ? `${firstLetter}${secondLetter.toUpperCase()}${restLetter.join('')}`
            : `${firstLetter.toUpperCase()}${secondLetter}${restLetter.join('')}`
        proplessValue[`is${key}`] = (iw > from && iw <= to)
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
        const [from, to] = options.breakpoints[key]
        if (isLandscape && key.startsWith(PORTRAIT)) continue
        if (!isLandscape && key.startsWith(LANDSCAPE)) continue
        if (iw > from && iw <= to) return value
    }
    return defaultValue
}

export const useBreakpoint = function(defaultValue, breakpointValues) {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useResize(() => setInnerWidth(window.innerWidth))
    return useMemo(() => calculateValue(defaultValue, breakpointValues, innerWidth), [innerWidth, defaultValue])
}

interface IOptions {
    breakpoints: {
        [key: string]: number[]
    }
}

export const setup = function(opts: IOptions) {
    Object.entries(opts.breakpoints).forEach(([name, [from, to]]) => {
        // eslint-disable-next-line
        ;[['', [from, to]], [UP, [from, 10000]], [DOWN, [0, to]]].forEach(([symbol, fromTo]) =>
            ['', LANDSCAPE, PORTRAIT].forEach(orientation => {
                // eslint-disable-next-line
                opts.breakpoints[`${orientation}${name}${symbol}`] = fromTo as [number, number]
            })
        )
    })

    options = opts
}

export const breakpoints = {
    micro: [0, 375],
    mobile: [376, 639],
    tablet: [640, 1023],
    small: [1024, 1439],
    medium: [1440, 1919],
    large: [1920, 10000]
}

setup({ breakpoints })

export default useBreakpoint
