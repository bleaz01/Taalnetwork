import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory,useRouteMatch, useLocation } from 'react-router';
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import Modal from '../utils/Modal';

const Vocabulary = () => {
    const [showModal, setShowModal] = useState(false);
    const [vocabulary, setVocabulary] = useState();
    const [categorie, setCategorie]=useState()
    const [listVocabulary, setListVocabulary] = useState();
    
    const history = useHistory()

    let {path,url} = useRouteMatch()
    console.log(path,'path')
    const handleCategory = ()=>{
        setShowModal(true)
       
    }
    const selectMyActivity =(item)=>{
        history.push(`${url}/${item}`)
        setShowModal(false)
        setCategorie(item)
    }
    console.log(listVocabulary,"activity")
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}vocabulary`)
        .then((res)=> setVocabulary(res.data))
    }, [])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}vocabulary/${categorie}`)
        .then((res)=> setListVocabulary(res.data))
        
    }, [categorie])

    return (
        <div>
            <Navbar/>
            <SideBar>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center p-8">
                            <h2 className="text-xl mb-4 font-bold text-indigo-600">
                                {categorie}
                            </h2>
                            <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-baseColor text-blue-500 text-lg rounded-lg hover:bg-baseColor hover:text-baseTextColor focus:border-4 focus:border-blue-300"
                             onClick={() => handleCategory()}
                            >Other Categorie</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {listVocabulary && listVocabulary.map((item)=>{
                            console.log(item)
                                return(
                                    <div class="cursor-pointer max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                                        <div id="header" class="flex flex-col items-center mb-4"> 
                                            <img alt="avatar" class="w-24 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                            <div id="header-text" class="leading-5 pt-3 sm">
                                                <h4 id="name" class="text-l text-center font-semibold">{item.title}</h4>
                                                {/* <h5 id="job" class="font-semibold text-blue-600">Designer</h5> */}
                                            </div>
                                        </div>
                                        {/* <div id="quote">
                                            <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                                        </div> */}
                                    </div>
                                    
                                    )
                                })
                            }
                        
                        
                       
                      
                        
                        
                       
                      
                            
                        </div>
                    </section>
            </SideBar>
            <Modal
             showModal={showModal}
             setShowModal={setShowModal}
             title="Liste de vocabulaire"
             >
                     {vocabulary && Object.keys(vocabulary).map((item)=>{
                        return(
                            // console.log(item)
                            <div className="flex flex-wrap">
                                <div onClick={() => selectMyActivity(item) }  className="cursor-pointer flex-1 min-w-1/4 bg-baseColor rounded-lg font-bold text-whiteColor text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6">
                                         {item}
                                    
                                </div>
                            </div>
                        )
                     })
                    }
                       
                     
                     
                 
                
             </Modal>
        </div>
       
    )
}

export default Vocabulary
