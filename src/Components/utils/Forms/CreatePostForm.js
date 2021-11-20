import React,{useContext, useState, useEffect} from 'react'
import{useForm}from "react-hook-form"
import { UserContext } from '../../../lib/context';
import { handleUploade } from '../function';
import base64 from "base-64"
import axios from 'axios';


const CreatePostForm = () => {

  const [file, setFile] = useState(null)
  const { register, handleSubmit, } = useForm();
  const {user} = useContext(UserContext)

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
 

  const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);
      };
  };



  const uploadImage = async (base64EncodedImage,msg) => {
   
    const post = {
      message:msg,
      file:base64EncodedImage,
      posterID:user._id
    }
    console.log(post)
      try {
          await axios.post(`${process.env.REACT_APP_API_URL}api/post`,{
            post
          })
          setFileInputState('');
          setPreviewSource('');
          setSuccessMsg('Image uploaded successfully');
      } catch (err) {
          console.error(err);
          setErrMsg('Something went wrong!');
      }
  };

  const onSubmit = data => {
    const post = {
      message:data.message,
      posterID:user._id
    }
    if (data.file[0]){
      const reader = new FileReader();
      reader.readAsDataURL(data.file[0]);
      reader.onloadend = () => {
          uploadImage(reader.result, data.message);
      };
      reader.onerror = () => {
          console.error('AHHHHHHHH!!');
          // setErrMsg('something went wrong!');
      };
    }else{
       try {
          axios.post(`${process.env.REACT_APP_API_URL}api/post`,{
            post
          })
          setFileInputState('');
          setPreviewSource('');
          setSuccessMsg('Image uploaded successfully');
      } catch (err) {
          console.error(err);
          setErrMsg('Something went wrong!');
      }
    }
      
   
  }


 
    return (
      <div className= "flex justify-center">
        <section class="w-full m-10 h-1/2 p-6 bg-baseColor rounded-md shadow-md dark:bg-gray-800 mt-10">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                  <textarea {...register('message')} id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Qu'elle est ton poin vue"></textarea>
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-whiteColor">
                      Image
                      </label>
                      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                                    </div>
                                </div>
                                <input {...register('file')}type="file" class=""/>
                                {previewSource && (
                                    <img
                                        src={previewSource}
                                        alt="chosen"
                                        style={{ height: '300px' }}
                                    />
                                )}
                            </label>
                        </div>
                        <p class="text-xs text-whiteColor">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="flex w-full justify-end mt-6">
              <button
                type="submit"
                class="border border-whiteColor text-whiteColor rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
              </div>
          </form>
      </section>
      </div>
     

 
    )
}

export default CreatePostForm
