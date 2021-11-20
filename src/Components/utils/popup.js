import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const popup = (msg) => {
    return (
        <div>
            <Popup trigger={} position={['bottom center','bottom right',"bottom left"]} closeOnDocumentClick>
                <div>{msg}</div>
            </Popup>
        </div>
    )
}

export default popup
