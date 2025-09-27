import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // Check if products exists and has items
        if (products && products.length > 0) {
            const bestProducts = products.filter((item) => item.bestseller === true);
            setBestSeller(bestProducts.slice(0, 6));
        }
    }, [products]);

    // Add loading state or empty state handling
    if (!products || products.length === 0) {
        return (
            <div className='my-10'>
                <div className='text-center text-3xl py-8'>
                    <Title text1={'BEST '} text2={' SELLERS'}/>
                    <p className='w-full md:w-3/4 mx-auto my-4 text-gray-600 text-sm md:text-base'>
                        Loading best sellers...
                    </p>
                </div>
            </div>
        );
    }

    if (bestSeller.length === 0) {
        return (
            <div className='my-10 mx-4 md:mx-10'>
                <div className='text-center py-8'>
                    <Title text1={'BEST '} text2={' SELLERS'}/>
                    <p className='w-full md:w-3/4 mx-auto my-4 text-gray-600 text-sm md:text-base'>
                        No best sellers available at the moment.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='my-10 mx-4 md:mx-10'>
            <div className='text-center py-8'>
                <Title text1={'BEST '} text2={' SELLERS'}/>
                <p className='w-full md:w-3/4 mx-auto my-4 text-gray-600 text-sm md:text-base'>
                    Discover our best-selling products that customers love!
                </p>
            </div>
            
            {/* Fixed grid container */}
            <div className='grid grid-cols-2 min-[480px]:grid-cols-2 min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1024px]:grid-cols-5 gap-4 md:gap-6'>
                {bestSeller.map((item) => (
                    <div key={item._id} className="flex flex-col"> {/* Added flex container */}
                        <ProductItem 
                            id={item._id} 
                            image={item.image} 
                            name={item.name}  
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSeller