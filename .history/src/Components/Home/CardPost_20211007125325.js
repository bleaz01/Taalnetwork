import React, { useState } from 'react'

const CardPost = ({image}) => {
    const [openFeed, setopenFeed] = useState(false)

    return (
          <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
            <div className="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
              <div className="py-2 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <a href="#" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                    <img className="rounded-full h-8 w-8 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt=""/>
                    <p className="ml-2 text-base font-medium">Jon Doe</p>
                  </a>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-xs font-semibold text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="mt-2">
                <img className="object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt=""/>
                <div className="py-2 flex flex-row items-center">
                  <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span className="ml-1">3431</span>
                  </button>
                  <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3" onClick={() => setopenFeed(! openFeed)}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    <span className="ml-1">566</span>
                  </button>
                  <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    <span className="ml-1">340</span>
                  </button>
                </div>
              </div>
              <div className="py-2">
                <p className="leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio, veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et soluta accusamus.</p>
              </div>
              <div className={`${openFeed === false ? "hidden" : ""}`}>
                <hr className="opacity-30"/>
                liste de messages

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                  </div>
                  <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="flex -space-x-2 mr-2">
                        <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                        <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">
                        5 Replies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default CardPost
