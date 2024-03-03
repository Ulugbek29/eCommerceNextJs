import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { addToFavourite } from "@/store/favouriteSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function index({ image, product }) {
  const favouriteProducts = useSelector((state)=> state?.favourite?.favourites)
  const dispatch = useDispatch()



  const addToCartProduct =()=>{
    if(product) dispatch(addToCart(product)) 
  }

  const addToFavouriteProduct =()=>{
    if(product) dispatch(addToFavourite(product))
  }

  const isFavouriteProduct = product && favouriteProducts?.some((fav)=> fav.id === product.id)


console.log(product);
  return (
    <div className="relative flex flex-col bg-white rounded-lg pt-6 pb-4">
      <span className="absolute top-4 left-4 bg-red-500 text-white rounded-lg text-lg px-4 py-1">
        20%
      </span>
      <div className="absolute top-4 right-4 flex gap-4">
        <BalanceIcon />
        <span onClick={()=>addToFavouriteProduct()} className="cursor-pointer">
        {isFavouriteProduct ? 
          <FavoriteIcon color="error"/>
        : 
        <FavoriteBorderIcon />
        }
        </span>
      </div>
      <div className="w-full h-[250px] flex items-center justify-center">
        {product ? (
          <img
            src={`${product.thumbnail}`}
            className="w-3/4 h-3/4 object-contain"
          />
        ) : (
          <img
            src={`/${image}`}
            className="w-3/4 h-3/4 object-contain"
          />
        )}{" "}
      </div>
      <div className="flex flex-col gap-1 px-4">
        <span className="text-base text-[#7E7E83]">{product ? product.category : "IphoneXS"}</span>
        <h2 className="text-lg font-semibold">
          {product ? product.title : "IphoneXS"}
        </h2>
        <div className="flex gap-4">
          <div className="flex gap-2 text-xl">
            <StarIcon className="text-[#F8C51B]" fontSize="inherit" />
            <StarIcon className="text-[#F8C51B]" fontSize="inherit" />
            <StarIcon className="text-[#F8C51B]" fontSize="inherit" />
            <StarIcon className="text-[#F8C51B]" fontSize="inherit" />
            <StarIcon fontSize="inherit" />
          </div>
          <span className="font-semibold">52</span>
        </div>

        <div className="flex gap-2">
          <p className="bg-[#FF9910] p-1 text-sm text-white rounded-full">
            1 000 000 сум
          </p>
          <span className="text-[#7E7E83] font-semibold">x 12 мес</span>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className="flex flex-col">
            <p className="text-[#C3C3CA] text-lg line-through">
              1200 650 000 сум
            </p>
            <h2 className="text-xl font-semibold">1200 650 000 сум</h2>
          </div>
          <span onClick={()=>addToCartProduct()} className="p-4 text-[#FF9910] cursor-pointer">
            <AddShoppingCartIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
