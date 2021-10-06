import React,{useState} from 'react'
import Logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

     const [user, setUser] = useState(false)
    return (
        <nav className="bg-white shadow-lg">
            <div className="lg:pl-0 mx-2 px-6 flex justify-between w-full">
                <div className="flex justify-between">
                    <div className="flex space-x-14">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-gray-500 text-lg">
                                    Taalnetwork
                                </span>
                                
                            </a>
                        </div>
                        <div className="hidden lg:flex items-center space-x-1">
                            <a
                                href=""
                                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                            >
                                Home
                            </a>
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-baseColor transition duration-300"
                            >
                                Grammaire
                            </a>
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-baseColor transition duration-300"
                            >
                                Conjugaison
                            </a>
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-baseColor transition duration-300"
                            >
                                Live
                            </a>
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-baseColor transition duration-300"
                            >
                                Exercices / Tests
                            </a>
                            <a
                                href=""
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-baseColor transition duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    
                </div> 
                <div className="hidden lg:flex justify-end">
                        <a href="/account" className="flex justify-end py-4 px-2">
                            <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
                        </a>
                </div>
                <div className="lg:hidden flex my-auto mr-2">
                        <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
            </div>
	    </nav>
    )
}

export default Navbar
