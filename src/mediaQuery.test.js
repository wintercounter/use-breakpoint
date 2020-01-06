import { mediaQuery, breakpoints } from '.'


describe('mediaQuery', () => {
    it(`should return a range for [['mobile', 'content']]`, () => {
        expect(mediaQuery([['mobile', 'content']]))
        .toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}) and (max-width: ${breakpoints.mobile[1]}) { content }`
        )
    })

    it(`should return a range for ['mobile', 'content']`, () => {
        expect(mediaQuery(['mobile', 'content']))
        .toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}) and (max-width: ${breakpoints.mobile[1]}) { content }`
        )
    })

    it(`should return min-width for ['mobile-', 'content']`, () => {
        expect(mediaQuery(['mobile-', 'content']))
        .toBe(
            `@media screen and (max-width: ${breakpoints.mobile[1]}) { content }`
        )
    })

    it(`should return max-width for ['mobile+', 'content']`, () => {
        expect(mediaQuery(['mobile+', 'content']))
        .toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}) { content }`
        )
    })

    it(`should return max-width with orientation for ['|mobile+', 'content']`, () => {
        expect(mediaQuery(['|mobile+', 'content']))
        .toBe(
            `@media screen and (min-width: ${breakpoints.mobile[0]}) and (orientation: portrait) { content }`
        )
    })

    it(`should return min-width with orientation for ['-mobile-', 'content']`, () => {
        expect(mediaQuery(['-mobile-', 'content']))
        .toBe(
            `@media screen and (max-width: ${breakpoints.mobile[1]}) and (orientation: landscape) { content }`
        )
    })
})
