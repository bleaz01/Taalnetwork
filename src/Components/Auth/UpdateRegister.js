import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{useForm}from "react-hook-form"
import { uploadUser } from '../../lib/redux/actions/user';



const UpdateRegister = ({id}) => {

    const [focusTags, setFocusTags] = useState([])
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleFocusTags = (item)=>{
        if((focusTags.length < 5) && (!focusTags.includes(item)))
        setFocusTags([...focusTags,item ])
    }
    const onSubmit = data =>{
            const userData ={
                ...data,
                tag:focusTags
            }
            console.log(userData,"kkk")
            dispatch(uploadUser(userData, id))

    }
    console.log(id)
    return (
        <div className="p-4 w-screen h-screen flex justify-center">
            <div className='flex flex-col border-2 bg-whiteColor rounded-2xl'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between">
                <div className="flex flex-col p-5">
                    <select {...register("motherLangage")} className="w-1/2 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                            <option value="">Langue maternelle</option>
                            <option value="en">Anglais</option>
                            <option value="fr">Français</option>
                            <option value="Nl">Néerlandais</option>
                    </select>
                        <div>
                            <h2 className="py-4">Choisir la langue que je veu apprendre </h2>
                            <div className="flex justify-between w-full ">
                                <select {...register("learnLangage")} className="w-1/2 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option value="">Langue</option>
                                        <option value="en">Anglais</option>
                                        <option value="fr">Français</option>
                                        <option value="nl">Néerlandais</option>
                                </select>
                                <select {...register("level learning")} className="w-1/3 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option value="">Niveau</option>
                                        <option value="a1">A1</option>
                                        <option value="a2">A2</option>
                                        <option value="b1">B1</option>
                                        <option value="b2">B2</option>
                                        <option value="c1">C1</option>
                                        <option value="c2">C2</option>
                                </select>
                            </div>
                        <div>
                            <h2 className="py-4">Pour quoi veu tu apprendre cet langue ?</h2>
                            <div className="flex justify-between w-full">
                                <select {...register("whyLearn")} className=" pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option value="">choix</option>
                                        <option value="Job">Un job</option>
                                        <option value="ecole">L'école</option>
                                        <option value="voyage">Un voyage</option>
                                        <option value="autre">Autre</option>
                                </select>
                            </div>
                        </div>
                        <div>
                        <div className="pt-4">
                            <p>Mes centre d'intérês</p>
                            <div className="flex  mt-2">
                                {
                                    focusTags && focusTags.map(item =>{
                                       return (
                                            <div  className="flex justify-between m-1 mr-2 w-24 bg-baseColor text-whiteColor rounded-xl p-2 font-bold text-sm leading-loose cursor-pointer" >
                                                <p>{item}</p> 
                                                <span onClick={()=> setFocusTags(focusTags.filter((x) => x !== item))} className="text-right">x</span>
                                            </div>
                                           )

                                    })
                                }
                            </div>
                        </div>
                        <hr className="m-5"/>

                            <div className='px-5 py-3'>
                                <h3 className="font-bold text-xs" >Choisi 5 centre d'intérês</h3>    
                                <div className='my-3 flex flex-wrap -m-1'>
                                    <span onClick={()=> handleFocusTags("sport")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#Sport</span>
                                    <span onClick={()=> handleFocusTags("musique")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Musique</span>
                                    <span onClick={()=> handleFocusTags("serie")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Serie</span>
                                    <span onClick={()=> handleFocusTags("jeux")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Jeux</span>
                                    <span onClick={()=> handleFocusTags("cuisine")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Cuisine</span>
                                    <span onClick={()=> handleFocusTags("cinéma")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Cinéma</span>
                                    <span onClick={()=> handleFocusTags("mode")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Mode</span>
                                    <span onClick={()=> handleFocusTags("art")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Art</span>
                                    <span onClick={()=> handleFocusTags("livestyle")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#LiveStyle</span>
                                    <span onClick={()=> handleFocusTags("politique")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Politique</span>
                                    <span onClick={()=> handleFocusTags("voyage")} className="m-1 bg-greyColor hover:bg-baseColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Voyage</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-5">
                        <button className="block w-full max-w-xs mx-auto bg-baseColor hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SEND</button>
                    </div>
                </div>
        </form>

            </div>
              

        </div>
    
    )
}

export default UpdateRegister
