import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../lib/context'



const FriendsList = () => {

  const {user} = useContext(UserContext)
  const { register, handleSubmit,  } = useForm();
  const [userToGroup, setUserToGroup] = useState([])
  const [nameGroup, setNameGroup] = useState()

  const createGroupe = data =>{
    axios.post(`${process.env.REACT_APP_API_URL}api/messagerie/conversation/group`,{
      userId:userToGroup,
      name:data.name
    }).then((res)=>{
      window.location.reload()

    })
    console.log(data.name, userToGroup, "hui")
  }
  return(
    <div>
        <form onSubmit={handleSubmit(createGroupe)}>
            <div>
              <input {...register('name')} className="w-full my-3 pl-2" placeholder="Name group" type="text" />
              <button type="submit">create</button>
            </div>
              {user.following.length > 0 && user?.following.map(user =>{
                    
                    return (
                      <div onClick={()=> setUserToGroup([userToGroup,user._id]) } class="mt-2 cursor-pointer">
                        <div class="flex flex-col -mx-4">
                          <div class="relative flex flex-row items-center bg-baseTextColor p-4">
                            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                            <img src={user.picture} alt="img profil" className=" rounded-2xl h-8 w-8 mr-2" /> 
                            </div>
                            <div class="flex flex-col flex-grow ml-3">
                              <div class="text-sm font-medium">{user.pseudo}</div>
                            </div>
                            <div class="flex items-center justify-center h-5">
                                  <input {...register('id')} name={user._id} id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                    })
              }
        </form>
    </div>

  )
 
}

export default FriendsList
