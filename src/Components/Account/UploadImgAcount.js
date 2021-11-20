import axios from 'axios';
import React from 'react'
import FileBase64 from 'react-file-base64'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { uploadPicture } from '../../lib/redux/actions/user';
const UploadImgAcount = (user) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch()

    const onSubmit =(data)=>{
        if (data.img[0]){
            const reader = new FileReader();
            reader.readAsDataURL(data.img[0]);
            reader.onloadend = () => {
                uploadImage(reader.result, data.message);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                // setErrMsg('something went wrong!');
            };
        }
    }
    const uploadImage = async (base64EncodedImage) => {
        
        dispatch(uploadPicture(base64EncodedImage,user.user))
            
    };
 
 
        
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="mt-8 space-y-3" action="#" method="POST">
     
        <div class="grid grid-cols-1 space-y-2">
                        {/* <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label> */}
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                        {/* <!---<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>--> */}
                        <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                        <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                        {/* <FileBase64
                                multiple={ false }
                                onDone={ this.getFiles.bind(this) } /> */}
                        </div>
                        {/* <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline">select a file</a> from your computer</p> */}
                    </div>
                    <input {...register('img')} type="file" class="hidden" accept=".jpg, .jpeg, .png"/>
                </label>
            </div>
        </div>
                {/* <p class="text-sm text-gray-300">
                    <span>File type: doc,pdf,types of images</span>
                </p> */}
        <div>
            <button type="submit" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                        font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
            Upload
        </button>
        </div>
</form>
    )
}

export default UploadImgAcount
