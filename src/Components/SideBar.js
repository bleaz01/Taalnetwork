import React from 'react'
import {useHistory, useLocation}from 'react-router-dom'

const SideBar = (props) => {

    const history = useHistory()
    const location = useLocation()

    return (
                <div className="flex flex-no-wrap h-screen ">
                    {/* Sidebar starts */}
                    <div className="w-64 absolute sm:relative bg-baseColor shadow md:h-full flex-col justify-between hidden sm:flex">
                        <div className="px-8">
                            <ul className="mt-12">
                                <li className="flex w-full justify-between text-baseTextColor hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                        <span  onClick={() => history.push('/myexercise')} className="text-sm ml-2">
                                            Mes exercices 
                                        </span>
                                    </div>
                                    <div className="py-1 px-3 bg-gray-700 rounded text-gray-100 flex items-center justify-center text-xs">5</div>
                                </li>
                                <li className="flex w-full justify-between text-baseTextColor hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                        </svg>
                                        <span className="text-sm ml-2">
                                            Mes Posts
                                        </span>
                                    </div>
                                    <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">8</div>
                                </li>
                                <li className="flex w-full justify-between text-baseTextColor hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div  onClick={() => history.push('/users')} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                            <circle cx={12} cy={12} r={9} />
                                        </svg>
                                        <span className="text-sm ml-2">
                                            Taalnetworker
                                        </span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-baseTextColor hover:text-gray-500 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                        <span onClick={() => history.push("/dashboard/id")} className="text-sm ml-2">
                                            Dashboard
                                        </span>
                                    </div>
                                    <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">25</div>
                                </li>
                               
                                <li className="flex w-full justify-between text-baseTextColor hover:text-gray-500 cursor-pointer items-center">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                        <span className="text-sm  ml-2">Settings</span>
                                    </div>
                                </li>
                            </ul>
                            {/* <div className="flex justify-center mt-48 mb-4 w-full">
                                <div className="relative ">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className=" bg-gray-700 focus:outline-none rounded w-full text-sm text-white text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                   
                    {/* Sidebar ends */}
                    <div className="h-auto mx-2 py-2 h-64 w-10/12 px-6">
                        <div className="overflow-y-auto w-full h-full border-2 border-gray-300">{
                            props.children
                        }</div>
                    </div>
                </div>
            
        
    )
}

export default SideBar
