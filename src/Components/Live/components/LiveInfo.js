import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTimes, faUser, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import TitleRoom from '../TitleRoom';
import { getIsRoomHost, getRoomId, handleAudio, saveIndentity } from '../../../lib/redux/actions/meet';
import ErrorMessage from './ErrorMessage';
import { useHistory } from 'react-router';
import axios from 'axios';
import { connectWithSocketIoServer } from '../../../lib/socket-io';

const LiveInfo = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ onlyAudio, setOnlyAudio ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ nameValue, setNameValue ] = useState();
	const [ roomId, setRoomId ] = useState();
	// const { roomIdValue, setMeetInfoPopup, setRoomIdValue } = props;
	const isRoomHost = useSelector((state) => state.meet.isRoomHost);
	const data = useSelector((state) => state.meet);

	console.log(data,'meet => liveinfo')

	const getRoomExists = async (roomId) => {
		// console.log(room)
		const responce = await axios.get(`http://localhost:5002/live/api/room/${roomId}`)
		
		return responce.data
		

	};
	const handleJoinRoom = async () => {
		if (isRoomHost) {
			createRoom();
		} else {
			await jointRoom();
		}
	};

	const createRoom = () => {
		dispatch(saveIndentity(nameValue));
		history.push('/room');
	};
	const jointRoom = async () => {
		const responseMessage = await getRoomExists(roomId);

		const { roomExist } = responseMessage;
		console.log(responseMessage);
		console.log(roomId)
		if (roomExist) {
			dispatch(getRoomId(roomId));
			dispatch(saveIndentity(nameValue));
			history.push('/room');
		} else {
			setErrorMessage('Room not found. Check your RoomId');
		}
	};
	useEffect(
		() => {
			connectWithSocketIoServer();
			console.log('liveInfo');
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			dispatch(handleAudio(onlyAudio));
		},
		[ onlyAudio ]
	);

	useEffect(() => {
		dispatch(getIsRoomHost(false));

	}, []);
	console.log(roomId,'rooomid')
	return (
		<div className="flex flex-col my-auto items-center w-full bg-greyColor rounded-lg p-10 ">
			<TitleRoom isRoomHost={isRoomHost} />
			<div className="flex w-3/4 flex-col p-3 bg-baseColor my-5 rounded-lg">
				<input
					name="name"
					className="w-full mb-3 p-2 rounded-lg"
					placeholder="name"
					onChange={(e) => setNameValue(e.target.value)}
				/>

				{!isRoomHost && (
					<input
						name="room-id"
						className="w-full  p-2 rounded-lg"
						placeholder="room-id"
						onChange={(e) => setRoomId(e.target.value)}
					/>
				)}
			</div>
			<label class="inline-flex items-center mt-3">
				<input
					onClick={() => setOnlyAudio(!onlyAudio)}
					type="checkbox"
					class="form-checkbox h-5 w-5 text-baseColor"
				/>
				<span class="ml-2 text-gray-700">Only audio</span>
			</label>
			<ErrorMessage message={errorMessage} />
			<div className="flex mt-5 w-full justify-end">
				{isRoomHost ? (
					<button
						onClick={() => createRoom()}
						className="w-1/4 bg-baseColor text-whiteColor ml-2 rounded-lg "
					>
						Host
					</button>
				) : (
					<button
						onClick={() => jointRoom()}
						className="w-1/4 bg-baseColor  text-whiteColor  ml-2 rounded-lg "
					>
						Join
					</button>
				)}
				<button
					onClick={() => history.push('/live')}
					className="w-1/4 bg-whiteColor border-2 text-baseColor border-baseColor ml-2 rounded-lg"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default LiveInfo;
