import React from 'react'

import useBreakpoint from './useBreakpoint'
import Provider from './provider'

import './story.css'

const Component = () => {
    const value = useBreakpoint('none', [
        ['micro', 'is micro'],
        ['mobile', 'is mobile'],
        ['tablet', 'is tablet'],
        ['small', 'is small'],
        ['medium', 'is medium'],
        ['large', 'is large']
    ])

    return (
        <div className="wrapper">
            Example code
            <pre>
                    {`const value = useBreakpoint('none', [
    ['micro', 'is micro'],
    ['mobile', 'is mobile'],
    ['tablet', 'is tablet'],
    ['small', 'is small'],
    ['medium', 'is medium'],
    ['large', 'is large']
])`}
                </pre>
            <div>`{value}` is the current value. Resize to change.</div>
        </div>
    )
}

export default {
    title: 'useBreakpoint',
    component: Component,
    decorators: [fn => <Provider>{fn()}</Provider>]
}

export const Basic = () => <Component />;
