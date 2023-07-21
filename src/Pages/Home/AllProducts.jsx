'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {
const [products,setProducts]  = useState([]);
const [loading,setLoading] = useState(true);
useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {

        setLoading(true)
        if(data?.products){
            setProducts(data?.products)
            setLoading(false)
        }
    })
},[])
console.log(products);
    return ( 
        <section className='container mt-32' >
           <h2 className='text-4xl font-semibold text-center underline'>~All product~</h2>
                {loading ? <p className='text-center mt-12'><span className="loading loading-bars loading-lg"></span></p> : ""}
            <div className='mt-12 gap-8  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                {
                    products.map(product => <div key={product?.id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><Image  src={product?.thumbnail} width={100} className='w-full h-48
                     object-fill' height={100} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.title}</h2>
                      <p>{product?.description}</p>
                      <p>Price: ${product?.price}</p>
                      <p>Brand: ${product?.brand}</p>
                      <div className="card-actions justify-end">
                        <Link href={`/view-details/${product.id}`}><button className="btn hover:text-gray-900 bg-gray-900 text-white">Buy Now</button></Link>
                      </div>
                    </div>
                  </div>)
                }

            </div>
        
        </section>
    );
};

export default AllProducts;