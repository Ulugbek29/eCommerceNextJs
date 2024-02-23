import Product from '@/pages/products/[id]'
import categoryService from '@/services/categoryServices'
import productsService from '@/services/productServices'
import React, { useEffect, useState } from 'react'
import ReactSlider from "../../React-Slick"
// import categoryService from '@/services/categoryServices';
import ProductCard from "../../ProductCard"
import NewsCard from "../../NewsCard"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Marquee from "react-fast-marquee";



const brands = [
    {
        id: 1,
        brandImg: "brand (1).png"
    },
    {
        id: 2,
        brandImg: "brand (2).png"
    },
    {
        id: 3,
        brandImg: "brand (3).png"
    },
    {
        id: 4,
        brandImg: "brand (4).png"
    },
    {
        id: 5,
        brandImg: "brand (5).png"
    },
    {
        id: 6,
        brandImg: "brand (6).png"
    },
    {
        id: 7,
        brandImg: "brand (7).png"
    },
    {
        id: 8,
        brandImg: "brand (8).png"
    },
    {
        id: 9,
        brandImg: "brand (9).png"
    },
]


export default function index() {
    const [categoryTypes,setCategoryTypes] = useState([]) 
    const [products, setProducts] = useState([])
    const [maxPriceProducts,setMaxPriceProducts] = useState([])
    const [categOfHome,setCategOfHome] = useState([])

    useEffect(()=> {
        fetchCategories()
    },[])
    

    useEffect(()=> {
        fetchProducts()
    },[])

    const fetchCategories = () => {
        categoryService.getList()
        .then(res => setCategoryTypes(res.slice(0,6)))
        .catch(err => console.log(err))
    }
    
    const fetchProducts = () => {
        productsService.getList()
        .then(res => {
            setProducts(res.products)
            filterByPrice(res.products)
            filterByCateg(res.products)
        })
        .catch(err => console.log(err))
    }
    
    const filterByPrice = (array) => {
        setMaxPriceProducts(array.filter((prod)=> prod.price >=500).slice(0,6))
    }

    const filterByCateg = (array) => {
        setCategOfHome(array.slice(6,12))
    }
    
  return (
    <div className='flex flex-col gap-12'>
        <ReactSlider />

        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold'>Смартфоны в рассрочку</h2>
            <div className='grid grid-cols-6 gap-6'>
            {categoryTypes.map((categ,index)=> (
                <div className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg'>
                    <img src={`${index % 2 === 0 ? "/cat-1.png" : "/cat-3.png"}`} className='w-full h-[120px] object-contain'/>
                    <span className='font-semibold text-lg'>{categ}</span>
                </div>
            ))}
            </div>
        </div>
            
        <div className='w-full h-[300px] overflow-hidden rounded-lg'>
            <img src='/rectangle.png' className='w-full h-full object-cover'/>
        </div>


        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold'>Дорогие вещи</h2>
            <div className='grid grid-cols-6 gap-6'>
            {maxPriceProducts.map((categ,index)=> (
                <div key={categ.id} className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg'>
                    <img src={categ.thumbnail} className='w-full h-[120px] object-contain'/>
                    <span className='font-semibold text-lg'>{categ.title}</span>
                </div>
            ))}
            </div>
        </div>



        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold'>Новинки</h2>
            <div className='grid grid-cols-4 gap-6'>
                <ProductCard image="product-1.png"/>
                <ProductCard image="product-2.png"/>
                <ProductCard image="product-3.png"/>
                <ProductCard image="product-4.png"/>
            </div>
        </div>
        


        <div className='w-full h-[300px] overflow-hidden rounded-lg'>
            <img src='/rectangle.png' className='w-full h-full object-cover'/>
        </div>



        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold'>Бытовая техника в рассрочку<ChevronRightIcon /></h2>
            <div className='grid grid-cols-6 gap-6'>
            {categOfHome.map((categ,index)=> (
                <div key={categ.id} className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg'>
                    <img src={categ.thumbnail} className='w-full h-[120px] object-contain'/>
                    <span className='font-semibold text-lg'>{categ.title}</span>
                </div>
            ))}
            </div>
        </div>


            
        <div className='flex flex-col gap-8'>
        <h2 className='text-2xl font-bold'>Новости<ChevronRightIcon /></h2>
            <div className='grid grid-cols-4 gap-6'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div> 

        <div className='flex flex-col gap-8'>
        <h2 className='text-2xl font-bold'>Популярные бренды<ChevronRightIcon /></h2>
            <Marquee 
            gradient
            gradientColor='#F6F6F6'
            gradientWidth={20}
            >
                {brands.map((brand)=> (
                    <img key={brand.key} src={brand.brandImg} className="mx-4"/>
                ))}
            </Marquee>
            <Marquee 
            gradient
            gradientColor='#F6F6F6'
            gradientWidth={20}
            >
                {brands.reverse().map((brand)=> (
                    <img key={brand.key} src={brand.brandImg} className="mx-4"/>
                ))}
            </Marquee>
        </div>

    </div>
  )
}
