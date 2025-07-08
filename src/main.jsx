import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <AppContextProvider>
       <App />
    </AppContextProvider>
       
  </CartProvider>

  </BrowserRouter>,
)
