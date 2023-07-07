import React from "react";
import "./Service.css";
import serviceimg from "../../asset/service/serviceimg.png";
import { Button, Row, Col } from "react-bootstrap";

import serviceImage from '../../asset/serviceImage.png'
import check from '../../asset/check.png'
import Ecllipse from '../../asset/Ellipse 5.png'
// import circle1 from '../asset/circle1.png'
import circle2 from '../../asset/circle2.png'
import circle3 from '../../asset/circle3.png'
// import circle4 from '../asset/circle4.png'
import circle5 from '../../asset/circle5.png'
import circle6 from '../../asset/circle6.png'
const Service = () => {
  return (
    <div className="bg-light">
      <section>
        <Row className="mx-auto ">
          <Col xxl={10}  xl={10}  lg={10} className="text-center mx-auto text-black mt-5 pb-3 pt-4">
            <h1 className="ourService">Our Services</h1>
          </Col>
          </Row>
          <Row className="mx-auto">
          <Col xxl={11}  xl={12}  lg={11}  md={12} className="d-flex justify-content-evenly mx-auto mt-5">
            <Col  xxl={3}  xl={3}  lg={5}  md={5}   className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt=""/>
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9}   className="text-center mx-auto">
              <h2 class="text-black my-5 service_text">Web & Graphic Design</h2>
              </Col>
              <Col lg={11}  xl={10}  md={10} className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
                  Every company is unique and therefore <br />
                  each design we create will reflect the client’s requirements
                  and characteristics. <br />
                  From simple to complex, our website design team will create,
                  host, and update the site for you.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
            <Col  md={5} xxl={3}  xl={3}  lg={5}  className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt=""/>
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9} className="text-center mx-auto">
                <h2 class="text-black my-5 service_text">Web Development</h2>
              </Col>
              <Col lg={11}  xl={10} xxl={11}  md={10}  className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
                  We have developed several website as per customer
                  requirements. We have an expert team of web developers, web
                  programmers which delivers pioneering website programming
                  services at a variety of web programming platform.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
            <Col  md={5} xxl={3}  xl={3}  lg={5}   className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt=""/>
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9} className="text-center mx-auto">
                <h2 class="text-black my-5 service_text">
                  Industrial Training
                </h2>
              </Col>
              <Col lg={11}  xl={10}  md={10} className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
                  AppieSoft Web Solutions, Mohali (Chandigarh) offers 6 Months/3
                  Months/6 weeks Industrial training for B.Tech (All
                  Branches)/MCA/M.Sc (IT)/ Polytechnic Diploma (All Branches),
                  MBA, BBA, B.Voc and other
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
          </Col>
          <Col xxl={11}  xl={12}  lg={11}  md={12} className="d-flex justify-content-evenly mx-auto mt-5 pt-5">
            <Col xxl={3}  xl={3}  lg={5}  md={5}   className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt=""/>
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9}   className="text-center mx-auto">
              <h2 class="text-black my-5 service_text">Ecommerce Websites</h2>
              </Col>
              <Col lg={11}  xl={10} xxl={11} md={10} className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
              It is our experienced and skilled Ecommerce website
                  development team that will effectively evaluate your business
                  needs, offering perfectly tailored solutions for your design,
                  development, Ecommerce and data needs.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
            <Col  md={5} xxl={3}  xl={3}  lg={5}  className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt="" />
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9} className="text-center mx-auto">
                <h2 class="text-black my-5 service_text">Apps Development</h2>
              </Col>
              <Col lg={11}  xl={10} xxl={11} md={10}  className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
              Mobile application is the latest to join the technology
                  revolution.We’ll take you through the basics of Android
                  Studio, the default integrated development environment (IDE)
                  supported by Google to develop Android apps.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
            <Col  md={5} xxl={3}  xl={3}  lg={5}   className="card_bg">
              <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                <div class="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img ">
                  <img src={serviceimg} alt=""/>
                </div>
              </Col>
              <Col  md={9} xxl={9}  xl={9}  lg={9} className="text-center mx-auto">
                <h2 class="text-black my-5 service_text">
                Search Engine Optimization
                </h2>
              </Col>
              <Col lg={11}  xl={10} xxl={11} md={10} className="text-center mx-auto">
              <p class="service_para mb-4 text-black">
              Our deep knowledge about keyword and market research, SEO PR,
                  link building, content marketing,social media promotion,
                  infographics, onpage and offpage SEO, makes us capable of
                  delivering you the best search engine optimization results.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5">
                  Read More
                </Button>
              </Col>
            </Col>
          </Col>
        </Row>
      </section>

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
                                <span><img src={circle2} alt="" /></span>
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
                                <span><img src={circle3} alt="" /></span>
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
    </div>
  );
};

export default Service;
