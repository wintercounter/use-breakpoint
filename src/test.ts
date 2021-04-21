import { calculateValue } from './useBreakpoint'

/**
 Cheat-sheet
 micro: [0, 375],
 mobile: [376, 639],
 tablet: [640, 1023],
 small: [1024, 1439],
 medium: [1440, 1919],
 large: [1920, 10000]
 */

const iter = ([toBe, defaultValue, breakpointValues, iw]) => {
    it(`should return ${toBe} if dv=${defaultValue} bp=${breakpointValues
        .map(([k, v]) => `${k}:${v}`)
        .join(';')} and iw=${iw}`, () => {
        expect(calculateValue(defaultValue, breakpointValues, iw, 0)).toBe(toBe)
    })
}

describe('useBreakpoint', () => {
    // toBe, defaultValue, breakpointValues, iw
    const testValues = [
        [300, 100, [['mobile', 300]], 400],
        [100, 100, [['mobile', 300]], 800],
        [300, 100, [['mobile+', 300]], 800],
        [
            400,
            100,
            [
                ['tablet', 400],
                ['mobile+', 300]
            ],
            800
        ]
    ]

    // @ts-ignore
    testValues.forEach(iter)

    it(`should work with single array value`, () => {
        expect(calculateValue(300, ['mobile+', 500], 400, 0)).toBe(500)
    })

    it(`should return 'is{Key}' properties if no props were given`, () => {
        // @ts-ignore
        expect(calculateValue(undefined, [], 500, 0).isMobile).toBe(true)
    })
})
