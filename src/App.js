import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import AboutUs from './components/header/linkPages/aboutUs/AboutUs'
import ContactUs from './components/header/linkPages/contactUs/ContactUs'
import OurWork from './components/header/linkPages/work/OurWork'
import Testimonial from './components/header/linkPages/testimonial/Testimonial'
const App = () => {
    return (
        <>
            <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/our-work" element={<OurWork/>} />
      <Route path="/testimonials" element={<Testimonial/>} />
    </Routes>
           
        </>
    )
}

export default App