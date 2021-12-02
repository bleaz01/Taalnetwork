import axios from 'axios';
import { NoSchemaIntrospectionCustomRule } from 'graphql';
import React,{useState} from 'react'
import FileBase64 from 'react-file-base64'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { uploadPicture } from '../../lib/redux/actions/user';
const UploadImgAcount = (user) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [previewSource, setPreviewSource] = useState('');
const [picture, setPicture] = useState("")
    const dispatch = useDispatch()

    const previewFile = (e) => {
      
        setPreviewSource(URL.createObjectURL(e.target.files[0]));
          setPicture(e.target.files[0])
      };
    const onSubmit =()=>{
        console.log('myPicturejjjlklklklklklklk')

        console.log(picture,'myPicture')
        if (picture){
            const reader = new FileReader();
            reader.readAsDataURL(picture);
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                // setErrMsg('something went wrong!');
            };
        }
    }
    const uploadImage = async (base64EncodedImage) => {
        console.log("salut je t'envoi ")
        console.log(user,'envoi')
        dispatch(uploadPicture(base64EncodedImage,user.user))
        window.location.reload()
     };
 
 
        
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="mt-8 space-y-3">
     
        <div class="grid grid-cols-1 space-y-2">
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col rounded-full border-4 border-dashed w-60 h-60 p-0 group text-center">
                    <div class="h-full w-full text-center flex flex-col justify-center items-center  ">
                        <img class="has-mask rounded-full h-full w-full object-center" src={previewSource ? previewSource :"https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"} alt="freepik image"/>
                    </div>
                    <input {...register('img')} type="file" class="hidden" onChange={(e) => previewFile(e)} />
                </label>
            </div>
        </div>
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
