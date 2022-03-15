import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import zIndex from '@material-ui/core/styles/zIndex';

const Modal = ({showModal,setShowModal,children, title}) => {

    return (
      <>
      
        {showModal ? 
        (   
          <div class="h-screen w-full flex absolute top-0 flex-col items-center justify-center bg-secondeColor bg-opacity-40 font-sans">
           
            <div class="h-screen w-full flex items-center justify-center">
                  <div class="bg-whiteColor relative rounded shadow  w-1/2 h-96 text-center">
                      <div onClick={()=> setShowModal(false)} className="z-40 absolute top-2 right-2">
                        <HighlightOffIcon  fontSize={"large"} style={{color:"red",}}/>
                      </div>
                      <div className="relative p-6 flex-center">
                        {children}
                      </div>
                  </div>
              </div>
          </div>
            
               
           
        ) : null}
      </>
    );
  }
  

export default Modal


{/* <button
className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
onClick={() => this.setShowModal(false)}
>
<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
  ×
</span>
</button>
</div>
<div className="relative p-6 flex-center">
{children}
</div>
<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
<button
className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
type="button"
onClick={() => setShowModal(false)}
>
Close
</button>
</div> */}