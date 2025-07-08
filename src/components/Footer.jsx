import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-pink-600 text-white py-6 mt-10'>
            <div className='max-w-5xl mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='text-center md:text-left mb-4 md:mb-0'>
                <p className='text-sm'>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
               
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer