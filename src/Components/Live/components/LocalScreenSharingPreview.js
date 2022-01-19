import React, { useEffect, useRef } from 'react'

const LocalScreenSharingPreview = ({stream}) => {
    const localPreviewRef = useRef()

    useEffect(()=>{
        const video = localPreviewRef.current

        video.srcObject = stream

        video.onloandedmetadata = ()=>{
            video.play()
        }

    },[stream])
    return (
        <div className=' absolute top-0 left-0 w-screen h-screen'>
            <video muted autoPlay ref={localPreviewRef}></video>
        </div>
    )
}

export default LocalScreenSharingPreview
