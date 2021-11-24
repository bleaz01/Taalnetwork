import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import CardVerb from '../utils/CardVerb/CardVerb'
import SearchForm from '../utils/SearchForm'
const Conjugation = () => {

    const [data, setData] = useState([])
    const [itemVerb, setItemverb] = useState([])

    let name = useLocation();
    let slug = name.pathname.split("/")[2]
    console.log(slug,'jjj')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}verb`)
        .then((res)=>{
        setData(res.data)
        })

    }, [])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}verb/${slug}`)
        .then((res)=>{
        setItemverb(res.data)
        })

    }, [slug])
    console.log(itemVerb,'data')
    return (
        <div>
            <Navbar/>
            <SideBar>
                <div className="flex-col">
                    <div>
                        <SearchForm dataSearch={data}/>
                    </div>
                    <div className="container flex flex-col">
                        <hr className="my-6 mx-6"/>
                        <h3 className="flex justify-center py-3">
                            Le verbe
                        </h3>
                        <div class="grid lg:grid-rows-2 grid-rows-3 grid-flow-col gap-4 py-10">
                            {
                                itemVerb && Object.values(itemVerb[0]).map((item) =>{
                                    console.log(item,'vr')
                                    return(
                                        <CardVerb title={item}/>

                                    )
                                })
                            }
                            
                                
                        </div>

                    </div>
                </div>
            </SideBar>
        </div>
    )
}

export default Conjugation
