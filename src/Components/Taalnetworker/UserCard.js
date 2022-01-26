import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFootballBall, 
    faMusic, 
    faPaintBrush, 
    faGamepad,
    faUtensils,
    faFilm,
    faTshirt,
    faGem,
    faPlaneDeparture,
    faGraduationCap,
    faChalkboardTeacher,
    faComment,
    faQuoteRight
    

} from '@fortawesome/free-solid-svg-icons'
import UnknownPicture from '../assets/unknown.png'



const UserCard = ({user}) => {
    console.log(user, 'cad')
    const tags = user

    const handleCategories = (tags)=> {
        const icons = {
            "sport": "fas fa-running",
            "musique": "far fa-music",
            "jeux": "fas fa-gamepad",
            "cuisine": "fas fa-utensils",
            "cinéma": "fas fa-film",
            "livestyle": "far fa-gem",
            "travel":"fas fa-plan-departure",
            "art":"fas fa-paint-brush",
            "mode":"fas fa-tshirt",
            "politique":"fas fa-balance-scale",
            


        };

        
        // console.log(icons[tags]?.prefix,"test")
        console.log(`${icons[tags]?.prefix} fa-${icons[tags]?.iconName}`)
       
        return (
            
                <i class={icons[tags]}></i>            
                // <i class={`${icons[tags]?.prefix} fa-${icons[tags]?.iconName}`}></i>

            // <FontAwesomeIcon icon={faGem}/>
        )

    }

  return(
  <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="relative">
      <img className="w-full h-44 object-cover object-center bg-secondeColor" src={user.picture ? user.picture : UnknownPicture} alt="avatar"/>
      {
          user.rank 
          ? <FontAwesomeIcon className="absolute right-2 top-2 text-greenColor" size="2x" icon={faChalkboardTeacher}/>
          : <FontAwesomeIcon className="absolute right-2 top-2 text-greenColor" size="2x" icon={faGraduationCap}/>

 
      }
      </div>
          <div className="flex items-center px-6 py-3 bg-baseColor">
              <div className="flex justify-between w-full text-whiteColor">
                  <p className="w-1/3">Interês: </p>
                  <div className=" w-2/3 flex justify-between my-auto">
                    { user.tag && user.tag.map(tag =>
                      handleCategories(tag)

                    )
                    }

                    {/* <FontAwesomeIcon className="" icon={faFootballBall}/>
                    <FontAwesomeIcon icon={faMusic}/>
                    <FontAwesomeIcon icon={faPaintBrush}/>
                    <FontAwesomeIcon icon={faGamepad}/>
                    <FontAwesomeIcon icon={faUtensils}/> */}
                  </div>
               
              </div>
          </div>
          <div className="py-4 px-6">
              <h1 className="font-bold text-md font-semibold text-gray-800">{user.pseudo}</h1>
              <p className="font-regular min-w-sm py-2 text-lg text-gray-700">{user.bio ? user.bio : "No descript"}</p>
              <div className="flex items-center mt-4 text-gray-700">
                 <FontAwesomeIcon icon={faComment}/>
                  <h1 className="px-2 text-sm">{user.learnLangage[0]}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                      <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                  </svg>
                  <h1 className="px-2 text-sm">California</h1>
              </div>
              <div class="mt-3 text-white text-sm">
                <span class="text-gray-400 font-semibold">Storage: </span>
                <span>{user.rank}</span>
                </div>
              {/* <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                      <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                  </svg>
                  <h1 className="px-2 text-sm">patterson@example.com</h1>
              </div> */}
          </div>
      </div>
  )
};

export default UserCard
