import React from 'react'

export default function index({image}) {
  return (
    <div className='w-full flex gap-4 bg-white p-4 rounded-lg'>
        <div className='flex-[1]  flex items-center justify-center'>
            <img  src={image} className="w-3/4 object-contain"/>
        </div>
        <div className='flex-[2] flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Смарт-часы Samsung Galaxy Watch3 45mm</h2>
            <div className='flex items-center gap-2'>
                <span className='bg-orange py-1 px-2 rounded-full text-sm bg-orange-500'>1 000 000 сум</span> 
                <p className='text-[#7E7E83] text-sm'>x 9 мес</p>
            </div>
            <div className='flex flex-col'>
                <span className='text-[#7E7E83] flex items-center gap-4 '>
                1200 650 000 сум
                <p className='text-orange-500'>-5%</p>
                </span>
                <h2 className='text-lg font-semibold'>120 650 000 сум</h2>
            </div>
        </div>
    </div>
  )
}
