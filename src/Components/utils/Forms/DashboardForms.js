import React ,{ useState } from 'react'
import{useForm}from "react-hook-form"
    
    

const DashboardForms = () => {


    const [typeQ, setTypeQ] = useState('Réponse simple')
    const [listQuestion, setlistQuestion] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setlistQuestion([...listQuestion, data])
        console.log(data,'form1');
    }

    const onSubmitFinish = data =>{
        console.log(data,'finis')
    }
    const createSelect = (q)=>{
        return(
            <form className="flex flex-col justify-between">
                 <input {...register("question") } type="text" 
                        placeholder={q} class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <div className="flex">
                    <input type="text" {...register("choix 1")}
                        placeholder={"choix 1"} name="choix 1"class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <input type="text" 
                    {...register("choix 2")}
                        placeholder={"choix 1"}  name="choix 2" class="w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <input type="text"
                    {...register("choix 3")}
                        placeholder={"choix 1"}  name="choix 3" class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    </div>

        
            


        </form>
        )
}

    const createSimple = (q) =>{
        return(
            <div>
                 <input type="text" {...register("question")}
                        placeholder={q} class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
            <input type="text"
            {...register("text")}
                 placeholder="Response simple"class=" m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                 text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                 "
             />
         </div>
        )
    }

    const createText = (q)=>{
        return(
                <div>
                     <input type="text"
                        placeholder={q} class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
                    <textarea placeholder="Ton text" id="textarea" type="textarea" class="ml-3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>
        )
    }

    const createNuancé = (q)=>{
        return(
            <div>
                 <input type="text"
                 {...register(q)}
                        placeholder={q} class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                        text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                        "
                    />
            <input type="text"
            {...register("text")}
                 placeholder="Response Nuancé"class=" m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
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
            <div className="m-10 flex flex-col">
                <div className="m-10 border-2 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between w-full">
                            <input {...register("question") } type="text" name='question'
                                placeholder="Question"class=" w-2/3 m-3 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                                "
                            />
                            <label class="w-1/3 block text-left pt-0 " >
                                <select { ...register("type")} name="type" class="form-select block p-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded
                                text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full
                                ">
                                    <option >Réponse à choix multiple</option>
                                    <option  value="Réponse simple" name="Réponse simple">Réponse simple</option>
                                    <option  value="Réponse nuancé" name="Réponse nuancé">Réponse nuancé</option>
                                    <option value="Réponse text"name="Réponse text" >Réponse text</option>
                                    <option value="Réponse multiple"name="Réponse text" >Réponse multiple</option>


                                </select>
                            </label>
                            <input type="submit" />
                    </form>
                </div>
                   
                <div className="mt-5 rounded-lg bg-baseColor">
                    
                        <form onSubmit={handleSubmit(onSubmitFinish)}>

                        {listQuestion.map((q)=>{
                        //     console.log(q.question,"list")
                        // })
                            if(q.type === "Réponse simple"){
                                return(
                                    createSimple(q?.question)
                                 )
                            }
                            if(q.type ==="Réponse nuancé"){
                                return(
                                    createNuancé(q?.question)
                                )
                            }
                            if(q.type ==="Réponse text"){
                                return(
                                    createText(q?.question)
                                )
                            }
                            if(q.type ==="Réponse multiple"){
                                return(
                                    createSelect(q?.question)
                                )
                            }
                        
                        })
}
                    <div class="border  bg-whiteColor m-3 rounded-lg w-40 mt-6 pt-3">
                    <input type="submit" />

                        {/* <input type="submit"class="  text-gray-100 px-3 py-1  hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                            Save
                        </input> */}
                    </div>
                    </form>

                </div>
               </div>
        </div>
    )
}

export default DashboardForms
