import { options, LANDSCAPE, PORTRAIT, UP, DOWN } from '.'

const mediaQuery = (input, returnType: StringConstructor|ObjectConstructor = String) => {
    let generated = returnType === String ? '' : {}
    if (typeof input[0] === 'string') {
        input = [input]
    }

    for (const value of input) {
        const bp = options.breakpoints[value[0]]
        if (!bp) continue

        const key = value[0]
        const first = key[0]
        const last = key[key.length - 1]

        let query = `@media screen `

        if (last === UP) {
            query += `and (min-width: ${bp[0]}px) `
        } else if (last === DOWN) {
            query += `and (max-width: ${bp[1]}px) `
        } else {
            query += `and (min-width: ${bp[0]}px) and (max-width: ${bp[1]}px) `
        }

        if (first === PORTRAIT) {
            query += `and (orientation: portrait) `
        } else if (first === LANDSCAPE) {
            query += `and (orientation: landscape) `
        }

        if (returnType === String) {
            generated += query + `{ ${value[1]} }`
        } else {
            generated[query] = value[1]
        }
    }

    return generated
}

export default mediaQuery
