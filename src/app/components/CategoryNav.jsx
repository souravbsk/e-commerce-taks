"use client"
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';

const CategoryNav = () => {
    const [categorys,setCategorysData] = useState([]);
   useEffect(() => {
   const dataFetch = async () => {
    const res = await fetch('https://dummyjson.com/products/categories')
    const categorysData = await res.json();
    setCategorysData(categorysData)
   }
   dataFetch()
   },[])
    
    return (
        <ul className='flex px-4  py-5 rounded-2xl  h-auto flex-col'>
            <li><Link className='text-sm' href="/">Home</Link></li>
            {
                categorys?.slice(0,8)?.map((category,i) => <li key={i}><Link className='text-sm' href="/">{category}</Link></li>)
            }
            
          
        </ul>
    );
};

export default memo(CategoryNav);