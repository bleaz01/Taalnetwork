import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardPost from './CardPost'


import testImg from "../assets/workteam.png"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SideBar>
                <CardPost image={}/>
            </SideBar>
           
        </div>
    )
}

export default Home
