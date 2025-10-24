import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({product , cartRef }) => {

    const {addToCart} = useContext(CartContext);

    if (!product) return null; //
    //  prevents crashing on undefined
 //const cartRef = useRef();

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
     

   // console.log(product)
    
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition'>
      <img src={product.image} alt={product.name} className='w-full h-52 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-bold text-gray-800'>{product.name}</h3>
        <p className='text-gray-600 text-sm mt-1'>{product.description}</p>
        <p className='text-pink-700 font-semibold text-lg mt-2'>৳{product.price}</p>
        <button
          onClick={() => {
            
            addToCart(product) 
    }}
          className='mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded w-full transition'>
           🛒 অর্ডার করুন
        </button>
      </div>
    </div>
  )
}

export default ProductCard
