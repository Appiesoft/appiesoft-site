import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './Contact.css'
const Contact = () => {
    return (

        <div className='container input_field my-5'>
            <div className='row mx-auto'>
                <Col lg={12} className='d-flex justify-content-around'>
                    <Col lg={5}>
                        <Card className='bg_sub_banner rounded-4 py-4  px-3'>
                            <div className='row mx-auto'>
                                <div className="col-12 pb-3">
                                    <p className='mb-3 contact_title'>Contact Us</p>
                                    <h1 className='m-0 text-white Talk_size'>
                                        Let’s Talk
                                    </h1>
                                </div>
                                <div className='col-12 d-flex align-items-center justify-content-between'>
                                    <div class="mb-3 me-3 input_field_names">
                                        <input type="text" className=" bg-transparent border-bottom py-2" placeholder="Your Name" />
                                    </div>
                                    <div class="mb-3 ms-3 input_field_names border-bottom">

                                        <select className='py-2'>
                                            <option value="" hidden>Select a Service</option>
                                            <option value="saab">Web Development</option>
                                            <option value="opel">Web & Graphics Design</option>
                                            <option value="audi">Ecommerce Websites</option>
                                            <option value="audi">Apps Development</option>
                                            <option value="audi">Search Engine Optimization</option>
                                            <option value="audi">Industrial Training</option>
                                        </select>

                                    </div>
                                </div>
                                <div className='col-12 d-flex align-items-center justify-content-between'>
                                    <div class="mb-3 me-3 input_field_names">
                                        <input type="number" class=" bg-transparent border-bottom py-2" placeholder="Phone Number" />
                                    </div>
                                    <div class="mb-3 ms-3 input_field_names">
                                        <input type="email" class="border-bottom  bg-transparent py-2" placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className='card_title'>
                                    <h5 className='my-4'>
                                        My Preference:
                                    </h5>
                                    <div className='d-flex my-2'>
                                        <input type="checkbox" className='me-3 mt-1' /> <h5> Managed IT</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <input type="checkbox" className='me-3 mt-1' />  <h5>Communication</h5>
                                    </div>
                                    <div className='d-flex my-2'>
                                        <input type="checkbox" className='me-3 mt-1' /> <h5>Digital Strategy</h5>
                                    </div>
                                    <div>
                                        <button className='contact_btn px-3 py-2 rounded-2  mt-4 mb-2'>Send More Information Please</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={5} className='modify_content align-self-center'>
                        <h1>
                            Common Question
                        </h1>
                        <div className='d-flex justify-content-between rounded-2'>
                            <h2>
                                Do you outcome your work overseas?
                            </h2>
                            <h2>
                                <i class="fa-solid fa-plus"></i>
                            </h2>
                        </div>
                        <div className='d-flex justify-content-between rounded-2'>
                            <h2>
                                Is your support 24 hours?
                            </h2>
                            <h2>
                                <i class="fa-solid fa-plus"></i>
                            </h2>
                        </div>
                        <div className='d-flex justify-content-between rounded-2'>
                            <h2>
                                Are your service customised for my bussiness?
                            </h2>
                            <h2>
                                <i class="fa-solid fa-plus"></i>
                            </h2>
                        </div>
                        <div className='d-flex justify-content-between rounded-2'>
                            <h2>
                                Are your service expensive?
                            </h2>
                            <h2>
                                <i class="fa-solid fa-plus"></i>
                            </h2>
                        </div>
                        <p>
                            Follow Us: <span><i class="fa fa-facebook mx-3" aria-hidden="true"></i>
                            </span> <span><i class="fa-brands fa-instagram "></i></span>
                        </p>
                    </Col>

                </Col>
            </div>
        </div>

    )
}

export default Contact
