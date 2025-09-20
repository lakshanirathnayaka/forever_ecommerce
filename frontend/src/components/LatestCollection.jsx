import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Link } from 'react-router-dom';

// ProductItem Component
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img 
          className='hover:scale-110 transition ease-in-out duration-300 w-full h-48 object-cover' 
          src={image} 
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

// LatestCollection Component
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className='my-10 mx-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST '} text2={' COLLECTIONS'} />
          <p className='w-3/4 mx-auto my-4 text-gray-600'>
            No products available at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='my-10 mx-4 md:mx-10'>
      <div className='text-center py-8'>
        <Title text1={'LATEST '} text2={' COLLECTIONS'} />
        <p className='w-full md:w-3/4 mx-auto my-4 text-gray-600 text-sm md:text-base'>
          Lorem ipsum is simply dummy text of the printing and typesetting industry
        </p>
      </div>
      
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item) => (
          <ProductItem 
            key={item.id} 
            id={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;