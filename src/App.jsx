import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginAdmin from './components/LoginAdmin'
import Add from './pages/Add'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import OrderList from './pages/OrderList'
import Update from './pages/Update'

const App = () => {
  return (
    <div className='text-red-500'>
     
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/login-admin' element={  <LoginAdmin/>  } />

        <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-product' element={<Add />} />
              <Route path='update-product' element={<Update />} />
              <Route path='order-list' element={ <OrderList/>} />
        </Route>
        
 
      
      </Routes>
    </div>
  )
}

export default App