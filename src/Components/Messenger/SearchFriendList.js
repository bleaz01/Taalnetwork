import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchFriendList = (data) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm( event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {

    const users = data?.data

    if(data){
        const results = Object.keys(data).filter(item =>

          console.log(item.pseudo,'kkkkkk')
          
            // item.pseudo.includes(searchTerm)
          );
          setSearchResults(results);
    }
   
  }, [searchTerm])

  return (
  <div className="absolute left-12 bg-baseColor border-secondeColor border-2 w-96 h-96 rounded-xl top-2 ">
    <div className="relative">
        <input onChange={handleChange} autocomplete="off" type="text" className=" text-whiteColor bg-baseColor mx-10 mt-2 pl-6 peer placeholder-transparent h-10 w-3/4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"  />
        <div className="absolute text-whiteColor left-10 top-4">
           <i className="fas fa-search"></i>
        </div>
    </div>
  <div className="w-full h-72 rounded-lg px-4 relative my-4 overflow-y-auto">

    {
      searchResults && searchResults.map(friend =>{

        return(
            <div onClick={()=> console.log(friend.pseudo)} className="bg-whiteColor cursor-pointer w-full flex items-center p-2 rounded-xl shadow border mt-2">
              <div className="relative flex items-center">
                <img
                  src={friend.picture}
                  alt="My profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="absolute h-4 w-4 rounded-full -bottom-1 -right-1 border-2 border-baseColor" />
              </div>
              <div className="flex-grow p-3">
                <div className="font-regular text-sm text-gray-700">
                  {friend.pseudo}
                </div>
              </div>
            </div>
        )
      })
    }
    


  </div>
</div>)
};

export default SearchFriendList