import React ,{ useState } from 'react'
import{useForm}from "react-hook-form"
import DropDownMenu from '../DropDownMenu'
import { useLocation } from "react-router-dom";

    
    

const DashboardForms = () => {

    const location = useLocation()
    const [typeQ, setTypeQ] = useState('Réponse simple')
    const [listQuestion, setlistQuestion] = useState([])
    const [finalPoint, setfinalPoint] = useState(0)
    const [numQuestion, setNumQuestion] = useState(1)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setNumQuestion(numQuestion + 1)
        setlistQuestion([...listQuestion, data])
        setfinalPoint(finalPoint + parseInt(data.point))
        
    }

    const onSubmitFinish = data =>{
        console.log(data,'finis')
    }
    const createSelect = (q,i, point)=>{
        return(
            <div className="w-full mt-6 flex flex-col justify-between">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                 <input {...register(`question${i}`) } type="text" 
                        placeholder={q} value={q} class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <div className="flex">
                    <input type="text" {...register("choix 1")}
                        placeholder={"choix 1"} name="choix 1"class=" mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <input type="text" 
                    {...register("choix 2")}
                        placeholder={"choix 1"}  name="choix 2" class="mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <input type="text"
                    {...register("choix 3")}
                        placeholder={"choix 1"}  name="choix 3" class=" mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    </div>
        </div>
        )
}

    const createSimple = (q,i, point) =>{
        return(
            <div className="w-full mt-6">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                 <input type="text" {...register(`question${i}`)}
                        placeholder={q} value={q} class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
            <input type="text"
            {...register(`reponse${i}`)}
                 placeholder="Response simple"class="mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                 "
             />
         </div>
        )
    }

    const createText = (q,i,point)=>{
        return(
            <div className="w-full mt-6">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                    <input type="text" {...register(`question${i}`)}
                    placeholder={q} value={q} class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                    text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                    "
                />
                <textarea {...register(`reponse${i}`)} placeholder="Ton text" id="textarea" type="textarea" class="block w-full px-4 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
        )
    }

    const createNuancé = (q,i,point)=>{
        return(
            <div className="w-full mt-3">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                 <input type="text"
                 {...register(`question${i}`)}
                        placeholder={q} value={q} className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <input type="text"
                    {...register(`reponse${i}`)}
                        placeholder="Response Nuancé" className="mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
             </div>
        )
    }

    const test =[
        "Réponse simple",
        "Réponse simple",
        "Réponse simple",
        "Réponse simple",
        "Réponse simple",
        "Réponse select",
        "Réponse nuancé",
        "Réponse text",

    ]
        console.log(listQuestion,'ki')

    

    return (
        <div className="container">
            <div className="m-5">
                Expliquatif
                <div className="flex justify-center">
                    <DropDownMenu/>
                </div>
            </div>
           
            <div className="m-10 flex flex-col">
                {/* form create question  */}
                
                <div className="mb-10 bg-greenColor border-2 h-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between w-full">
                        <div className="flex">
                            <input {...register(`question`) } type="text" name='question'
                                    placeholder="Question" className=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                    text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                                    "
                                />
                            
                                
                                <div className="w-1/3 text-left my-3 flex flex-row" >
                                    <select { ...register("type")}  name="type" className="form-select block p-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                    text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                                    ">
                                        <option value="Réponse simple" name="Réponse simple">Réponse simple</option>
                                        <option value="Réponse nuancé" name="Réponse nuancé">Réponse nuancé</option>
                                        <option value="Réponse text"name="Réponse text" >Réponse text</option>
                                        <option value="Réponse multiple"name="Réponse text" >Réponse multiple</option>


                                    </select>
                                
                                </div>
                                <div class="m-3 flex items-center justify-center flex-1 p-3 bg-whiteColor shadow rounded-lg">
                                    <button type='submit' class="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-baseColor" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                {location.pathname.includes("test") ? <input {...register("point") } type="number" name="point" placeholder="point"
                                className="w-1/6 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                                />: null}
                            </div>
                           

                    </form>
                </div>

                {/* form test of exercises */}
                   
                <div className="p-5 rounded-lg bg-baseColor">
                {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">/{finalPoint}</span> : null}
                    <form className="w-full m-0" onSubmit={handleSubmit(onSubmitFinish)}>

                        {listQuestion.map((q,i,key={q})=>{
                        //     console.log(q?.question, i,"list")
                        // })
                            if(q.type === "Réponse simple"){
                                return(
                                    createSimple(q?.question,i, q?.point)
                                 )
                            }
                            if(q.type ==="Réponse nuancé"){
                                return(
                                    createNuancé(q?.question,i,q?.point)
                                )
                            }
                            if(q.type ==="Réponse text"){
                                return(
                                    createText(q?.question,i,q?.point)
                                )
                            }
                            if(q.type ==="Réponse multiple"){
                                return(
                                    createSelect(q?.question,i,q?.point)
                                )
                            }
                        
                        })
                        }
                        <div className="flex flex-col">
                                <select { ...register("share")} name="share" className="mt-6 w-1/4 form-select block p-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring 
                                        ">
                                            <option value="" name="public">Partager</option>
                                            <option value="privé" name="privé">privé</option>
                                            <option value="public" name="public">public</option>
                                </select>
                           <div className="flex justify-end">
                                <button type="submit"class="p-2 pl-5 pr-5 bg-greenColor text-whiteColor text-lg rounded-lg focus:border-4 border-whiteColor ">Send</button>
                            </div>

                        </div>
                    </form>

                    </div>
               </div>
        </div>
    )
}

export default DashboardForms
