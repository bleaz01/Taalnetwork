import React from 'react'

const SideBar = () => {
    return (
        <div class="bg-secondeColor flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
        <div class="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-baseColor rounded-l-2xl">
          <a href="#"
             class="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full">
            <svg class="w-8 h-8"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
          </a>
          <ul class="flex flex-col space-y-2 mt-12">
            <li>
              <a href="/"
                 class="flex items-center">
                <span class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg class="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center">
                <span class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg class="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center">
                <span class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg class="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center">
                <span class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg class="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <button class="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
            <svg class="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
        </div>
        <div class="flex bg-greyColor flex-col w-full h-full pl-4 pr-4 py-4 -mr-4 rounded-r-2xl">
          <div class="flex flex-row items-center">
            <div class="flex flex-row items-center">
              <div class="text-xl font-semibold">Messages</div>
              <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
            </div>
            <div class="ml-auto">
              <button class="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                <svg class="w-4 h-4 stroke-current"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-5">
            <ul class="flex flex-row items-center justify-between">
              <li>
                <a href="#"
                   class="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                  <span>All Conversations</span>
                  <span class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                </a>
              </li>
              <li>
                <a href="#"
                   class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                  <span>Archived</span>
                </a>
              </li>
              <li>
                <a href="#"
                   class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                  <span>Starred</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-5">
            <div class="text-xs text-gray-400 font-semibold uppercase">Team</div>
          </div>
          <div class="mt-2">
            <div class="flex flex-col -mx-4">

              <div class="relative flex flex-row items-center bg-baseTextColor p-4">
                <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">5 min</div>
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                  T
                </div>
                <div class="flex flex-col flex-grow ml-3">
                  <div class="text-sm font-medium">Cuberto</div>
                  <div class="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div>
                </div>
                <div class="flex-shrink-0 ml-2 self-end mb-1">
                  <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="text-xs text-gray-400 font-semibold uppercase">Personal</div>
          </div>
          <div class="h-full overflow-hidden relative pt-2">
            <div class="flex flex-col divide-y h-full overflow-y-auto -mx-4 ">
              <div class="flex flex-row items-center p-4 relative bg-opacity-50 bg-secondeColor  ">
                <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">2 hours ago</div>
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                  T
                </div>
                <div class="flex flex-col flex-grow ml-3">
                  <div class="text-sm font-medium">Flo Steinle</div>
                  <div class="text-xs truncate w-40">Good after noon! how can i help you?</div>
                </div>
                <div class="flex-shrink-0 ml-2 self-end mb-1">
                  <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">3</span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 mr-2 ">
              <button class="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                <svg class="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SideBar
