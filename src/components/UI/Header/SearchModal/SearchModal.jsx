import cls from "./style.module.css";
import useOutsideClick from "@/components/hooks/useOutsideClick";
import Link from "next/link";
import React, { useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';



export default function SearchModal({ products, setSearchModal }) {
  const ref = useRef();

  useOutsideClick(ref, () => setSearchModal(false));

  return (
    <div
      ref={ref}
      className={`absolute top-[101%] w-full h-[300px] flex flex-col justify-start items-start pt-2 overflow-y-auto bg-white rounded-lg shadow-lg ${cls.search__modal}`}
    >
      {products.map((product) => (
        <Link href={`/products/${product.id}`} className="w-full">
          <div
            onClick={() => setSearchModal(false)}
            className="w-full flex  items-center gap-4 px-4 cursor-pointer hover:bg-orange-100"
          >
          <SearchIcon className="text-[#a5a5a5]"/>
            <div className="w-[40px] h-[50px]">
              <img
                src={product.thumbnail}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h2>{product.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
