import React,{useEffect} from 'react'
import LiveFooter from './components/LiveFooter'
import LiveHeader from './components/LiveHeader'
import LiveMessenger from './components/LiveMessenger'
import VideoPlayer from './components/VideoPlayer'
import * as webRTCHandler from '../../lib/webRTCHandler';
import { useSelector, useDispatch } from 'react-redux'
import { ShowOverlay } from '../../lib/redux/actions/meet';



const LiveRoom = () => {
    const {isRoomHost, identity,roomId , showOverlay, participants} = useSelector(state => state.meet)
    const dispatch = useDispatch()
    console.log('liveRoom');
    const data = useSelector((state) => state.meet);
    console.log(data,'meet =>liveRoom')

    useEffect(() => {


		webRTCHandler.getLocalPreviewAndinitRoomConnection(
			isRoomHost,
			identity,
			roomId,
		);
        
	}, []);
    // useEffect(()=>{
    //     dispatch(ShowOverlay(false))
    //   },[])


    return (
        <>
        {
            !showOverlay 
            ?
            (
            <div className="flex w-screen h-screen">
                <div className="flex flex-col h-screen w-3/4">
                    <div className=''>
                        <LiveHeader roomId={roomId}/>
                    </div>
                    <div id='live-video' className="flex bg-redColor flex-wrap border-greenColor">
                        {/* <div id='live-video'></div>
                        <div id='live-video'></div>
                        <div id='live-video'></div> */}
                    </div>
                    <div className="mt-auto">
                        <LiveFooter/>
                    </div>
                </div>
                <div className="w-1/4">
                    <LiveMessenger/>
                </div>
            </div>
             )
            :
            (
                <div className='h-screen w-screen absolute left-0 bg-baseColor bg-opacity-90'>
                loading
                </div>
            )
        }
       
           
        </>

    )
}

export default LiveRoom