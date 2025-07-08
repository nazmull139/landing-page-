import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const { backendUrl } = useContext(AppContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  const deliveryFee = cart.length > 0 ? 100 : 0;

  const total = subtotal + deliveryFee;

  const navigate = useNavigate();

  // Customer form state
 //console.log(cart)

  const [form, setForm] = useState({ name: '', phone: '', address: '' });

   
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const orderData = {
          product: cart, // still sending array — update backend if needed
          date: Date.now(),
          name: form.name,
          phone: form.phone,
          address: form.address,
          totalPrice : total,
          deliveryFee: deliveryFee,
          quantity : cart.length // send quantity as number of items in cart
        };
    
        const { data } = await axios.post(backendUrl + '/api/admin/create-order', orderData); // match your backend route
    
        alert(data.message || 'Order placed successfully!');
        clearCart();
      } catch (err) {
        console.error(err);
        alert('Failed to place order.');
      }
    };
   

 

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <h1 className='text-xl font-bold mb-6 text-center bg-pink-600 hover:bg-pink-700  rounded-br-full rounded-tl-full text-white px-8 py-4  transition cursor-pointer  '>অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন👇</h1>

      {cart.length === 0 ? (
        <p className='text-center text-gray-600'>Your cart is empty.</p>
      ) : (
        <div className='grid md:grid-cols-3 gap-6'>
          {/* Order Items */}
          <div className='md:col-span-2 space-y-4'>
            <h2 className='text-xl font-semibold mb-2 text-black'>আপনার প্রোডাক্ট</h2>
            {cart.map((item, index) => (
              <div key={index} className='bg-white shadow rounded-lg p-4 flex gap-4 items-center'>
                <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded' />
                <div className='flex-1'>
                  <p className='font-bold'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>৳{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className='text-red-500 hover:underline'>Remove</button>
              </div>
            ))}
          </div>

          {/* Billing & Customer Details */}
          <div className='bg-white shadow rounded-lg p-4 space-y-4'>
            <h2 className='text-xl font-semibold'>Billing Details</h2>

            {/* Customer Form */}
 
                <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded shadow'>
                  <input type='text' placeholder='Full Name' required className='w-full p-3 border rounded' onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input type='tel' placeholder='Phone Number' required className='w-full p-3 border rounded' onChange={e => setForm({ ...form, phone: e.target.value })} />
                  <textarea placeholder='Full Address' required className='w-full p-3 border rounded' onChange={e => setForm({ ...form, address: e.target.value })}></textarea>
                 
                
          

            {/* Billing Summary */}
            <div className='text-gray-700 space-y-2'>
              <div className='flex justify-between'><span>Subtotal:</span><span>৳{subtotal}</span></div>
              <div className='flex justify-between'><span>Delivery Fee:</span><span>৳{deliveryFee}</span></div>
              <hr />
              <div className='flex justify-between font-bold text-lg'><span>Total:</span><span>৳{total}</span></div>
            </div>

            <button
              type='submit'
              className='w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded transition'>
              Confirm Order
            </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
