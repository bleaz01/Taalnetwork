import React ,{ useState } from 'react'
import{useForm}from "react-hook-form"
import { useLocation } from "react-router-dom";


const FormExercise = () => {
    const location = useLocation()
    const [listQuestion, setlistQuestion] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const test =[
        {type:"Réponse simple",question:"salue le simple", choix:["", "", ""] , reponse:""  },
        {type:"Réponse nuancé",question:"salue le nuancé", choix:["", "", ""] , reponse:""  },
        {type:"Réponse multiple",question:"salue le multiple", choix:["choix 1", "choix 2", "choix 3"] , reponse:""  },
        {type:"Réponse text",question:"salue text", choix:["", "", ""] , reponse:""  }
    ]

    const createSelect = (q,i, point, choix)=>{
        return(
            <div className="w-full mt-6 flex flex-col justify-between">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                 <label class="text-whiteColor dark:text-gray-200" >{q}</label>
                 <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={choix[0]}>{choix[0]}</option>
                    <option value={choix[1]}>{choix[1]}</option>
                    <option value={choix[2]}>{choix[2]}</option>
                </select>
            </div>
        )
    }

    const createSimple = (q,i, point) =>{
        return(
            <div className="w-full mt-6">
                {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                <label class="text-whiteColor dark:text-gray-200" >{q}</label>
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
                <label class="text-whiteColor dark:text-gray-200" >{q}</label>
                <textarea {...register(`reponse${i}`)} placeholder="Ton text" id="textarea" type="textarea" class="block w-full px-4 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            )
    }

    const createNuancé = (q,i,point)=>{
        return(
            <div className="w-full mt-3">
                 {location.pathname.includes("test") ? <span className="flex justify-end text-greenColor pt-2">{point} points</span> : null}
                 <label class="text-whiteColor dark:text-gray-200" >{q}</label>
                    <input type="text"
                    {...register(`reponse${i}`)}
                        placeholder="Response Nuancé" className="mt-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
             </div>
        )
    }
    return (
        <div className="flex justify-center">
            <div className="w-10/12 m-10 p-5 rounded-lg bg-baseColor">
                <h1 className="text-center text-3xl pb-5"> titre </h1>
                <span>Description: </span>
                <p className="p-3 rounded-md bg-greenColor bg-opacity-50">
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
                    le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                </p>
                <div className="flex justify-end">
                    <span className="pt-3 pr-2 text-xl">Note: </span>
                    <span className="text-greenColor pt-3 text-xl"> 0/20</span>
                </div>
                 <form>
                     {test.map((q,i,key={q})=>{
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
                                    createSelect(q?.question,i,q?.point, q?.choix)
                                )
                            }
                        
                        })
                    }
                </form> 
             </div>
        </div>
        
    )
}

export default FormExercise
