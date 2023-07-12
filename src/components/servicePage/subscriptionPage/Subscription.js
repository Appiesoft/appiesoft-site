import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './Subscription.css'
const Subscription = () => {
    return (
        <div>
            <Row className="mx-auto py-5">
                <Col xxl={11} xl={12} lg={8} md={12} className="d-flex justify-content-center mx-auto mt-5 bg_sub_gap">
                    <Col xxl={3} xl={3} lg={5} md={5} className="card_bg">
                        <Col className="text-center mx-auto py-3 bg_sub_banner">
                            <h1>$1400</h1>
                        </Col>
                        <Col lg={12} className="text-center pt-2 mb-4 mt-4 sub_title">
                            <h1 >
                                FULL TIME
                            </h1>
                            <span>MONTHLY</span>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-start mx-auto">

                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    8 Hours day & 24 working Days in a Month.
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    Total :192 hours, period of Hiring : 1 Month with Billing
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    40% advance,60% at the mid of month.
                                </p>
                            </Col>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-center mx-auto">
                            <Button className="main_button border-0 px-4 mt-3 mb-5">
                                Contact Us
                            </Button>
                        </Col>

                    </Col>
                    <Col xxl={3} xl={3} lg={5} md={5} className="card_bg">
                        <Col className="text-center mx-auto py-3 bg_sub_banner">
                            <h1>$800</h1>
                        </Col>
                        <Col lg={12} className="text-center pt-2 mb-4 mt-4 sub_title">
                            <h1>
                                FULL TIME
                            </h1>
                            <span>2 WEEKS</span>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-start mx-auto">

                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    8 Hours day & 24 working Days in a Month.
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    Total :192 hours, period of Hiring : 1 Month with Billing
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    40% advance,60% at the mid of month.
                                </p>
                            </Col>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-center mx-auto">
                            <Button className="main_button border-0 px-4 mt-3 mb-5">
                                Contact Us
                            </Button>
                        </Col>

                    </Col>
                    <Col xxl={3} xl={3} lg={5} md={5} className="card_bg">
                        <Col className="text-center mx-auto py-3 bg_sub_banner">
                            <h1>$12/Hr</h1>
                        </Col>
                        <Col lg={12} className="text-center pt-2 mb-4 mt-4 sub_title">
                            <h1>
                                WEEKLY
                            </h1>
                            <span>(AS REQUIRED)</span>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-start mx-auto">

                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    8 Hours day & 24 working Days in a Month.
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    Total :192 hours, period of Hiring : 1 Month with Billing
                                </p>
                            </Col>
                            <Col className='d-flex'>
                                <span className='p-2 me-2'><i class="fa-solid fa-check"></i> </span><p class="subscription_para mb-4 text-black">
                                    40% advance,60% at the mid of month.
                                </p>
                            </Col>
                        </Col>
                        <Col lg={11} xl={10} md={10} className="text-center mx-auto">
                            <Button className="main_button border-0 px-4 mt-3 mb-5">
                                Contact Us
                            </Button>
                        </Col>

                    </Col>

                </Col>
            </Row>
        </div>
    )
}

export default Subscription
