import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {

    const {aToken} = useContext(AppContext)


  return  (
    <div  >
        
        {
            aToken ? <div className='min-h-screen bg-white border-r  flex  '>
                     <ul className='text-[#515151] mt-5'>
        
        <NavLink to={'/dashboard'} className='flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer'  >
                   
                    <p>Dashboard</p>
                </NavLink>
                <NavLink  to={'/dashboard/update-product'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  >
                 
                    <p>Update Product</p>
                </NavLink>
                <NavLink to={'/dashboard/add-product'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  >
                  
                    <p>Add Product</p>
                </NavLink>
                <NavLink to={'/dashboard/order-list'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  >
               
                    <p>Order List</p>
                </NavLink>
                 </ul>
                 <div>
                    <Outlet/>
                 </div>
            </div> : <div>Login first</div>
        }
  
    </div>
  )
}

export default Dashboard