import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SellerDash from './pages/SellerDash'
import BuyerDash from './pages/BuyerDash'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/seller/profile' element={<SellerDash/>}/>
    <Route path='/buyer/profile' element={<BuyerDash/>}/>
    
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
