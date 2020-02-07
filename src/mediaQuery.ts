import { options, LANDSCAPE, PORTRAIT, UP, DOWN } from '.'

const mediaQuery = input => {
    let generated = ''
    if (typeof input[0] === 'string') {
        input = [input]
    }

    for (const value of input) {
        const bp = options.breakpoints[value[0]]
        if (!bp) continue

        const key = value[0]
        const first = key[0]
        const last = key[key.length - 1]

        generated += `@media screen `

        if (last === UP) {
            generated += `and (min-width: ${bp[0]}px) `
        }
        else if (last === DOWN) {
            generated += `and (max-width: ${bp[1]}px) `
        }
        else {
            generated += `and (min-width: ${bp[0]}px) and (max-width: ${bp[1]}px) `
        }

        if (first === PORTRAIT) {
            generated += `and (orientation: portrait) `
        }
        else if (first === LANDSCAPE) {
            generated += `and (orientation: landscape) `
        }

        generated += `{ ${value[1]} }`
    }

    return generated
}

export default mediaQuery