import React from 'react'

function List({ayat, arti}) {
    return (
        <div className="flex justify-center">
            <ul className="rounded-lg w-full text-white">
                <li className="px-6 py-2 border-b border-gray-200 text-right w-full rounded-t-lg">                    
                    <p className='text-4xl mb-4 font-Katibeh'>{ayat}</p>
                    <p>{arti}</p>
                </li>
            </ul>
        </div>

    )
}

export default List