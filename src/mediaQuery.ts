import { options, LANDSCAPE, PORTRAIT, UP, DOWN, LIGHT, DARK } from '.'

const mediaQuery = (input, returnType: StringConstructor | ObjectConstructor = String) => {
    let generated = returnType === String ? '' : {}
    if (typeof input[0] === 'string') {
        input = [input]
    }

    for (const value of input) {
        const bp = options.breakpoints[value[0]]
        const shorthand = options?.shorthands?.[value[0]]

        // Handle shorthand
        if (shorthand) {
            if (returnType === String) {
                generated += shorthand + `{ ${value[1]} }`
            } else {
                generated[shorthand] = value[1]
            }
            continue
        }
        // No such breakpoint, simply add
        else if (!bp) {
            if (returnType === String) {
                generated += value[0] + `{ ${value[1]} }`
            } else {
                generated[value[0]] = value[1]
            }
            continue
        }

        const key = value[0]
        const first = key[0]
        const last = key[key.length - 1]

        let query = `@media screen `

        if (last === UP) {
            query += `and (min-width: ${bp[0]}px) `
        } else if (last === DOWN) {
            query += `and (max-width: ${bp[1]}px) `
        } else if (bp[0] !== true) {
            query += `and (min-width: ${bp[0]}px) and (max-width: ${bp[1]}px) `
        }

        if (first === PORTRAIT) {
            query += `and (orientation: portrait) `
        } else if (first === LANDSCAPE) {
            query += `and (orientation: landscape) `
        } else if (first === DARK) {
            query += `and (prefers-color-scheme: dark) `
        } else if (first === LIGHT) {
            query += `and (prefers-color-scheme: light) `
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
