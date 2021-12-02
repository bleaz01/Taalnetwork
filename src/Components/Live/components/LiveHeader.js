import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LiveHeader = ({ roomId }) => {
	const [ isMessenger, setIsMessenger ] = useState(false);
	const [ messageAlert, setMessageAlert ] = useState({});

	let interval = null;

	console.log(roomId);
	const roomDisconnection = () => {
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
