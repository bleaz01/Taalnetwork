import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardVerb from '../utils/CardVerb/CardVerb'
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
                        <hr className="my-6 mx-6"/>
                        <h3 className="flex justify-center py-3">
                            Le verbe
                        </h3>
                        <div class="grid lg:grid-rows-2 grid-rows-3  grid-flow-col gap-4 py-10">

                            <CardVerb/>
                            <CardVerb/>
                            <CardVerb/>
                            <CardVerb/>
                            <CardVerb/>
                            <CardVerb/>
                                
                        </div>

                    </div>
                </div>
            </SideBar>
        </div>
    )
}

export default Conjugation
