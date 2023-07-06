import React from 'react'
// import roundmail from '../asset/roundmail.png'
// import calllogo from '../asset/calllogo.png'
import location from '../asset/location.png'
import mainlogo from '../asset/mainlogo.png'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer class="bg_footer_color">
                <div class="flex justify-content-evenly md:text-left pt-5  order-first">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
                        <div class="h-full flex items-center  rounded-lg">
                            {/* <img alt="team" class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4" src={roundmail} /> */}
                            <div class="flex-grow">
                                <h2 class=" footer_info">SEND YOUR MESSAGE</h2>
                                <p class="text-white inner_footer_info">sales@telcoict.com.au</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
                        <div class="h-full flex items-center rounded-lg">
                            {/* <img alt="team" class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4" src={calllogo} /> */}
                            <div class="flex-grow">
                                <h2 class=" footer_info">CALL US</h2>
                                <p class="text-white inner_footer_info">1300 414 214</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
                        <div class="h-full flex items-center  rounded-lg">
                            <img alt="team" class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4" src={location} />
                            <div class="flex-grow">
                                <h2 class="inner_footer_info text-white">395 High St, Ashburton VIC 3147, Australia</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-right text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full ps-5">
                            <h2 class="text-white text-start mb-3 head_links">Quick Links</h2>
                            <nav class="list-none mb-10 text-start inner_links">
                                <li className='my-2'>
                                    <a>Home </a>
                                </li>
                                <li>
                                    <a >About Us </a>
                                </li>
                                <li className='my-2'>
                                    <a>Case Studies</a>
                                </li>
                                <li>
                                    <a >Blog</a>
                                </li>
                                <li className='my-2'>
                                    <a>Contact Us</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class=" text-white text-start head_links mb-3">Managed IT</h2>
                            <nav class="list-none mb-10 inner_links text-start">
                                <li className='my-2'>
                                    <a >ICT Consulting Services </a>
                                </li>
                                <li>
                                    <a>Cloud Collaboration Services</a>
                                </li>
                                <li className='my-2'>
                                    <a >Office 365 Services</a>
                                </li>
                                <li>
                                    <a >Office Phone System</a>
                                </li>
                                <li className='my-2'>
                                    <a>Managed Firewalls Services</a>
                                </li>
                                <li>
                                    <a >IT Helpdesk</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-1">
                            <h2 class="text-white text-start head_links mb-3">Communications</h2>
                            <nav class="list-none mb-10 inner_links text-start">
                                <li className='my-2'>
                                    <a >Telstra Business Partner</a>
                                </li>
                                <li>
                                    <a >3CX Apps & Integration</a>
                                </li>
                                <li className='my-2'>
                                    <a >Office 365 Enterprise Mobility Management</a>
                                </li>
                                <li>
                                    <a >Business Phone Systems</a>
                                </li>
                                <li className='my-2'>
                                    <a >Ericson LG iPECS</a>
                                </li>
                                <li>
                                    <a >NBN + Telstra Fibre</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full  ps-5">
                            <h2 class=" text-white text-start head_links  mb-3">Digital Strategy</h2>
                            <nav class="list-none mb-10  inner_links text-start">
                                <li className='my-2'>
                                    <a >Website Development</a>
                                </li>
                                <li>
                                    <a>Search Engine Optimisation</a>
                                </li>
                                <li className='my-2'>
                                    <a >Google Ad Words</a>
                                </li>
                                <li>
                                    <a >E-Commerce S</a>
                                </li>
                                <li className='my-2'>
                                    <a>Social Media</a>
                                </li>
                                <li>
                                    <a >Mobile App Creation</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src={mainlogo} alt="" />
                    </div>
                    <div className='flex justify-center text-white mt-3'>
                        <div className=''>© 2023, TELCO ICT . All Rights Reserved.   |   Privacy Policy   |   Terms & Conditions.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
