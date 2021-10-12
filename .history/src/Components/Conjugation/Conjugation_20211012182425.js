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
                    <div className="container flex flex-col">
                        <hr/>
                        <h3 className="flex justify-center py-3">
                            Le verbe
                        </h3>
                        <div class="flex-1 ...">
                                salut
                        </div>

                    </div>
                </div>
            </SideBar>
        </div>
    )
}

export default Conjugation
