import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import DashboardForms from '../utils/Forms/DashboardForms'

const index = () => {
    return (
        <div>
            <Navbar/>
            <SideBar>
                <DashboardForms/>
            </SideBar>
        </div>
    )
}

export default index
