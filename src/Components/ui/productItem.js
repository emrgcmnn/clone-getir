import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';

export default function productItem({product}) {
  return (
    <div className='relative bg-white flex flex-col items-center text-center p-3'>
      <button className='absolute top-3 right-3 w-8 h-8 bg-white flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-lg'><AiOutlinePlus/></button>
      <img src={product.image} alt={product.title} />
      <div className='text-sm font-bold text-brand-color'>{product.price} TL</div>
      <div className='text-sm font-semibold mx-2'>{product.title}</div>
      <div>{product.alt}</div>
    </div>
  )
}
