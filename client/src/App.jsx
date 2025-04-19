import React from 'react'
import {Routes,Route, useLocation} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'
import Login from './components/Login'
import { useAppContext } from './context/appContext'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders.JSX'
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isSellerPath ? null : <NavBar/>}
      {showUserLogin ?<Login/> : null}
      <Toaster/>
     <div className={`${isSellerPath ? "": "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:category" element={<ProductCategory/>}/>
        <Route path="/products/:category/:id" element={<ProductDetails/>}/>
        <Route path="/add-address" element={<AddAddress/>}/>
        <Route path="/my-orders" element={<MyOrders/>}/>
      </Routes>
     </div>
     {isSellerPath ? null : <Footer/>}
    </div>
  )
}

export default App