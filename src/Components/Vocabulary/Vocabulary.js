import React,{useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import Modal from '../utils/Modal';

const Vocabulary = () => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal,"vacabulary")
    return (
        <div>
            <Navbar/>
            <SideBar>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center pb-12">
                            <h2 className="text-base font-bold text-indigo-600">
                                Other Categorie 
                            </h2>
                            <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-baseColor text-blue-500 text-lg rounded-lg hover:bg-baseColor hover:text-baseTextColor focus:border-4 focus:border-blue-300"
                             onClick={() => setShowModal(true)}
                            >click here</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            
                           
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex items-center mb-4"> 
                                <img alt="avatar" class="w-14 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                <div id="header-text" class="leading-5 ml-6 sm">
                                    <h4 id="name" class="text-l font-semibold">John Doe</h4>
                                    <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
                                </div>
                            </div>
                            <div id="quote">
                                <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                            </div>
                        </div>
                            
                        </div>
                    </section>
            </SideBar>
            <Modal
             showModal={showModal}
             setShowModal={setShowModal}
             >
                  <div className="flex flex-wrap">
                            <a href="" className="flex-1 min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Voitue
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                La famille
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                IT
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Job
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Allimentaire
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            <a href="" className="flex-1  min-w-1/4 bg-baseColor rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                Click here
                            </a>
                            </div>
             </Modal>
        </div>
       
    )
}

export default Vocabulary
