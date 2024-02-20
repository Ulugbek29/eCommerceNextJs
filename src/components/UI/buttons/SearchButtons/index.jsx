import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function index({ loader }) {
  return (
    <button className='absolute right-2 w-1/12 h-[47px] flex items-center justify-center bg-[#FF9910] rounded-e-lg py-3 px-6 '>
      {loader ?
      <div className="text-white">
      <CircularProgress size={30}  color='inherit'/>
      </div>
   : <SearchIcon fontSize='medium' />}
    </button>
  );
}
