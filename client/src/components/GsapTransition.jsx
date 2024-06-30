import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import SellerDash from '../pages/SellerDash'
import BuyerDash from '../pages/BuyerDash'
import gsap from 'gsap'
import toast, {Toaster} from 'react-hot-toast'
const GsapTransition = () => {
    const nodeRef = useRef(null)
    const location = useLocation();

    useEffect(() => {
        if (nodeRef.current) {
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
            // toast.success("page changed")
        }
    }, [location])

    // FOR THE GSAP
    // 1) TARTGE
    // 2)LOGIC


    return (
        <div ref={nodeRef}>
            <Toaster/>
            <Routes location={location}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/seller/profile' element={<SellerDash />} />
                <Route path='/buyer/profile' element={<BuyerDash />} />

            </Routes>
        </div>
    )
}

export default GsapTransition
