import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function index({image}) {
  return (
    <div className='relative flex flex-col bg-white rounded-lg pt-6 pb-4'>
        <span className='absolute top-4 left-4 bg-red-500 text-white rounded-lg text-lg px-4 py-1'>20%</span>
        <div className='absolute top-4 right-4 flex gap-4'>
        <BalanceIcon />
        <FavoriteBorderIcon />
        </div>
        <div className='w-full h-[250px] flex items-center justify-center'>
            <img src={`/${image}`} className="w-3/4 h-3/4 object-contain"/>
        </div>
        <div className='flex flex-col gap-1 px-4'>
            <span className='text-base text-[#7E7E83]'>Смартфоны</span>
            <h2 className='text-lg font-semibold'>Смартфон Apple iPhone 14 Pro 512Gb Black</h2>
            <div className='flex gap-4'>
            <div className='flex gap-2 text-xl'>
                <StarIcon className='text-[#F8C51B]' fontSize='inherit'/>
                <StarIcon className='text-[#F8C51B]' fontSize='inherit'/>
                <StarIcon className='text-[#F8C51B]' fontSize='inherit'/>
                <StarIcon className='text-[#F8C51B]' fontSize='inherit'/>
                <StarIcon  fontSize='inherit'/>
            </div>
            <span className='font-semibold'>52</span>
            </div>

            <div className='flex gap-2'>
                <p className='bg-[#FF9910] p-1 text-sm text-white rounded-full'>1 000 000 сум</p>
                <span className='text-[#7E7E83] font-semibold'>x 12 мес</span>
            </div>

            <div className='flex items-center gap-4 justify-between'>
            <div className='flex flex-col'>
                <p className='text-[#C3C3CA] text-lg line-through'>1200 650 000 сум</p>
                <h2 className='text-xl font-semibold'>1200 650 000 сум</h2>
            </div>
                <span className='p-4 text-[#FF9910]'>
                    <AddShoppingCartIcon />
                </span>
            </div>
        </div>
    </div>
  )
}
