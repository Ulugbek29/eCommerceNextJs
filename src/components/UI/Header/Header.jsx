import React, { useState } from 'react'
import CatalogButton from "../buttons/CatalogButton"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import Link from 'next/link';

export default function Header() {

    const [openCatalog, setOpenCatalog] = useState(false)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center gap-8 px-[6%] py-4 border-b border-[#d3d3d3] z-50'>
        <div className='flex items-center gap-4 '>
            <div>
                <img src='/logo.png'/>
            </div>
            <CatalogButton setOpenCatalog={setOpenCatalog} openCatalog={openCatalog}/>
        </div>
        <div className='relative flex-1 flex items-center'>
            <input type="text" placeholder='Искать товары' className='text-lg w-11/12 px-4 py-2 border-2 border-[#FF9910] rounded-lg outline-none'/>
            <button className='absolute right-2 w-1/12 flex items-center justify-center bg-[#FF9910] rounded-e-lg py-3 px-6 text-white'><SearchIcon fontSize='medium'/></button>
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center flex-col'>
                <BalanceOutlinedIcon color='inherit'/>
                Сравнение
            </div>
            <div className='flex items-center flex-col'>
                <FavoriteBorderIcon color='inherit'/>
                Избранное
            </div>
            <div className='flex items-center flex-col'>
                <ShoppingCartOutlinedIcon color='inherit'/>
                Корзина
            </div>
            <Link href="/login">
            <button className='py-2 px-4 bg-[#F4F4F4] rounded-lg'>
            Войти
            </button>
            </Link>
            <Link href="/register">
            <button className='py-2 px-4 bg-[#F4F4F4] rounded-lg'>Регистрация</button>
            </Link>
        </div>
       {openCatalog && <CatalogMenu />} 
    </div>
  )
}
