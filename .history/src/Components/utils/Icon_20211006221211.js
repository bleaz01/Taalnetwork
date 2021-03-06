import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Icon = ({name}) => {
    return (
       <FontAwesomeIcon icon={name}/>
    )
}

export default Icon
