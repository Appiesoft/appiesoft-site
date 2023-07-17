import React from 'react'
import image2 from '../../../asset/image2.png'
import image6 from '../../../asset/image6.png'
import image3 from '../../../asset/image3.png'
import image4 from '../../../asset/image4.png'
import image7 from '../../../asset/image7.png'
import image8 from '../../../asset/image8.png'
import image11 from '../../../asset/image11.png'
import image12 from '../../../asset/image12.png'
import image5 from '../../../asset/image5.png'
import './OurPartners.css'
import { Col,Container,Row } from 'react-bootstrap'
const OurPartners = () => {
    return (
        <div>
            <section className='py-md-5 py-3'>
                <div class="container" data-aos="zoom-in">
                    <header class="inner_head_line text-center">
                        <h3>Our Trusted Partners</h3>
                    </header>
                    <Container>
           
                    <Row className="align-items-center flex-wrap">
                        <Col xxl={9} xl={11} lg={12} className=' py-4 mx-auto flex-wrap d-flex justify-content-evenly partner_img '>
                            <div className="col-auto">
                                <img src={image2} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={image8} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={image3} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto">
                                <img src={image4} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto mt-4">
                                <img src={image5} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto mt-4">
                                <img src={image6} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto mt-4">
                                <img src={image7} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto mt-4">
                                <img src={image11} class="img-fluid " alt="" />
                            </div>
                            <div className="col-auto mt-4">
                                <img src={image12} class="img-fluid " alt="" />
                            </div>

                        </Col>
                    </Row>
           
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default OurPartners
