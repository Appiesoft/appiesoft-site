import React from 'react'
import { Col, Row } from 'react-bootstrap'
import fourimg from '../asset/fourimg.png'
import './ItcGroup.css'
import check from '../asset/check.png'
const ItcGroup = () => {
    return (
        <div className='bg-ligt'>
            <section class="d-flex align-items-center pt-5 bg-light">
                <div className='container mt-5 '>
                    <Row className='bg-light'>
                        <div className="row">
                            <Col lg={6} className="position-relative">
                                <img src={fourimg} className="image_position" alt="" />
                            </Col>
                            <Col lg={6} className="position-absolu py-5 my-5 px-0 main_content">
                                <h6 className='head_line'>Welcome To</h6>
                                <h4 className='inner_head_line mt-3'>Telco ICT Group</h4>
                                <p className='inner_paragraph mt-4'>Telco ICT was set up to help business make technology work for them.</p>

                                <p className='inner_paragraph mt-4'> We believe that technology should enable you to do business faster and more easily than before your put it in place. Often technology is too complex to be used effectively by your team. Sometimes businesses are sold ‘off the shelf software’ that doesn’t work for them. This is something we will never do.</p>

                                <p className='inner_paragraph mt-5'>  The technology we use is exactly what we would put our own money into if we were in your shoes.</p>
                                <p className='inner_paragraph mt-4'>
                                    Everything we help with you has one aim and that is to make your business life easier. There are many areas we can help including:</p>
                            </Col>
                        </div>
                        <div className="row">
                            <Col lg={6} className="bg-light  px-0 ms-auto">
                                <section className='bg-light pb-5'>
                                    <div className='d-flex inner_check_Content align-items-baseline me-3'><span className='me-2'><img src={check} /></span>Cloud migration</div>
                                    <div className='d-flex my-2 inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>Phone System</div>
                                    <div className='d-flex inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>Firewalls</div>
                                    <div className='d-flex my-2 inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>Microsoft Office 365</div>
                                    <div className='d-flex inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>MPLS ,SD-WAN,</div>
                                    <div className='d-flex my-2 inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>Video Conferencing</div>
                                    <div className='d-flex inner_check_Content  align-items-baseline'><span className='me-2'><img src={check} /></span>The full range of business products from Tesla including NBN.
                                    </div>
                                    <p className='inner_paragraph mt-4'>
                                        Our promise is that we can find and set up technology that makes doing business a lot more fun. Wouldn’t it be nice to be able to just rely on your tech working?

                                        <p className='inner_paragraph mt-4'>Making your business run smoother is our mission.</p>
                                    </p>
                                    <button className=' main_button rounded-2 border-0 text-white py-3 px-4 mt-4'>Read More</button>
                                </section>
                            </Col>
                        </div>
                    </Row>
                </div>
            </section>


        </div>
    )
}

export default ItcGroup