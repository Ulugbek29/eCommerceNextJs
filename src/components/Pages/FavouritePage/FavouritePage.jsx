import React from 'react';
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard"

//Icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradingIcon from '@mui/icons-material/Grading';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import PersonIcon from '@mui/icons-material/Person';

export default function FavouritePage() {
    const favouriteList = useSelector((state)=> state?.favourite?.favourites)


    const sideBarLinks = [
        {key: "profile", title: "Profile", icon: PersonOutlineIcon},
        {key: "cards", title: "My Cards", icon: AddCardIcon},
        {key: "address", title: "Address", icon: LocationOnIcon},
        {key: "orders", title: "My Orders", icon: InventoryIcon},
        {key: "favourites", title: "Favourites", icon: FavoriteBorderIcon},
        {key: "reviews", title: "Reviews", icon: GradingIcon},
        {key: "notifications", title: "Notifications", icon: NotificationAddIcon},
        {key: "subscription", title: "Subscription", icon: PersonIcon},
    ]
    
    console.log(favouriteList);
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-semibold'>Избранный</h2>
        <div className='flex items-start justify-between gap-4'>
        <div className='w-2/12 flex flex-col bg-white rounded-lg shadow-md py-4 px-2'>
            {sideBarLinks.map((list)=> (
                <div key={list.key} className={`${list.key==="favourites" && "bg-[#FFF7EC] text-orange-500"} w-full flex gap-4 px-4 py-2 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-[#FFF7EC]`}>
                    <list.icon />
                    <span className="font-semibold">{list.title}</span>
                </div>
            ))}
        </div>
        <div className='w-10/12'>
              <div className='grid grid-cols-4 gap-4'>
                {favouriteList.map((fav)=> (
                    <ProductCard product={fav}/>
                ))}
              </div>  
        </div>
        </div>
    </div>
  );
}