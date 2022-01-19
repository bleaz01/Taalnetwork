import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { disconnect } from '../../../lib/socket-io';
import { useSelector } from 'react-redux';

const LiveHeader = ({ roomId }) => {
	const [ isMessenger, setIsMessenger ] = useState(false);
	const [ messageAlert, setMessageAlert ] = useState({});
	const userDisconected = useSelector((state) => state.meet.participants)
	let interval = null;

	console.log(userDisconected);
	const roomDisconnection = () => {

		disconnect(userDisconected)
		const siteUrl = (window.location = '/live');
		window.location.href = siteUrl;
	};

	return (
		<div className='bg-baseColor w-2/3 flex flex-col items-center mx-auto h-12 rounded-b-lg content-center'>
			<div className="flex">
				<div className=" mx-3">
					<FontAwesomeIcon className="icon" icon={faUserFriends} />
				</div>
				<div
					className="mx-3"
					onClick={() => {
						setIsMessenger(!isMessenger);
						setMessageAlert({});
					}}
				>
					<FontAwesomeIcon className="icon" icon={faCommentAlt} />
				</div>
				<div classname="cursor-pointer" onClick={() => roomDisconnection()}>
					<FontAwesomeIcon className="icon" icon={faSignOutAlt} />
				</div>
				{/* <div className="mx-3">{currentTime}</div> */}
				<div className="mx-3">
					<FontAwesomeIcon className="icon profile" icon={faUserCircle} />
				</div>
			</div>
			<span>id: {roomId}</span>
		</div>
	);
};

export default LiveHeader;
