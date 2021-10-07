import React from 'react'
import bglogin from '../assets/taalTeacher.png'
const Login = () => {
    return (
        <div className="bg-secondeColor ">
        <div class="container  min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5 mx-auto">
        <div class="bg-baseTextColor text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
            <div class="md:flex w-full">
                <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                    <img src={bgLogin}/>
                </div>
                <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div class="text-center mb-10">
                        <h1 class="font-bold text-3xl text-gray-900">LOGING</h1>
                        <p>Enter your information to login</p>
                    </div>
                    <forms>
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">First name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-2/3 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                                </div>
                            </div>
                        </div>
                    </forms>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login
