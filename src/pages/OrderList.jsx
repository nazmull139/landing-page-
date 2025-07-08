import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const OrderList = () => {

    const { orders }  = useContext(AppContext)
        console.log(orders)



const handlePrint = (id) => {
    const printContents = document.getElementById(`print-order-${id}`).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // reload to restore React state (optional)
  };

  if (!Array.isArray(orders)) {
    return <p className='text-center text-gray-500'>Loading orders...</p>;
  }

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6 text-center text-pink-700'>📦 Order List</h1>

      {orders.length === 0 ? (
        <p className='text-center text-gray-600'>No orders found.</p>
      ) : (
        <div className='space-y-6'>
          {orders.map((order, index) => (
            <div key={order._id || index} className='bg-white p-6 rounded-lg shadow border relative'>
              {/* Printable Area */}
              <div id={`print-order-${order._id || index}`}>
                <div className='mb-4'>
                  <h2 className='text-lg font-semibold text-black'>{order.name} ({order.phone})</h2>
                  <p className='text-gray-600 text-sm whitespace-pre-line'>{order.address}</p>
                  <p className='text-sm text-gray-500'>🕒 {new Date(order.date).toLocaleString()}</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                  {order.product.map((item, i) => (
                    <div key={i} className='flex items-center space-x-4 bg-gray-50 p-3 rounded border'>
                      <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                      <div>
                        <p className='font-medium text-black'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>৳{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex justify-between text-gray-700 font-medium'>
                  <p>Delivery Fee: <span className='text-black'>৳{order.deliveryFee || 0}</span></p>
                  <p>Total: <span className='text-black'>৳{order.totalPrice}</span></p>
                  <p>Quantity: <span className='text-black'>{order.quantity}</span></p>
                </div>
              </div>

              {/* Print Button */}
              <button
                onClick={() => handlePrint(order._id || index)}
                className='absolute top-4 right-4 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 text-sm rounded shadow'>
                🖨️ Print
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderList