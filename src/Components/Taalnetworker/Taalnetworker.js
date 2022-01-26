import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import SearchForm from '../utils/SearchForm';
import UserCard from './UserCard';

const Taalnetworker = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/user')
        // axios.get(`${process.env.REACT_APP_API_URL}user`)
        .then((res)=>{
        setData(res.data)
        console.log(res)
        })
    }, [])
    console.log(data,'klkl')
  return (
  <div>
        <Navbar/>
        <SideBar>
            <div>
                <div className="flex justify-between">
                    <p>Taalnetworker</p>
                    <SearchForm dataSearch={data}/>
                </div>
                <div className=' flex flex-wrap'>
                    {
                        data && data.map(user =>{
                            return(
                                <UserCard user={user}/>
                            )
                        })
                    }

                </div>
            </div>
        </SideBar>

  </div>
  )
};


export default Taalnetworker