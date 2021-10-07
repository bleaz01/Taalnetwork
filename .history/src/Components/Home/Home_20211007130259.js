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
                <div class="bg-local">
                    <CardPost image={testImg}/>
                </div>
            </SideBar>        
        </div>
    )
}

export default Home
