import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardPost from './CardPost'


import testImg from "../assets/workteam.png"

const Home = () => {
    return (
        <div className="h-full">
            <Navbar/>
            <SideBar>
                <CardPost image={testImg}/>
            </SideBar>        
        </div>
    )
}

export default Home
