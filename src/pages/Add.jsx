import axios from 'axios'
import React, { useContext, useState } from 'react'
 
import { AppContext } from '../context/AppContext'

const Add  = () => {


  const [docImg , setDocImg] = useState(false)
  const [name , setName] = useState('')
  const [description , setDescrption] = useState('')
  const [price , setPrice] = useState('')
  const [oldPrice , setOldPrice] = useState('')
 
  

  const { backendUrl  } = useContext(AppContext)
  //console.log(backendUrl)
 const onSubmitHandler = async (event) => {
  event.preventDefault()

  try {
    
   

    const formData = new FormData()

    formData.append('image', docImg)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('oldPrice', oldPrice)
    

    formData.forEach((value, key) => {
      //console.log( `${key}: ${value}`);
    });

    const {data} = await axios.post(backendUrl + '/api/add-product', formData  )
    console.log(data)
    if(data.success){
      console.log(data)
      setDocImg(false)
      setName('')
     
       
    } else{
      console.log(error.message)
    }

  } catch (error) {
  
     
  }
 
 }



  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>

        <p className='mb-3 text-lg font-medium'>Add Product</p>

        <div className='bg-white px-8  py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
          <div className='flex items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor='doc-img'>
             <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : 'assets.upload_area'} alt='' /> 
            </label>
            <input onChange={(e)=> setDocImg(e.target.files[0])} type='file' id='doc-img'  />
            <p>Upload doctor <br/> picture</p>
          </div>

          <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
            <div className='w-full lg:flex-1 flex flex-col gap-4'>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Doctor Name</p>
                <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3  py-2' type='text' placeholder='Enter  name' required />
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Description</p>
                <input onChange={(e)=> setDescrption(e.target.value)} value={description} className='border rounded px-3  py-2' type='text' placeholder='Enter Descripton' required />
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>  Price</p>
                <input onChange={(e)=> setPrice(e.target.value)} value={price}  className='border rounded px-3  py-2' type='number' placeholder='Enter Price ' required />
              </div>

     
              <div className='flex-1 flex flex-col gap-1'>
                <p>Old </p>
                <input onChange={(e)=> setOldPrice(e.target.value)} value={oldPrice} className='border rounded px-3  py-2' type='number' placeholder='Endter old' required />
              </div>
 
            </div>
            

     
          </div>

 
              <button type='submit' className='bg-primary px-10 py-3 mt-4   rounded-full'>Add product</button>


        </div>


    </form>
  )
}

export default Add 