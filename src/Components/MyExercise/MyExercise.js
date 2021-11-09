import React, { useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import SearchForm from '../utils/SearchForm'
import CardExercises from './Components/CardExercises'

const MyExercise = () => {
    const [listExerciseNoDown, setListExerciseNoDown] = useState(false)
    const [listExerciseDown, setListExerciseDown] = useState(false)
    const [listTest, setListTest] = useState(false)
    return (
        <div>
            <Navbar/>
            <SideBar>
            <div className='container'>
                <div className="bg-greyColor m-5 w-auto h-auto lg:m-10">
                    <div className="w-screen">
                        <SearchForm/>

                    </div>
                    <div className="p-10 xs:p-O">
                        <div>
                            <div class="mb-2">
                                <button onClick={() => setListExerciseNoDown(!listExerciseNoDown)} className="px-5 py-3 rounded-xl text-sm font-medium text-baseColor bg-whiteColor outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 hover:border-indigo-800 hover:text-indigo-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">
                                    Ma liste d'exercice à faire
                                </button>
                                {listExerciseNoDown && 
                                    <div className="pl-2 flex flex-wrap ">
                                        <CardExercises/>
                                        <CardExercises/>
                                        <CardExercises/>
                                        <CardExercises/>
                                        <CardExercises/>
                                    </div>

                                }
                            </div> 
                            <div className="mb-2">
                                <button  onClick={()=> setListExerciseDown(!listExerciseDown)} className="px-5 py-3 rounded-xl text-sm font-medium text-baseColor bg-whiteColor outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 hover:border-indigo-800 hover:text-indigo-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">
                                    Ma liste d'exercice fini
                                </button>
                                {listExerciseDown && 
                                     <div className="pl-2 flex">
                                         <CardExercises/>

                                    </div>
                                }
                            </div> 
                            <div className="mb-2">
                                <button  onClick={()=> setListTest(!listTest)} className="px-5 py-3 rounded-xl text-sm font-medium text-baseColor bg-whiteColor outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 hover:border-indigo-800 hover:text-indigo-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">
                                    Ma liste de test
                                </button>
                                {listTest && 
                                     <div className="pl-2 flex">
                                         <CardExercises/>

                                    </div>
                                }
                            </div>   
                        </div>                           
                    </div>
                </div>
            </div>
            </SideBar>
        </div>
       
    )
}

export default MyExercise
