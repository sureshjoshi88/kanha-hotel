import React from 'react'
import { hotelImages } from '../data/Gellery'
import { memo } from 'react';

const Gallery = () => {
  console.log(hotelImages);

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-3 mt-4  p-2'>
        {hotelImages.map((item) => (
          <div key={item.id} className='overflow-hidden p-1'>
            <img className='h-62 object-cover w-full hover:scale-120' src={item.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Gallery)
