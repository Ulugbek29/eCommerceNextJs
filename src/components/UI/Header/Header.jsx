import React, { useEffect, useRef, useState } from 'react'
import CatalogButton from "../buttons/CatalogButton"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import Link from 'next/link';
import productsService from '@/services/productServices';
import SearchModal from './SearchModal/SearchModal';
import SearchBtn from "../buttons//SearchButtons"
import { useSelector } from 'react-redux';
import { totalCartItemsAmount } from '@/components/utils/totalCartItemsAmount';


export default function Header() {
    const [products, setProducts] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [openCatalog, setOpenCatalog] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [searchLoader, setSearchLoader] = useState(false)
    const totalProducts = useSelector((store)=> store?.cart?.items)

console.log(totalProducts);
    useEffect(()=> {
        const getData = setTimeout(() => {
        fetchhProducts()
    }, 300)

    return () => clearTimeout(getData)
    },[inputValue])

    const fetchhProducts = ()=> {
        setSearchLoader(true)
            productsService.getList(100, inputValue)
            .then(res=> {
                setProducts(res.products)
                setSearchModal(true)
                })
            .catch(err => console.log(err))
            .finally(()=>setSearchLoader(false))
    }




    // const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(inputValue.toLowerCase()))
    // console.log("filteredProducts",filteredProducts)

// console.log(products)
// console.log(searchModal)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center gap-8 px-[6%] py-4 border-b border-[#d3d3d3] bg-white z-50'>
        <div className='flex items-center gap-4 '>
            <div>
            <Link href="/">
                <img src='/logo.png'/>
            </Link>
            </div>
            <CatalogButton setOpenCatalog={setOpenCatalog} openCatalog={openCatalog}/>
        </div>
        <div className='relative flex-1 flex items-center'>
            <input type="search" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} onFocus={()=>setSearchModal(true)}  placeholder='Искать товары' className='text-lg w-11/12 px-4 py-2 border-2 border-[#FF9910] rounded-lg outline-none'/>
           <SearchBtn loader={searchLoader}/>
           {(products.length > 0 && inputValue.length > 0 && searchModal )&& <SearchModal setSearchModal={setSearchModal} products={products}/>}
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

            <div className='relative'>
            <Link href="/cart" className='flex items-center flex-col'>
                <ShoppingCartOutlinedIcon color='inherit'/>
                Корзина
            </Link>
                <span className='absolute flex items-center justify-center top-[-5px] right-1 w-[20px] h-[20px] rounded-full bg-slate-500 text-white'>{totalCartItemsAmount(totalProducts)}</span>
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
       {openCatalog && <CatalogMenu setOpenCatalog={setOpenCatalog}/>} 
    </div>
  )
}
