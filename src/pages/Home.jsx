import { useContext, useRef } from 'react';
import handbagImg from '../assets/lotuysn.jpg';
 
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
import Cart from './Cart';
import ProductCard from './ProductCard';


{/**
const products = [
    {
      _id: 1,
      name: "Leather Handbag",
      category: "accessories",
      description: "Stylish leather handbag with ample storage space.",
      price: 79.99,
      oldPrice: 99.99,
      image: handbagImg  ,
      color: "black",
      rating: 4.5,
      author: "admin"
    },
    {
      _id: 2,
      name: "Leather Handbag",
      category: "accessories",
      description: "Stylish leather handbag with ample storage space.",
      price: 79.99,
      oldPrice: 99.99,
      image: handbagImg  ,
      color: "black",
      rating: 4.5,
      author: "admin"
    }
  ];
 */}



const Home = () => {
 
  const { products  } = useContext(AppContext);
  
  const cartRef = useRef();

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>

      {/* first Section  */}
      <section className='bg-gradient-to-br from-pink-100 to-white min-h-[20vh] flex flex-col justify-center items-center text-center p-10 '>
        <h1 className='text-4xl md:text-6xl font-extrabold text-pink-700'>রোদে পোড়া ত্বক, ব্রণের দাগ, ফ্যাকাসে ভাব — সবকিছুর একটাই সমাধান, গ্লুটা কোলাজেন পিঙ্ক জুস</h1>
        <p className='text-xl mt-4 text-gray-700 max-w-xl font-semibold'>Premium beauty tools delivered to your doorstep with cash on delivery.</p>

        <div className='mt-6 p-2 items-center flex justify-center flex-col   bg-transparent   shadow-xl border-4 border-pink-300'>
          <img
            src={handbagImg}
            alt='Product'
            className=' w-85 border object-cover  '
          /> 
          <div  onClick={scrollToCart} className='mt-6 bg-pink-600 hover:bg-pink-700 w-52 text-white px-8 py-4 rounded-full transition cursor-pointer text-xl'>🛒 অর্ডার করুন</div>
        </div>

       
      </section>


      {/* second Section  */}

      <section className='min-h-[20vh] flex flex-col justify-center items-center text-center p-10 bg-pink-200 from-pink-100 to-white'>

        <div className='bg-white p-1 rounded-br-full rounded-tl-full '>
          <p className='  border text-lg text-white font-bold bg-pink-400 pr-16 pl-20 pt-4 pb-4 rounded-br-full rounded-tl-full'>অগ্রিম একটি টাকা ছাড়া সারা বাংলাদেশ হোম ডেলিভারি</p>
         </div>
         
        <p className='font-bold text-2xl text-black m-5'>"সব পণ্যে <span className='text-pink-500 font-bold text-3xl'>৫০%</span>  ছাড়"</p>
       
        <div  className='bg-white p-1  mt-4 rounded-full' >
           <button onClick={scrollToCart} className=' bg-pink-600 hover:bg-pink-700 w-80 text-white px-8 py-4 rounded-full transition cursor-pointer text-xl'>🛒 এখনই অর্ডার করুন</button>
        </div>
       
      </section>


      {/* third Section  */}

      <section className='p-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Our Products</h2>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {products.map(p => <ProductCard key={p._id} product={p} cartRef={cartRef} />)}
        </div>
        <ProductCard />
 
        
      </section>


      {/* fourth Section  */}

      <section className='bg-pink-600 min-h-[20vh] pt-5'>

        <div className='bg-white p-0.5 rounded-br-full rounded-tl-full m-2 '>
          <p className='  border text-lg text-white font-bold bg-red-700 pr-16 pl-20 pt-4 pb-4 rounded-br-full rounded-tl-full'>Gluta Collagen Pink Dietary Supplement এর উপকারিতা:</p>
         </div>
         <div>
          <ul className='list-disc list-inside text-white p-6 space-y-2 font-bold text-xl'>
            <li className='border-b-2 p-2  border-slate-400 '>উজ্জ্বল ত্বকের উন্নতি করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>কালো দাগ, রঙ্গকতা এবং অসম ত্বকের রঙ কমায়।</li>
            <li className='border-b-2 p-2 border-slate-400'>ত্বকের স্থিতিস্থাপকতা এবং হাইড্রেশন উন্নত করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>জয়েন্ট এবং হাড়ের স্বাস্থ্যকে সমর্থন করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>চুল এবং নখকে শক্তিশালী করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>সামগ্রিক অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা বৃদ্ধি করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>একটি শক্তিশালী অ্যান্টিঅক্সিডেন্ট যা শরীরকে বিষমুক্ত করতে, ত্বকের রঙ হালকা করতে এবং অক্সিডেটিভ স্ট্রেস থেকে রক্ষা করতে সাহায্য করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>একটি কাঠামোগত প্রোটিন যা ত্বকের স্থিতিস্থাপকতা উন্নত করে, বলিরেখা কমায় এবং জয়েন্ট ও হাড়ের স্বাস্থ্যকে সমর্থন করে।</li>
            <li className='border-b-2 p-2 border-slate-400'>শোষণ এবং কার্যকারিতা বৃদ্ধির জন্য ভিটামিন (যেমন, ভিটামিন সি, ই) এবং খনিজ পদার্থ অন্তর্ভুক্ত থাকতে পারে।</li>
          </ul>

          <div className='  flex justify-center'>
             <p className='bg-white p-1  m-3 rounded-full' >
           <button onClick={scrollToCart} className=' bg-orange-600 hover:bg-pink-700 w-100% text-white px-8 py-4 rounded-full transition cursor-pointer text-xl'>🛒 এখনই অর্ডার করুন</button>
           </p>
          </div>

         


         </div>

      </section>


       <div ref={cartRef}>
          <Cart inlineMode={true} />
        </div>
          <Footer/>
    </div>
  );
}

export default Home;