import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
 
import Cart from './pages/Cart'
 
import Home from './pages/Home'
 
 

const App = () => {
  return (
    <div >
     
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
        {/** <Route path='/login-admin' element={  <LoginAdmin/>  } />

        <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-product' element={<Add />} />
              <Route path='update-product' element={<Update />} />
              <Route path='order-list' element={ <OrderList/>} />
        </Route>*/} 
        
 
      
      </Routes>
    </div>
  )
}

export default App