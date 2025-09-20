// App.jsx - Responsive Layout
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import './style/App.css'

const App = () => {
  return (
    <div className='app-container'>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </main>
    </div>
  )
}

export default App