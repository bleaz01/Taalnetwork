import React from 'react'

const header = ({user}) => {
  // const {displayName,photo} = user
  console.log(user,'ee')
    return (
        <div class="bg-greenColor flex flex-row items-center py-4 px-6 rounded-2xl shadow">
        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
        <img src={user} alt="img profil" className="rounded-2xl h-8 w-8 mr-2" />

        </div>
        <div class="flex flex-col ml-3">
          {/* <div class="font-semibold text-sm">{user}</div> */}
          <div class="text-xs text-gray-500">Active</div>
        </div>
        <div class="ml-auto">
          <ul class="flex flex-row items-center space-x-2">
            <li>
              <a href="#"
                 class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                <span>
                  <svg class="w-5 h-5"
                       fill="currentColor"
                       stroke="none"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                <span>
                  <svg class="w-5 h-5"
                       fill="currentColor"
                       stroke="none"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                <span>
                  <svg class="w-5 h-5"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default header
