import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md ovreflow-hidden border border-black w-[15rem] mx-3'>
        <div className='h-[13rem] w-[11rem] border border-black mx-3 '>
            <img className='object-cover object-top w-full h-full ' src={product.imageUrl} alt="" />

        </div>
        <div className='p-4'>
            <h3 className='text-lg text-sm font-medium'>{product.brand}</h3>
            <p className='mt-2 text-sm font-small text-gray-500'>{product.title}</p>
            

        </div>
      
    </div>
  )
}

export default HomeSectionCard
