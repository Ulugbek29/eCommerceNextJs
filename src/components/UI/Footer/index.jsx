import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function index() {
  return (
    <div className='flex flex-col gap-4 bg-[#37475A] text-white px-[6%] py-8 mt-16'>
        <div className='flex gap-4 justify-between'>
            <div>
                <h2 className='text-xl font-semibold text-white'>Информация</h2>
                <ul className='flex flex-col gap-2'>
                    <li>
                    О нас
                    </li>
                    <li>
                    Блог
                    </li>
                    <li>
                    Контакты
                    </li>
                    <li>
                    Публичный оферта
                    </li>
                </ul>
            </div>

            <div>
                <h2 className='text-xl font-semibold text-white'>Контакты для предложений</h2>
                <ul className='flex flex-col gap-2'>
                    <li>
                    Support@paragraf.uz
                    </li>
                    <li>
                    Форма обратной связи
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h2>Телефон</h2>
                <p>+998 90 123 45 67</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h2>Адрес</h2>
                <p>Алмазарский район, ул. Джами, 12.</p>
            </div>
            </div>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col items-start gap-4'>
                <h2>Платежная система</h2>
                <img src='/payment.png' className='h-[40px] object-contain'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h2>LOGO в соц.сетях</h2>
               <div className='flex gap-4'>
                <div className='bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                    <InstagramIcon />
                </div>
                <div className='bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                    <FacebookIcon />
                </div>
                <div className='bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                    <YouTubeIcon />
                </div>
                <div className='bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                    <TelegramIcon />
                </div>
               </div>
            </div>
        </div>
        </div>
        <div className='line h-[1px] w-full bg-white'></div>

        <div className='flex justify-between'>
        <p>Paragraf.uz - Все права защищены.</p>
        <div className='flex gap-4'>
            <p>Политика конфиденциальности</p>
            <p>Условия использования</p>
        </div>
        </div>
    </div>
  )
}
