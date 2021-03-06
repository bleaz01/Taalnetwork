import React from 'react'

const emojiList = [
    {"😦": 'd'},{"😧":'d'},{"🥳":'d'},{"😨":'d'},{"😩": 'd'},
    {"🤯":'d'},{"😬":''},{"😰":''},{"😱":''},{"😳":''},{"🤪":""},
    {"😵" :""},{"😡":""},{"🥺" :""},{"😠":""},{"🤬":""},{"😷":""},
    {"🤒":""},{"🤕 ":""},{"🤢":""},{"🤧":""},{"😇":""},{"🤮":""},
    {"🤠":""},{"🤥 ":""},{"🤫":""},{"🤭":""},{"🧐 ":""},{"🤓":""},{"😀":""},
    {"😁":""},{"😂":""},{"🤣":""},{"😃":""},{"😄":""},{"😅":""},{"😆":""},{"😉":""},
    {"😊":""},{"😋":""},{"😎 ":""},{"😍":""},{"🥰":""},{"😘":""},{"😗":""},{"😙":""},
    {"😚":""},{"🙂":""},{"🤗":""},{"🤩":""},{"🤔":""},{"🤨":""},{"😐":""},{"😶":""},
    {"🙄":""},{"😏":""},{"😣":""},{"😥":""},{"😮":""},{"🤐":""},{"😯":""},{"😪":""},
    {"😫 ":""},{"😴":""},{"😌":""},{"😛":""},{"😜":""},{"😝":""},{"🤤":""},{"😒":""},
    {"😓":""},{"😔 ":""},{"😕 ":""},{"🙃":""},{"🤑":""},{"🥴 ":""},{"🥶":""},{"🥵":""},
    {"😲":""},{"🙁 ":""},{"😭":""},{"😢":""},{"😤":""},{"😖":""},{"😟":""},{"😞":""},{"":""},
]
const CardEmoji = () => {
  return (
      <div className="">
        <h2 className="">Comment allez-vous ? </h2>
        <input placeholder="" className="border-2 border rounded-2xl w-full py-1"/>
        <div className="flex flex-wrap -mx-3 mt-2 h-64 overflow-y-scroll ">
            {emojiList.map((emo)=>{
                return(
                    <div className="flex w-1/2 cursor-pointer rounded-2xl hover:bg-baseColor my-2 pl-3 py-3">
                        <p className="text-2xl ">{Object.keys(emo)}</p>
                        <p className="pl-3 ">{Object.values(emo)}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CardEmoji
