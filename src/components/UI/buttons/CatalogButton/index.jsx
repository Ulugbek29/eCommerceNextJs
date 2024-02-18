import React from 'react'
import cls from "./style.module.css"

export default function index({openCatalog,setOpenCatalog=()=>{}}) {

  return (
    <button onClick={()=> setOpenCatalog(prev => !prev)} className="flex items-center gap-2 px-4 py-2 bg-[#FF9910] text-[#fff] font-semibold border border-[#FF9910] rounded-xl">
        <div className={`${cls.button_menu} ${openCatalog && cls.open_modal}`}>
            <span className={cls.line_1}></span>
            <span className={cls.line_2}></span>
            <span className={cls.line_3}></span>
        </div>
        Категории
    </button>
  )
}
