import { useContext, useMemo } from 'react'
import { options, LANDSCAPE, PORTRAIT } from '.'
import { Context } from './provider'

type TBreakpointItem = [string, unknown]

type TCalculateValue = (
    defaultValue: unknown,
    breakpointValues: TBreakpointItem[] | TBreakpointItem,
    iw: number,
    ih: number
) => typeof defaultValue

// We will save the calculated value until innerWidth changes
let cachedProplessValue = {}
const calculateProplessValue = function (iw, ih) {
    const key = `${iw}${ih}`
    if (cachedProplessValue[key]) return cachedProplessValue[key]

    const isLandscape = iw > ih
    const proplessValue = {
        isLandscape,
        isPortrait: !isLandscape,
        isHDPI: typeof window !== 'undefined' && window.devicePixelRatio > 1,
        innerWidth: iw,
        innerHeight: ih,
        media: {}
    }

    // @ts-ignore
    for (const [k, [from, to]] of Object.entries(options.breakpoints)) {
        // It's a prefix breakpoint, no need to process
        if (from === true) continue
        const [firstLetter, secondLetter, ...restLetter] = k
        const isOrientedLandscape = LANDSCAPE === firstLetter
        const isOrientedPortrait = PORTRAIT === firstLetter
        const isOriented = isOrientedLandscape || isOrientedPortrait
        const key = isOriented
            ? `${firstLetter}${secondLetter.toUpperCase()}${restLetter.join('')}`
            : `${firstLetter.toUpperCase()}${secondLetter}${restLetter.join('')}`
        proplessValue[`is${key}`] =
            iw > from &&
            iw <= to &&
            (!isOriented || (isOrientedLandscape && isLandscape) || (isOrientedPortrait && !isLandscape))
        proplessValue.media[k] = `(min-width: ${from}px) and (max-width: ${to}px)`
    }

    cachedProplessValue[key] = proplessValue

    return proplessValue
}

/* eslint-disable no-continue */
export const calculateValue: TCalculateValue = function (defaultValue, breakpointValues = [], iw, ih) {
    if (defaultValue === undefined && !breakpointValues.length) {
        return calculateProplessValue(iw, ih)
    }
    const isLandscape = iw > ih
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
        if (iw >= bp[0] && iw <= bp[1]) return value
    }
    return defaultValue
}

export function useBreakpoint(defaultValue: any, breakpointValues: any[]): any
export function useBreakpoint(): { [key: string]: boolean }
export function useBreakpoint(defaultValue?, breakpointValues?) {
    const { innerWidth, innerHeight } = useContext(Context)
    return useMemo(() => calculateValue(defaultValue, breakpointValues, innerWidth, innerHeight), [
        innerWidth,
        innerHeight,
        defaultValue
    ])
}

export default useBreakpoint
