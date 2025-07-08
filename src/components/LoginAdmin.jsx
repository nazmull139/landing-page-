import axios from 'axios'
import React, { useContext, useState } from 'react'
 
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const LoginAdmin = () => {

   
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const {setAToken,backendUrl} = useContext(AppContext)
    const navigate = useNavigate()

   
   const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {

    
        const {data} = await axios.post(backendUrl + '/api/admin/admin-login',{email, password})
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
          navigate('/dashboard')
          
        }  else {
          console.log(error)
        }
 

    } catch (error) {
      console.log(error)
    }
   }


  return (
     
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
          <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto'><span className='text-primary'> Admin</span> Login</p>
            <div className='w-full'>
              <p>Email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2  mt-1' type='email'  required />
            </div>
            <div className='w-full'>
              <p>Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2  mt-1' type='password' required />
            </div>
            <button  className='bg-primary text-black w-full py-2 rounded-md text-base'>Login</button>
     
          </div>
        </form>
    
  )
}

export default LoginAdmin