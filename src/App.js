import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import AboutUs from './components/header/linkPages/aboutUs/AboutUs'
const App = () => {
    return (
        <>
            <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/about" element={<AboutUs/>} />
    </Routes>
           
        </>
    )
}

export default App