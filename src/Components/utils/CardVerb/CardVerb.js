import React from 'react'

const CardVerb = ({title}) => {
    return (
        <div className="container mr-5 ml-2 mx-auto bg-baseColor bg-opacity-20 rounded-md shadow-xl">
            <div className="w-11/12 mx-auto">
            <div className="bg-white my-6">
                {/* <h3>{title}</h3> */}
                <table className="text-left w-full border-collapse"> 
                <thead>
                    <tr>
                    <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">KEYWORDS</th>
                    <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">TOTAL ENTERIES</th>
                    </tr>
                </thead>
               
                {title && title.map((e)=>{
                    return (
                        <tbody>
                        <tr className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light"></td>
                        <td className="py-4 px-6 text-center border-b border-grey-light">
                                {e}
                        </td>
                        </tr>
                    </tbody>
                    )
                })}
                </table>
            </div>
        </div>
        </div>
    )
}

export default CardVerb
