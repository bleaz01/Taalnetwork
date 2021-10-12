import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import SearchForm from '../utils/SearchForm'

const Conjugation = () => {
    return (
        <div>
            <Navbar/>
            <SideBar>
                <div className="flex-col">
                    <div>
                        <SearchForm/>
                    </div>
                    <div className="container flex">
                            <h3 className="text-center">
                                Le verbe
                            </h3>
                        <div class="flex-1 ...">

                        </div>

                    </div>
                </div>
            </SideBar>
        </div>
    )
}

export default Conjugation
