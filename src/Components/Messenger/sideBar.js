import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RoomDesign from './RoomDesign';
import { UserContext } from '../../lib/context';
import Pusher from 'pusher-js';
import FriendsList from './FriendsList';
import SearchFriendList from './SearchFriendList';

const SideBar = (listRooms) => {
	const [ openCreategroup, setopenCreategroup ] = useState(false);
	const [ openFriendList, setOpenFriendList ] = useState(false);

	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:4000/api/user')
		// axios.get(`${process.env.REACT_APP_API_URL}user`)
		.then((res)=>{
		setData(res.data)
		})
	}, [])

	return (
		<div className="bg-secondeColor flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
			<div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-baseColor rounded-l-2xl">
				<div
				
					className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full relative"
				>
					<i 	onClick={() => setOpenFriendList(!openFriendList)} class="fas fa-comment-alt" />
					{openFriendList ? (
						<SearchFriendList data={data}/>
					) : null}
				</div>

				<ul className="flex flex-col space-y-2 mt-12">
					<li>
						<a href="/home" className="flex items-center">
							<span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
								<i class="fas fa-home" />
							</span>
						</a>
					</li>

					<li>
						<a href="#" className="flex items-center">
							<span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
								<i class="fas fa-user-friends" />
							</span>
						</a>
					</li>
				</ul>
				<button className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
					{/* <svg className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg> */}
				</button>
			</div>
			<div className="flex bg-greyColor flex-col w-full h-full pl-4 pr-4 py-4 -mr-4 rounded-r-2xl">
				<div className="flex flex-row items-center">
					<div className="flex flex-row items-center">
						<div className="text-xl font-semibold">Messages</div>
						<div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
							5
						</div>
					</div>
					<div className="ml-auto">
						<button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
							<svg
								className="w-4 h-4 stroke-current"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="mt-5">
					<ul className="flex flex-row items-center justify-between">
						<li>
							<div
								onClick={() => setopenCreategroup(!openCreategroup)}
								className="cursor-pointer flex items-center pb-3 text-xs font-semibold relative text-indigo-800"
							>
								new groupe
							</div>
						</li>
					</ul>
				</div>
				{openCreategroup
           ? 
           <>

           <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">Followers</div>
          </div>
          
          {
      
                <FriendsList/>
            }
          </>
          :
          <>
          <div className="mt-5">
            <div className="text-xs text-gray-400 font-semibold uppercase">Team</div>
          </div>
          {listRooms?.listRooms.map(room =>{
            return (
              <RoomDesign data={room} key={room._id}/>
              
            )
          })}
          </>
          }
			</div>
		</div>
	);
};

export default SideBar;
