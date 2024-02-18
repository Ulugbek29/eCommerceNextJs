import React, { useEffect, useState } from 'react'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InputMask from "../../FormElements/InputMask"
import InputFiveDigits from "../../FormElements/InputFiveDigits"
import TextFiled from "../../FormElements/TextField"
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter()
  const [obj,setObj] = useState({})
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const {control, handleSubmit} = useForm()
  const [step, setStep] =useState(router.pathname === "/register" ? 0 : 1) 

  useEffect(() => {
    if (step === 3) {
      startTimer();
    }
  }, [step]);

  const telStep =() => {
    setStep((prev)=> prev + 1)
  }

  const onSubmit = (value) => {
    console.log(value)
    let data;
    if(router.pathname === "/register") {
       data = {
        fullName: value.fullName,
        phone_number: value.phone_number,
        pin_code: value.pin_code 
      }
    }else {
       data = {
        phone_number: value.phone_number,
        pin_code: value.pin_code
      }
    }
    setObj(data)
    telStep()
    
    if(step === 3) {
      router.push("/")
    }
  }

  // const startTimer = () => {
  //   const intervalId = setInterval(() => {
  //     if (seconds === 0 && minutes === 0) {
  //       clearInterval(intervalId);
  //     } else if (seconds === 0) {
  //       setMinutes(prevMinutes => prevMinutes - 1);
  //       setSeconds(59);
  //     } else {
  //       setSeconds(prevSeconds => prevSeconds - 1);
  //     }
  //   }, 1000);
  
  //   return () => clearInterval(intervalId);
  // };

  const startTimer = () => {
    let totalTimeInSeconds = minutes * 60 + seconds;
  
    const intervalId = setInterval(() => {
      if (totalTimeInSeconds === 0) {
        clearInterval(intervalId);
      } else {
        setMinutes(Math.floor(totalTimeInSeconds / 60));
        setSeconds(totalTimeInSeconds % 60);
        totalTimeInSeconds--;
      }
    }, 1000);
  
    return () => clearInterval(intervalId);
  };


  // For formating and adding extra zeros
  const formattedTimer = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


  console.log(obj)
  console.log(formattedTimer)
  return (
    <div className='relative max-w-[500px] w-full bg-white p-10 rounded-lg'>
    <form onSubmit={handleSubmit(onSubmit)}>
            {router.pathname === "/register" && step === 0 && (
              <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <h2 className='text-4xl font-bold'>Вход на сайт</h2>
                <p className='text-xl text-[#66686C]'>Выберите способ регистрации</p>
                <div className='w-full'>
                  <TextFiled fullWidth label="ФИО" control={control} name="fullName" placeholder="Введите ваше имя" required/>
                </div>
                <button  className='w-full flex justify-center bg-[#FF9910] p-4 gap-2 rounded-lg cursor-pointer' type='submit'>
                    <p className='text-white text-lg'>Выслать код</p>
                </button>
            </div>     
            )}
           {step === 1 && (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <h2 className='text-4xl font-bold'>Вход на сайт</h2>
                <p className='text-xl text-[#66686C]'>Выберите способ регистрации</p>
                <div className='w-full flex justify-center bg-[#F6F8F9] p-4 gap-2 rounded-lg cursor-pointer' onClick={telStep}>
                    <span><PhoneOutlinedIcon /></span>
                    <p>Войти через номер телефона</p>
                </div>
            </div>
           )}
           {step === 2 && (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <h2 className='text-4xl font-bold'>Вход на сайт</h2>
                <p className= 'text-xl text-[#66686C]'>Код отправили сообщением на номер</p>
                
                <div className='w-full'>
                  <InputMask label="Номер телефона" control={control} name="phone_number" required/>
                </div>
                <button  className='w-full flex justify-center bg-[#FF9910] p-4 gap-2 rounded-lg cursor-pointer' type='submit'>
                    <p className='text-white text-lg'>Выслать код</p>
                </button>
            </div>
           )}
           {step === 3 && (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <h2 className='text-4xl font-bold'>Вход на сайт</h2>
                <p className= 'text-xl text-[#66686C]'>Войдите с вашим номером телефона</p>
                <span>{obj.phone_number}</span>
                <div className='w-full'>
                  <InputFiveDigits label="Код подтведждения" control={control} name="pin_code" required/>
                </div>
                <div className='my-4'>
                  {formattedTimer === "00:00" ? (
                    <p className='text-base text-[#FF9910]'>Отправить ещё раз</p>
                  ): (
                    <p>{formattedTimer}</p>
                  )}
                </div>
                <button  className='w-full flex justify-center bg-[#FF9910] p-4 gap-2 rounded-lg cursor-pointer' type='submit'>
                    <p className='text-white text-lg'>Подтвердить</p>
                </button>
            </div>
           )}
    </form>
    <Link href="/">
    <span className='absolute top-2 right-4 p-2 cursor-pointer'><CloseOutlinedIcon /></span>
    </Link>
        </div>
  )
}
