import React from 'react'

const CardVerb = () => {
    return (
        <div className="container mr-5 ml-2 mx-auto bg-baseColor bg-opacity-20 rounded-md shadow-xl">
            <div className="w-11/12 mx-auto">
            <div className="bg-white my-6">
                <table className="text-left w-full border-collapse"> 
                <thead>
                    <tr>
                    <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">KEYWORDS</th>
                    <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">TOTAL ENTERIES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Bible</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                        11980
                    </td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                        340
                    </td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                        901
                    </td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                        11950
                    </td>
                    </tr>
                    <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                    <td className="py-4 px-6 text-center border-b border-grey-light">
                        459
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default CardVerb
