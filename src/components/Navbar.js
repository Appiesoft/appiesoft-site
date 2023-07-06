import React from 'react'
import "./Navbar.css"
import mainlogo from '../asset/mainlogo.png'
import maillogo from '../asset/maillogo.png'
import phonelogo from '../asset/phonelogo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="upper_navbar pt-4 pb-5 navbar navbar-expand-lg">
                <div className="container pb-3">
                    <div className="row w-100 align-items-center d-flex mx-auto">
                        <div className="col-auto px-0">
                            <img src={mainlogo} alt="" />

                        </div>
                        <div className='col-auto ms-auto'>
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className='d-flex'>
                                    <span className='mt-1'><img src={maillogo} alt="" /></span> <h6 className='ms-2 text-white upper_navbar_text'>sales@telcoict.com.au</h6>
                                </li>
                                <li className='d-flex ms-4'>
                                    <span><img src={phonelogo} alt="" /></span> <h6 className='ms-2 text-white upper_navbar_text'>1300 414 214</h6>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
