# Intro

React `useBreakpoint` hook to have different values for a variable
based on a breakpoints.

# Demo
https://wintercounter.github.io/use-breakpoint

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

# FAQ

## Which rule is being prioritized

The hook uses _eager_ evaluation, so the first truthy breakpoint value
gets returned.
