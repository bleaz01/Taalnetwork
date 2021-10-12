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
            <div class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                    <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full "><img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg"> </div>
                    </div>
                    <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1  ">Jack jhon
                            <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">CEO &amp; managin director</div>
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
