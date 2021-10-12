import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import SearchForm from '../utils/SearchForm'

const Conjugation = () => {
    return (
        <div>
            <Navbar/>
            <SideBar>
                <div>
                    <SearchForm/>
                </div>
            </SideBar>
        </div>
    )
}

export default Conjugation
