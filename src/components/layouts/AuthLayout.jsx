import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/login-page-bg.jpg')" }}>
    <div className='absolute inset-0 bg-black opacity-75'></div>
        <div className='w-full flex justify-center z-10'>
        {children}
        </div>
    </div>
  )
}
