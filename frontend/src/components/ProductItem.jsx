import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    
    // Safely handle image data (array or string)
    const getImageUrl = () => {
        if (!image) return '/placeholder-image.jpg'; // Fallback for missing images
        if (Array.isArray(image)) return image[0]; // Use first image from array
        return image; // Use string directly
    };

    const imageUrl = getImageUrl();

    return (
        <Link className='text-gray-700 cursor-pointer block h-full' to={`/product/${id}`}>
            {/* Image container with fixed aspect ratio */}
            <div className='overflow-hidden rounded-lg mb-3 aspect-square bg-gray-100'>
                <img 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
                    src={imageUrl} 
                    alt={name}
                    onError={(e) => {
                        e.target.src = '/placeholder-image.jpg'; // Fallback on error
                    }}
                />
            </div>
            
            {/* Text content */}
            <div className='px-1'> {/* Added padding for text */}
                <p className='pt-2 pb-1 text-sm line-clamp-2'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </div>
        </Link>
    )
}

export default ProductItem;