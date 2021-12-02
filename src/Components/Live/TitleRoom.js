import React from 'react'

const TitleRoom = ({isRoomHost}) => {

    console.log(isRoomHost)
    return (
        <div className=''>
            <p className='text-center' >
            {isRoomHost ? 'Host-room' :'Joint-room'}
            </p>
        </div>
    )
}

export default TitleRoom
