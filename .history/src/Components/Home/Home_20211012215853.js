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
                    <div className="cursor-pointer w-4/6 border-baseColor rounded-lg border-2 hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent">
                            <div className="w-6 flex flex-col items-center">
                                <div className="flex relative w-10 h-10 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                                    <img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg"/> 
                                </div>
                            </div>
                            <div className="w-full items-center flex">
                                <div className="mx-2 -mt-1  ">Jack jhon
                                    <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CEO &amp; managin director</div>
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
