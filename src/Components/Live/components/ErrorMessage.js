import React from 'react'

const ErrorMessage = ({message}) => {
    return (
        <div>
            {message && <span className="text-redColor">{message}</span>}
        </div>
    )
}

export default ErrorMessage
