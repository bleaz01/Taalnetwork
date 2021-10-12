import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardPost from './CardPost'


import testImg from "../assets/workteam.png"

const Home = () => {
    return (
        <div className="">
            <Navbar/>
            <SideBar>
                <div className="flex justify-center mt-5">
                    <div className=" w-4/6 border-baseColor rounded-lg border-2 hover:bg-teal-100">
                        <div className="flex just w-full items-center p-2 pl-2 border-transparent">
                            <div className="w-6 flex flex-col items-center">
                                <div className="flex justify-between relative w-10 h-10 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                                    <img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg"/> 
                                </div>
                            </div>
                                <div class="w-auto h-auto">
                                    <div class="flex-1 h-full">
                                    <div class="flex items-center justify-center flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full">
                                        <div class="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <CardPost image={testImg}/>
               
            </SideBar>  
                  
        </div>
    )
}

export default Home
