import useBreakpoint from './useBreakpoint'
import useResize from './useResize'
import mediaQuery from './mediaQuery'

export * from './provider'

export const UP = '+'
export const DOWN = '-'
export const LANDSCAPE = '-'
export const PORTRAIT = '|'
export const LIGHT = '('
export const DARK = ')'

interface IOptions {
    breakpoints: {
        [key: string]: number[]
    },
    shorthands?: {
        [key:string]: string
    }
}

export let options

export const setup = function(opts: IOptions) {
    Object.entries(opts.breakpoints).forEach(([name, [from, to]]) =>
        [['', [from, to]], [UP, [from, 10000]], [DOWN, [0, to]]].forEach(([symbol, fromTo]) =>
            ['', LANDSCAPE, PORTRAIT, LIGHT, DARK].forEach(prefix => {
                // eslint-disable-next-line
                opts.breakpoints[`${prefix}${name}${symbol}`] = fromTo as [number, number]
            })
        )
    )
    // Only-prefix support
    Object.assign(opts.breakpoints, {
        [LANDSCAPE]: [true], [PORTRAIT]: [true], [LIGHT]: [true], [DARK]: [true]
    })

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
    l: [1920, 10000],
    // Multi range
    device: [0, 1023],
    d: [0, 1023],
    smallDevice: [0, 639],
    sd: [0, 639]
}
const shorthands = {
    dark: '@media screen and (prefers-color-scheme: dark)',
    light: '@media screen and (prefers-color-scheme: light)',
    hdpi: '@media screen and (min-resolution: 192dpi)'
}

setup({ breakpoints, shorthands })

export default useBreakpoint
export { useResize, mediaQuery }
