import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
//import { toast } from "react-toastify";

export const AppContext = createContext () 

const AppContextProvider = (props) => {

  
  const backendUrl = import.meta.env.VITE_BACKEND_URL
   const [products , setProducts ] = useState([])
   const [orders , setOrders ] = useState({})


   const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') :'')


   const  getAllProduct = async () => {
    try {
        const {data} = await axios.get(backendUrl + '/api/get-product' )

        if (data.success) {
           setProducts(data.products)
            // console.log(data.products )
        } else {
            console.log(data.message)
        }


    } catch (error) {
       console.log(error)
    }
  }



  const getAllOrder = async () => {
    try {
        const {data} = await axios.get(backendUrl + '/api/admin/get-order' )
      
        if (data.success) {
           setOrders(data.order)
    
        } else {
            console.log(data.message)
        }


    } catch (error) {
       console.log(error)
    }
  }

   
 console.log(orders)


useEffect(() => {
  getAllProduct()

}, [ ])


useEffect(() => {
  getAllOrder()
 
}, [ ])



 //console.log(aToken)

  const value = {
    products ,
    setProducts ,
    backendUrl,
    setAToken,
    aToken,
    getAllProduct ,
    orders,
    setOrders,
    getAllOrder
  
  }




  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider