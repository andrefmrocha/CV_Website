import React from 'react'
import posed from 'react-pose'

const Icon = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        margin: `17% 13% 0px 13%`,
        display: `inline-block`
    },
    hover: { scale: 1.4 },
    press: { scale: 1.2 }
});

export default Icon;