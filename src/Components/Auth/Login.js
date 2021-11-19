import React,{useState} from 'react'
import bgLogin from '../assets/taalTeacher.png'
import {useDispatch} from "react-redux"
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import RequestAPI, { RequestAPIAuth } from "../../lib/axios";
import axios from "axios";
import img from "../assets/actu.png"



const Login = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm();
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const history = useHistory()
    const error = true

   

    const onSubmit = (data) =>  {
      

        console.log(data)
         axios({
            method:'post',
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials:true,
                data:{
                    ...data
                }
            
          }).then((res)=>{
            if(res.data?.error) {
                    setEmailError(res.data?.error.email)
                    setPasswordError(res.data?.error.password)
                }else{
                    history.push('/home')
                }
          })
        
     }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input {...register('email')} type="text" class="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                                </div>
                                {emailError ? <span className='text-redColor'>{emailError}</span> : null}

                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-2/3 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Password</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="password" {...register('password')}  class="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="***********"/>
                                </div>
                                {passwordError ? <span className='text-redColor'>{passwordError}</span> : null}

                                <div className="pt-5 flex justify-end">
                                    <button type="submit" class="p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-md rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Send</button>
                                </div>

                                <div className="text-center">
                                    <a href="./register">register</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login
