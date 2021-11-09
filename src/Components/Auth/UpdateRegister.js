import React from 'react'
import{useForm}from "react-hook-form"


const UpdateRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
            console.log(data,"kkk")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col justify-between">
                <div class="flex flex-col">
                    <select {...register("my language")} class="w-1/2 -ml-10 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                            <option value="">Langue maternelle</option>
                            <option value="en">Anglais</option>
                            <option value="fr">Français</option>
                            <option value="Nl">Néerlandais</option>
                    </select>
                        <div>
                            <h2 className="text-center py-4">Choisir la langue que je veu apprendre </h2>
                            <div className="flex justify-between w-full">
                                <select {...register("learning")} class="w-1/2 -ml-10 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option value="">Langue</option>
                                        <option value="en">Anglais</option>
                                        <option value="fr">Français</option>
                                        <option value="nl">Néerlandais</option>
                                </select>
                                <select {...register("level learning")} class="w-1/2 -ml-10 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option>Niveau</option>
                                        <option value="a1">A1</option>
                                        <option value="a2">A2</option>
                                        <option value="b1">B1</option>
                                        <option value="b2">B2</option>
                                        <option value="c1">C1</option>
                                        <option value="c2">C2</option>
                                </select>
                            </div>
                        <div>
                            <h2 className="text-center py-4">Pour quoi veu tu apprendre cet langue ?</h2>
                            <div className="flex justify-between w-full">
                                <select {...register("whyLearning")} class="w-1/2 -ml-10 pl-3 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option value="">choix</option>
                                        <option value="Job">Un job</option>
                                        <option value="ecole">L'école</option>
                                        <option value="voyage">Un voyage</option>
                                        <option value="autre">Autre</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-3 mb-5">
                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SEND</button>
                    </div>
                </div>
        </form>
    )
}

export default UpdateRegister
