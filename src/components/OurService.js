import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import './OurService.css'
import serviceImage from '../asset/serviceImage.png'
import check from '../asset/check.png'
import Ecllipse from '../asset/Ellipse 5.png'
// import circle1 from '../asset/circle1.png'
import circle2 from '../asset/circle2.png'
import circle3 from '../asset/circle3.png'
// import circle4 from '../asset/circle4.png'
import circle5 from '../asset/circle5.png'
import circle6 from '../asset/circle6.png'
const OurService = () => {
    return (
        <div>
            <section>
                {/* <div >
                    <img src={serviceImage} alt="" className='position-relative' />
                </div> */}
                <Row className='position-absolute'>
                    <Col lg={6}>
                        {/* <section class="d-flex align-items-center">
                            <div className='col-10  mx-auto mt-3'>
                                <div class="container" data-aos="zoom-out" data-aos-delay="100">
                                    <h3 className='inner_head_line '>Our Service</h3>
                                    <p className='inner_service_para'>You shouldn’t have to spend a lot of time thinking about technology. It should just do you what you want it to do when you need it to.
                                    </p> <br />
                                    <p className='inner_service_para'> Our aim is to be the people behind the scenes that take that headache away for you.</p>
                                    <div class="d-flex">
                                        <Button className='main_button rounded-2 py-3 px-3 border-0 mt-4'>Talk To An Expert Now</Button>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                    </Col>
                    <Col lg={6}>

                    </Col>
                </Row>
                <div className='text-center mt-5'>
                    <h4 className='head_line'>
                        Why choose us
                    </h4>
                </div>
                <div>
                    <h4 className='inner_head_line text-center'>
                        6 Ways We Help
                    </h4>
                </div>
                <section id="why-us" class="why-us p-0 mt-4 mb-5" >
                    <div class="container">
                        <div class="row no-gutters overflow-hidden">
                            <div class="col-lg-4 col-md-6 p-4 border-start-0 content-item">
                                {/* <span><img src={circle1} alt="" /></span> */}
                                <p className='mt-3'>24 Hour Monitoring & <br />
                                    Support 365 Days A Year</p>
                            </div>
                            <div class="col-lg-4 col-md-6  p-4 content-item">
                                <span><img src={circle2} alt="" /></span>
                                <p className='mt-3'>Fixed Prices.<br />
                                    No Surprise Charges Ever</p>
                            </div>
                            <div class="col-lg-4 col-md-6 p-4  content-item">
                                <span><img src={circle3} alt="" /></span>
                                <p className='mt-3'>We Only Use<br />
                                    Certified Experts</p>
                            </div>
                            <div class="col-lg-4 col-md-6 p-4 border-bottom-0 border-start-0   content-item">
                                {/* <span><img src={circle4} alt="" /></span> */}
                                <p className='mt-3'>Access To Products You<br />
                                    Can’t Get Anywhere Else</p>
                            </div>
                            <div class="col-lg-4 col-md-6 p-4 border-bottom-0 content-item">
                                <span><img src={circle5} alt="" /></span>
                                <p className='mt-3'>Big Savings On<br />
                                    Hardware & Software</p>
                            </div>
                            <div class="col-lg-4 col-md-6 p-4 border-bottom-0 content-item">
                                <span ><img src={circle6} alt="" /></span>
                                <p className='mt-3'>Local People For Fast<br />
                                    Implementation</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default OurService