import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
const Live = () => {
    return (
        <div>
            <Navbar/>
            <SideBar>
                <div class="w-96 h-64 m-12 bg-pink-600 relative group">
                    <span class="absolute -top-2 left-0 border-0.25 border-pink-600 transition-transform transform translate-y-2 ease duration-100"></span>
                        <div class="relative z-10 bg-blue-700 w-full h-full transition-transform transform ease duration-100"></div>
                    <span class="absolute bottom-0 -right-2 border-0.25 border-pink-600 transition-transform transform -translate-x-2 rotate-180 ease duration-100"></span>
                </div>

            </SideBar>
        </div>
    )
}

export default Live
