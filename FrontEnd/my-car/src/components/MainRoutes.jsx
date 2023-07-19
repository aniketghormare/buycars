import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'
import PrivateRoutes from './PrivateRoutes'
import SingleProduct from '../Pages/SingleProduct'
import Dealer from '../Pages/Dealer'

const MainRoutes = () => {
  return (
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/singleproduct' element={<SingleProduct/>}/>
    <Route path='/dealer' element={<Dealer/>}/>
</Routes>
  )
}

export default MainRoutes