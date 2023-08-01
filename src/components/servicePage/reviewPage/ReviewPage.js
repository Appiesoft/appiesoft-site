import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import star from '../../../asset/star.png'
import customer1 from '../../../asset/customer1.png'
import googlereview from '../../../asset/googlereview.png'
import './Reviewpage.css'
const ReviewPage = () => {
 
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
    const images = [
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
        { url: customer1, url2:star, title: 'Sophie Moore', para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus." },
    ]
    return (
        <div>
                  <section className='section_bg'>
                <div class="container px-5 py-5 mx-auto">
                    <div className='inner_head_line text-center'>
                        <h4>What Our Clients Say</h4>
                    </div>
                    <div className='googleImg mt-4 mb-5 text-center  d-flex justify-content-center'>
                        <img src={googlereview} alt="" />
                    </div>
                <Carousel
                    className='pt-3 pt-md-0'
                    infinite={true}
                    responsive={responsive}
                >
                      {images.map((importImg, index) => {                                               
                        return (
                            <Row>
                        <Col lg={12} className='d-flex justify-content-evenly flex-wrap'>
                            <Col lg={12} >
                                <Row class='mx-auto'>
                                    <Col className='bg_white_card p-md-3 p-3 mx-3 my-1 rounded-4'>
                                        <Col lg={12} className='d-flex'>
                                            <Col lg={4}>
                                                <img src={importImg.url} alt="" />
                                            </Col>
                                            <Col lg={8} className='align-self-center'>
                                                <h2 class="">{importImg.title}
                                                </h2>
                                                <span>
                                                    <img src={importImg.url2} alt="" />
                                                </span>
                                            </Col>
                                        </Col>
                                        <Col lg={12} className='mt-3'>
                                            <p>{importImg.para}</p>
                                        </Col>
                                    </Col>
                                </Row>
                            </Col>
                            </Col>
                            </Row>
                            )
                    })}
                </Carousel>
   
                </div>
            </section>
        </div>
    )
}

export default ReviewPage