import React, { use, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useContext, useState } from 'react';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) =>(item.bestSeller === true));
        setBestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div>
      <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST '} text2={' SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best-selling products that customers love!</p>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
