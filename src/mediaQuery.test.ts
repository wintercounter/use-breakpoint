import { mediaQuery, breakpoints } from '.'

describe('mediaQuery', () => {
    it(`should return a range for [['mobile', 'content']]`, () => {
        expect(mediaQuery([['mobile', 'content']])).toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}px) and (max-width: ${breakpoints.mobile[1]}px) { content }`
        )
    })

    it(`should return a range for ['mobile', 'content']`, () => {
        expect(mediaQuery(['mobile', 'content'])).toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}px) and (max-width: ${breakpoints.mobile[1]}px) { content }`
        )
    })

    it(`should return min-width for ['mobile-', 'content']`, () => {
        expect(mediaQuery(['mobile-', 'content'])).toBe(
            `@media screen and (max-width: ${breakpoints.mobile[1]}px) { content }`
        )
    })

    it(`should return max-width for ['mobile+', 'content']`, () => {
        expect(mediaQuery(['mobile+', 'content'])).toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}px) { content }`
        )
    })

    it(`should return max-width with orientation for ['|mobile+', 'content']`, () => {
        expect(mediaQuery(['|mobile+', 'content'])).toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}px) and (orientation: portrait) { content }`
        )
    })

    it(`should return min-width with orientation for ['-mobile-', 'content']`, () => {
        expect(mediaQuery(['-mobile-', 'content'])).toBe(
            `@media screen and (max-width: ${breakpoints.mobile[1]}px) and (orientation: landscape) { content }`
        )
    })

    it(`should return multiple media queries [['mobile', 'content'], ['tablet', 'content2']]`, () => {
        expect(
            mediaQuery([
                ['mobile', 'content'],
                ['tablet', 'content2']
            ])
        ).toBe(
            `@media screen and (min-width: 376px) and (max-width: 639px) { content }@media screen and (min-width: 640px) and (max-width: 1023px) { content2 }`
        )
    })

    it(`should return object [['mobile', 'content'], ['tablet', 'content2']]`, () => {
        expect(
            mediaQuery(
                [
                    ['mobile', { obj: 'foo' }],
                    ['tablet', { obj: 'bar' }]
                ],
                Object
            )
        ).toStrictEqual({
            '@media screen and (min-width: 376px) and (max-width: 639px) ': { obj: 'foo' },
            '@media screen and (min-width: 640px) and (max-width: 1023px) ': { obj: 'bar' }
        })
    })

    it(`should handle shorthands`, () => {
        expect(mediaQuery([['dark', 'content']])).toStrictEqual(
            '@media screen and (prefers-color-scheme: dark){ content }'
        )
    })

    it(`should handle object shorthands`, () => {
        expect(mediaQuery([['dark', { obj: 'foo' }]], Object)).toStrictEqual({
            '@media screen and (prefers-color-scheme: dark)': { obj: 'foo' }
        })
    })

    it(`should fallback`, () => {
        expect(mediaQuery([['foo', 'content']])).toStrictEqual(`foo{ content }`)
    })

    it(`should support dark prefix`, () => {
        expect(mediaQuery([[')mobile', 'content']])).toStrictEqual(
            `@media screen and (min-width: 376px) and (max-width: 639px) and (prefers-color-scheme: dark) { content }`
        )
    })

    it(`should support only prefix mode`, () => {
        expect(mediaQuery([[')', 'content']])).toStrictEqual(
            `@media screen and (prefers-color-scheme: dark) { content }`
        )
    })
})
