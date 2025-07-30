import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Prodct from './pages/Prodct'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import About from './pages/About'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Vrify from './pages/Vrify'

const App = () => {

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <ToastContainer />
            <NavBar />
            <SearchBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:productId' element={<Prodct />} />
                <Route path='/placeorder' element={<PlaceOrder />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/about' element={<About />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/verify' element={<Vrify />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
