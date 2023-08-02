import React from 'react'
import { NavLink } from 'react-router-dom'
import ladybug from '../../../asset/service/ladybug.png'
import './Error.css'
const Error = () => {
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center textbg">
                    <span className='move-me move-me-3'> <img src={ladybug} alt="" className='w-50 bg-none'/></span>
                    <h1 className="display-1 fw-bold">404</h1>
                    <h3 className="fs-1"> <span className=" me-2">Opps!</span>Page not found.</h3>
                    <h4 className="lead text-dark mt-3">
                        The Page you’re looking for doesn’t exist.
                    </h4>
                    <div className='mt-5'>
                    <NavLink to='/' className="btnError rounded-pill">Go Back Home</NavLink>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Error
