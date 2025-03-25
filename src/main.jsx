import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Products from './pages/products/Products.jsx'
import Navbar from './layouts/navbar/Navbar.jsx'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./pages/cart/Cart.jsx";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<Navbar/>}>
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
