import React from 'react'
import Component1 from '../../../asset/Component 1.png'
import Component2 from '../../../asset/Component 2.png'
import Component3 from '../../../asset/Component 3.png'
import Component4 from '../../../asset/Component 4.png'
import Component5 from '../../../asset/Component 5.png'
import Component7 from '../../../asset/Component 7.png'
import Component8 from '../../../asset/Component 8.png'
import Component9 from '../../../asset/Component 9.png'
import Component10 from '../../../asset/Component 10.png'
import Component6 from '../../../asset/Component 6.png'
import { Col, Row } from 'react-bootstrap'
import img1 from '../../../asset/img1.png'
import img2 from '../../../asset/img2.png'
import img3 from '../../../asset/img3.png'
import './OurClient.css'
const OurClient = () => {
    return (
        <div className='col-auto'>
            <section className='bg-light py-5 my-5'>
                <div className='text-center pt-5'>
                    <h6 className='head_line'>
                        Our clients
                    </h6>
                </div>
                <div className='text-center py-4'>
                    <h6 className='inner_head_line text-center'>
                        We Have The Pleasure Of Working With
                    </h6>
                </div>
                <div className='container pt-5' >
                    <Row>
                        <Col lg={12} className='flex-wrap d-flex justify-content-evenly '>
                            <div className='col-auto'>
                                <img src={Component1} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component2} className="img-fluid mt-5" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component3} className="img-fluid " alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component4} className="img-fluid mt-5" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component5} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component10} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component9} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component8} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component7} className="img-fluid" alt="" />
                            </div>
                            <div className='col-auto'>
                                <img src={Component6} className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='py-5 mb-5'>
                <div className="container mx-auto py-3">
                    <div className='head_line mb-3'>
                        <h6>News</h6>
                    </div>
                    <div className='inner_head_line d-flex justify-between'>
                        <h2>Advice on how to <br />
                            make your content.
                        </h2>
                        <div className='align-self-end'>
                            <button className='main_button py-3 text-white px-4 rounded-2'>
                                Explore All Resources
                            </button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div class="col-6 portfolio-item filter-app">
                            <div className='row mx-auto position-relative border_radius'>
                                <div className='col-12 px-0'>
                                    <img src={img3} class="img-fluid img_work" alt="" />
                                </div>
                                <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                    <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                    <h4 className='m-0 para_text mt-3'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 portfolio-item filter-app">
                            <div className="row">
                                <div className="col-12">
                                    <div className='row mx-auto position-relative border_radius'>
                                        <div className='col-12 px-0'>
                                            <img src={img1} class="img-fluid img_work" alt="" />
                                        </div>
                                        <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                            <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                            <h4 className='m-0 para_text mt-3'>
                                                Amet minim mollit non deserunt.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className='row mx-auto position-relative border_radius'>
                                        <div className='col-12 px-0'>
                                            <img src={img2} class="img-fluid img_work" alt="" />
                                        </div>
                                        <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                            <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                            <h4 className='m-0 para_text mt-3'>
                                                Amet minim mollit non deserunt.
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default OurClient