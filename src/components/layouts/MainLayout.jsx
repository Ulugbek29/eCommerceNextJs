import React from 'react'
import Header from '../UI/Header/Header'
import Footer from "../UI/Footer"

export default function MainLayout({children}) {
  return (
    <div className='w-full min-h-screen bg-[#F6F6F6]'>
        <Header />
        <div className='pt-[100px] px-[6%]'>
            {children}
        </div>
        <Footer />
    </div>
  )
}
