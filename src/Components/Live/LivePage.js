import React from 'react';
import { useEffect,  useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import io from 'socket.io-client';
// import MessageListReducer from "../../reducers/MessageListReducer";
// import Alert from "../";
import LiveInfo from './components/LiveInfo';

import axios from 'axios';
import { getIsRoomHost } from '../../lib/redux/actions/meet';

const LivePage = ({roomId, identity, }) => {
	let peer = null;

	const initialState = [];

	const history = useHistory();
	

	const [roomIdValue, setRoomIdvalue] = useState()
	const [nameValue, setNameValue] = useState()
	// const [ streamObj, setStreamObj ] = useState();
	// const [ isAudio, setIsAudio ] = useState(true);
	// const [ meetinfoPopup, setMeetinfoPopup ] = useState(initialState);
	const dispatch =  useDispatch()
	
	
	const search = useLocation().search

	useEffect(()=>{
		const isRoomHost = new URLSearchParams(search).get('host')
		if(isRoomHost){
			dispatch(getIsRoomHost(isRoomHost))
		}
	},[])
	

	return (
		<div className=" w-screen flex h-screen justify-between">
			<div className="flex flex-col justify-center mx-auto w-2/4">
				<LiveInfo 
				// nameValue={nameValue}
				// setNameValue={setNameValue}
				// roomIdvalue={roomIdValue}
				// setRoomIdvalue={setRoomIdvalue}
				/>
			</div>

		</div>
	);
};

export default LivePage;
