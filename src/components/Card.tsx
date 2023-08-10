import React from 'react'
import cardImage from "../assets/cardImage.webp"

const Card = ({data}:any) => {
  return (
    <>
    <div className='flex flex-wrap w-[80%] m-auto mt-5'>

    {
        data.map((item:any , index:number)=>{
            return (
                <>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5" key={index}>
                <img className="w-full" src={cardImage} alt="Mountain" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item?.title}</div>
                  <p className="text-gray-700 text-base">
                    {item?.body}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Info</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#id {item?.id}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#user_id {item?.userId}</span>
                </div>
              </div>
                </>
            )
        })
    }
    </div>
        </>
   
  )
}

export default Card