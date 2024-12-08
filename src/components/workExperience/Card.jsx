import React from 'react'

const Card = ({service,url}) => {
    console.log(service)
    const {title,discription}=service;
  return (
    <div className=' sm:w-full rounded-md shadow-md shadow-gray-200 pb-8 '>
        <img src={url} alt="image here" className="w-full h-auto rounded-t-md" />
        <div className=" p-4">
        <p className=" text-base font-semibold py-2  text-black">{title}</p>
        <p className='text-slate-500 text-[15px] font-custom tracking-tight'>{discription}</p>
        </div>
        
    </div>
  )
}

export default Card