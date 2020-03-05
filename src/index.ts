import useBreakpoint from './useBreakpoint'
import useResize from './useResize'
import mediaQuery from './mediaQuery'

export const UP = '+'
export const DOWN = '-'
export const LANDSCAPE = '-'
export const PORTRAIT = '|'

interface IOptions {
    breakpoints: {
        [key: string]: number[]
    }
}

export let options

export const setup = function(opts: IOptions) {
    Object.entries(opts.breakpoints).forEach(([name, [from, to]]) =>
        [['', [from, to]], [UP, [from, 10000]], [DOWN, [0, to]]].forEach(([symbol, fromTo]) =>
            ['', LANDSCAPE, PORTRAIT].forEach(orientation => {
                // eslint-disable-next-line
                opts.breakpoints[`${orientation}${name}${symbol}`] = fromTo as [number, number]
            })
        )
    )

    options = opts
}

export const breakpoints = {
    micro: [0, 375],
    mi: [0, 375],
    mobile: [376, 639],
    m: [376, 639],
    tablet: [640, 1023],
    t: [640, 1023],
    small: [1024, 1439],
    s: [1024, 1439],
    medium: [1440, 1919],
    med: [1440, 1919],
    large: [1920, 10000],
    l: [1920, 10000]
}

setup({ breakpoints })

export default useBreakpoint
export { useResize, mediaQuery }