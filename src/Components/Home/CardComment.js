import React,{useState} from 'react'

const CardComment = ({comment}) => {
    const [openComment, setopenComment] = useState(false)
  console.log(comment.author,"comment");
    return (
        <div>
                   
                    <div className="flex-shrink-0 mb-3 mr-3">
                      <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={comment.author?.picture} alt=""/>
                    </div>

                    <div onClick={()=>setopenComment(!openComment)} className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                      <strong>{comment.author?.pseudo}</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                      <p className="text-sm">
                       {comment?.text}
                       </p>
                      <div className={`${openComment === true? 'hidden' : "mt-4 flex items-center"}`}>
                        <div className="flex -space-x-2 mr-2">
                          <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                          <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                        </div>
                        <div className="text-sm text-gray-500 font-semibold">
                          5 Replies
                        </div>
                      </div>
                      <div className={`${openComment === false ? 'hidden' : ""}`}>
                      <div class="space-y-4">
                        <div class="flex">
                         
                            <div class="flex-shrink-0 mr-3">
                                 <img class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>

                             </div>
                            
                          <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                            <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                            <p class="text-xs sm:text-sm">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                              sed diam nonumy eirmod tempor invidunt ut labore et dolore
                              magna aliquyam erat, sed diam voluptua.
                            </p>
                          </div>
                        </div>
                        </div>
                      </div> 
                    </div>

        </div>
    )
}

export default CardComment
