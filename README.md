# Intro

React `useBreakpoint` hook to have different values for a variable
based on a breakpoints.

# Demo
https://wintercounter.github.io/use-breakpoint

# Install

```bash
npm i @w11r/use-breakpoint
```

# Setup

By default you don't need to do anything. The following default values
are being used.

```js
const breakpoints = {
    micro: [0, 375],
    mobile: [376, 639],
    tablet: [640, 1023],
    small: [1024, 1439],
    medium: [1440, 1919],
    large: [1920, 10000]
}
```

## Override default settings

```js
import { setup, breakpoints } from '@w11r/use-breakpoint'

setup({
    breakpoints: {
        // Extend default values
        ...breakpoints,
        alienDevice: [342, 43534] // from, to
    }
})
```

# Usage

## With passing values

```js
useBreakpoint(defaultValue, breakpointValues)

// breakpointValues: array of breakpoint based values
[
  ['mobile', 300],
  ['tablet', 400]
]

// In case you have a single breakpoint value, `['mobile', 300]`
is enough instead of `[['mobile', 300]]`
```

## Without passing values

In case you dont specify any value to the hook, it'll return a generated
object including boolean values for each breakpoint keys that's being
defined in options.

It'll return the following object with the basic setup.

```
{
      isLandscape: false,
      isPortrait: true,
      isHDPI: false,
      isMicro: false,
      isMobile: true,
      isTablet: false,
      isSmall: false,
      isMedium: false,
      isLarge: false,
      'is-Micro': false,
      'is|Micro': false,
      'isMicro+': true,
      'is-Micro+': true,
      'is|Micro+': true,
      'isMicro-': false,
      'is-Micro-': false,
      'is|Micro-': false,
      'is-Mobile': true,
      'is|Mobile': true,
      'isMobile+': true,
      'is-Mobile+': true,
      'is|Mobile+': true,
      'isMobile-': true,
      'is-Mobile-': true,
      'is|Mobile-': true,
      'is-Tablet': false,
      'is|Tablet': false,
      'isTablet+': false,
      'is-Tablet+': false,
      'is|Tablet+': false,
      'isTablet-': true,
      'is-Tablet-': true,
      'is|Tablet-': true,
      'is-Small': false,
      'is|Small': false,
      'isSmall+': false,
      'is-Small+': false,
      'is|Small+': false,
      'isSmall-': true,
      'is-Small-': true,
      'is|Small-': true,
      'is-Medium': false,
      'is|Medium': false,
      'isMedium+': false,
      'is-Medium+': false,
      'is|Medium+': false,
      'isMedium-': true,
      'is-Medium-': true,
      'is|Medium-': true,
      'is-Large': false,
      'is|Large': false,
      'isLarge+': false,
      'is-Large+': false,
      'is|Large+': false,
      'isLarge-': true,
      'is-Large-': true,
      'is|Large-': true
    }
```

Usage
```js
const { isMobile } = useBreakpoint()

// The above is basically a replacement for
const isMobile = useBreakpoint(false, ['mobile', true])
```

> You can also access the values with suffix and prefix but you need
> to rename the variables because it contains invalid character:
> `const { 'isMobile+': isMobile } = useBreakpoint()`

Component example

```jsx
import useBreakpoint from '@w11r/use-breakpoint'

const MyCmp = () => {
    const columns = useBreakpoint([1,2], ['mobile', [2,1]])

    return <Grid cols={columns} />
}

// Or using inline
const MyCmp = () => {
    return <Grid cols={useBreakpoint([1,2], ['mobile', [2,1]])} />
}
```

> _Rules-of-Hooks_ are still true in this case as well. Make sure
> your component will __ALWAYS__ run it without any condition!

## Modifiers

All breakpoint names coming with modifiers included.

### Orientation prefix

- `` (none): all
- `-`: Landscape
- `|`: Portrait

### Range suffix

You can also control your value to behave as `and up` and `and down`.

- `` (none): all
- `+`: `and up`
- `-`: `and down`

### Examples

- `['|mobile', 300]`: on mobile, on portrait
- `['|mobile+', 300]`: on mobile and up, on portrait
- `['mobile+', 300]`: on mobile and up, both portrait and landscape
- `['mobile', 300]`: on mobile, both portrait and landscape
- `['tablet-', 300]`: on tablet and below, both portrait and landscape
- `['mobile-', 300]`: on mobile and down, both portrait and landscape

## Generate Media Query strings using the same logic

It is useful when you just need simple CSS. For example with `styled-components`:

```js
import styled from 'styled-components'
import { mediaQuery } from '@w11r/use-breakpoint'

const mediaQueryString = mediaQuery(
    ['mobile-', `width: 100%;`]
)

const Box = styled.div`
    ${mediaQuery(
        ['mobile-', `width: 100%;`]
    )}
`

// You can still use multiple queries at once just like with the hook:
mediaQuery([['mobile-', `width: 100%`], ['medium+', `width: 50%`]])
```

# FAQ

## Is there any best practice suggestion?

Yes! Use as less hooks as possible. It's always faster to have a single
`isMobile` variable and have simple conditions based on it.

## Why not using an `Object`? Why the `Array` structure?

Object's cannot guarantee the order of the defined keys. It is crucial
to check for values in the correct order because `useBreakpoint` uses
eager evaluation and `mediaQuery` must maintain the defined order of
the generated Media Queries.

## Which rule is being prioritized

The hook uses _eager_ evaluation, so the first truthy breakpoint value
gets returned.
