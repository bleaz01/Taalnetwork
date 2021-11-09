import React ,{ useState } from 'react'
import FormExercise from './FormExercise'

const CardExercises = () => {
    return (
        <div onClick={() => window.open("/pratis",'height=250,width=250')} className='flex-1 w-1/3 m-4 xs:w-full'>
            <div
            className="flex flex-col bg-whiteColor rounded p-4 items-center shadow-lg border-r-8 border-baseColor"
          >
            <h2 className="font-bold">Lorem Ipsum</h2>
            <p className="p-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              doloribus quia voluptates maxime totam illum iure, quis...
            </p>
            <div className="flex justify-between ">
              <div className="pill bg-gray-400 rounded-full text-xs px-4 py-1 mr-2">
                #Express
              </div>
              <div className="pill bg-gray-400 rounded-full text-xs px-4 py-1 mr-2">
                #TailwindCSS
              </div>
            </div>
          </div>

        </div>
        
    )
}

export default CardExercises
