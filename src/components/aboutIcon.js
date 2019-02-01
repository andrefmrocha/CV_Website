import React from 'react'

const aboutIcon = ({Link, children, Icon}) => (
    <div>
        <a target="_blank" rel="noopener noreferrer" href={Link} >{Icon}{children}</a>
    </div>
)

export default aboutIcon;