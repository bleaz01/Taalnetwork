import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { uploadBio } from '../../lib/redux/actions/user';


const BioUpdateForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onSubmit = data =>{
        console.log(data)
        dispatch(uploadBio(data.bio, user._id))
        window.location = '/account'


    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}class="w-full px-3 flex flex-col justify-center">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Modify
            </label>
            <textarea {...register('bio')}class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            <button type="submit" class="my-5 w-1/2 flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                Save
            </button>
        </form>
     
    )
}

export default BioUpdateForm
