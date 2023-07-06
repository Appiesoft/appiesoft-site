import React from 'react'
import "./InnerNavbar.css"
const InnerNavbar = () => {
    return (
        <div className='container position-relative'>
            <nav class="navbar navbar-expand-lg inner_navbar  position-absolute bg-white navbar-light bg-white mx-auto rounded-1 py-3">
                <div class="container-fluid">
                    <div className='row w-100 d-flex align-items-center justify-content-around'>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a className='text-decoration-none text-capitalize navbar_linkFont '>Home</a>
                            <div className="hover_box"></div>
                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a className='text-decoration-none text-capitalize navbar_linkFont'>about us</a>
                            <div className="hover_box"></div>

                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a className='text-decoration-none text-capitalize navbar_linkFont'>Case Studies</a>
                            <div className="hover_box"></div>

                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a class="nav-link dropdown-toggle text-decoration-none text-capitalize navbar_linkFont" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Managed IT
                            </a>
                            <div className="hover_box"></div>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" >Action</a>
                                <a class="dropdown-item" >Another action</a>
                                <a class="dropdown-item" >Something else here</a>
                            </div>
                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a class="nav-link dropdown-toggle text-decoration-none text-capitalize navbar_linkFont" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Communications                            </a>
                            <div className="hover_box"></div>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" >Action</a>
                                <a class="dropdown-item" >Another action</a>
                                <a class="dropdown-item" >Something else here</a>
                            </div>
                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a class="nav-link dropdown-toggle text-decoration-none text-capitalize navbar_linkFont" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Digital Strategy
                            </a>
                            <div className="hover_box"></div>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" >Action</a>
                                <a class="dropdown-item" >Another action</a>
                                <a class="dropdown-item" >Something else here</a>
                            </div>
                        </div>
                        <div className='col-auto mx-auto parent_link px-0'>
                            <a className='text-decoration-none text-decoration-none text-capitalize navbar_linkFont'>Contact Us</a>
                            <div className="hover_box"></div>

                        </div>

                        <div className="col-auto">
                            <button className='main_button text-white rounded-2 py-3 px-3 border-0'>Talk To An Expert Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default InnerNavbar
