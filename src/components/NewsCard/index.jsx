import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function index() {
  return (
    <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
        <div className='w-full h-[200px]'>
            <img src='/news.png' className='w-full h-full object-cover'/>
        </div>
        <div className='p-4 flex flex-col items-start gap-2'>
            <div className='flex gap-2'>
                <div className='flex text-sm text-[#303940]'>
                    <CalendarTodayIcon fontSize='small'/>
                    <span className='text-nowrap'>22.02.2023</span>
                </div>
                <div className='line w-[1px] h-full bg-[#E5E9EB]'></div>
                <div className='flex text-sm text-[#303940]'>
                    <MessageIcon fontSize='small'/>
                    <span className='text-nowrap'>13 Комментарии</span>
                </div>
                <div className='line w-[1px] h-full bg-[#E5E9EB]'></div>
                <div className='flex text-sm text-[#303940]'>
                    <RemoveRedEyeIcon fontSize='small'/>
                    <span className='text-nowrap'>52</span>
                </div>
            </div>
            <h2 className='text-lg font-semibold'>Лечение зубов во сне в Москве в стоматологии</h2>
            <p className='text-lg'>Более 80% людей боятся обращаться к стоматологу. Эти данные не голословны...</p>
            <button className='bg-[#F2F2F3] py-2 px-4 rounded-lg'>Читать подробно</button>
        </div>
    </div>
  )
}
