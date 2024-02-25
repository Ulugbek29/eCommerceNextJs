import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import categoryService from '@/services/categoryServices';
import ProductCard from "../../../ProductCard"
import BreadCrumbs from "../../../BreadCrumbs"
import PopularProduct from "../../../PopularProduct"




export default function index() {
    const [products, setProducts] = useState([])
    const router = useRouter()
    const { category } = router.query;


    const categoryName = category && category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    const items = [
        {key:1, title: "Главная"},
        {key: 2,  title: "Электроника"},
        {key: 3, title: category}
    ]
    
    useEffect(()=> {
        fetchActiveCategory()
    },[category])

    const fetchActiveCategory = ()=> {
        categoryService.getProductsCategory(category)
        .then(res=> setProducts(res.products))
        .catch((err)=> console.log(err))
    }
    
    console.log(products)
    return (
        <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
        <BreadCrumbs items={items}/>
        <h2 className='text-2xl font-semibold'>{categoryName}</h2>
        </div>

        <div className='flex flex-col gap-4'>
            <h2>Популярные предложения</h2>
            <div className='grid grid-cols-3 gap-4'>
            <PopularProduct image="/popular-p (1).png"/>
            <PopularProduct image="/popular-p (2).png"/>
            <PopularProduct image="/popular-p (3).png"/>
            </div>
        </div>


        <div className='flex gap-4'>
            {typesOfPhones.map((type)=> (
                <div key={type.key} className='flex-1 py-2 px-4 text-center rounded-full text-nowrap bg-white shadow font-semibold cursor-pointer'>
                    {type.title}
                </div>
            ))}
        </div>


    <div className='grid grid-cols-4 gap-4'>
    {products.map((product)=> (
        <ProductCard product={product} />
    ))}
    </div>
        </div>
  )
}


const typesOfPhones = [
    {key:1, title: "смартфоны samsung"},
    {key:2, title: "смартфоны xiaomi"},
    {key:3, title: "iphone"},
    {key:4, title: "телефон"},
    {key:5, title: "смартфоны realme"},
    {key:6, title: "смартфоны poco"},
    {key:7, title: "смартфоны oppo"},
]