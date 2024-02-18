import React from 'react'
import Header from '../UI/Header/Header'

export default function MainLayout({children}) {
  return (
    <div className='w-full min-h-screen'>
        <Header />
        <div className='pt-[100px] px-[10%]'>
            {children}
        </div>
    </div>
  )
}
