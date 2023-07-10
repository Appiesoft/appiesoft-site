import React from "react";
import { Col, Row, Container } from "react-bootstrap";
// import roundmail from '../asset/roundmail.png'
// import calllogo from '../asset/calllogo.png'
import location from "../../asset/location.png";
import mapp from "../../asset/header/map.png"
import mainlogoappie from "../../asset/mainlogoappie.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="bg_footer_color">
        <section>
          <Container>
            <Row>
              <Col lg={12} className='d-flex justify-content-evenly border-bottom py-5 my-5'>
                <Col lg={4}>
                  <div class="d-flex items-center  rounded-lg">
                    <img alt="team" class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-full mr-4" src={location} />
                    <div class="flex-grow">
                      <h2 class=" footer_info">SEND YOUR MESSAGE</h2>
                      <p class="text-white inner_footer_info">
                        info@appiesoftwebsolutions.com
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div class="d-flex items-center rounded-lg">
                    <img alt="team" class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-full mr-4" src={location} />
                    <div class="flex-grow">
                      <h2 class=" footer_info">CALL US</h2>
                      <p class="text-white inner_footer_info">+91-8847249971</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div class="d-flex items-center  rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={location}
                    />
                    <div class="flex-grow">
                      <h2 class="inner_footer_info text-white">
                        SCF 80 FF, Phase 11, Sector 65, Sahibzada Ajit Singh Nagar,
                        Punjab 160065
                      </h2>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className='mx-auto'>
              <Col lg={12} className="d-flex justify-content-evenly">
                <Col lg={4}>
                  <img src={mainlogoappie} alt="" className="rounded-2" />
                  <p className="img_para  w-75 text-start mt-4">
                    We are energetic about
                    creating Brand value and
                    Development and this
                    nearly keep running into
                    our veins. We are altogether
                    dedicated toward our work,
                    looking for chances to make
                    stylish items over the
                    advanced range
                  </p>
                </Col>
                <Col lg={2}>
                  <h2 class="text-white text-start mb-3 head_links">Quick Links</h2>
                  <nav class="list-none mb-10 text-start inner_links">
                    <li className="my-2">
                      <a>Home </a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                    <li className="my-2">
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Our Works</a>
                    </li>
                    <li className="my-2">
                      <a>Testimonials</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                  </nav>
                </Col>
                <Col lg={2}>
                  <h2 class=" text-white text-start head_links mb-3">Services</h2>
                  <nav class="list-none mb-10 inner_links text-start">
                    <li className="my-2">
                      <a>Web Development</a>
                    </li>
                    <li>
                      <a>Web & Graphics Design</a>
                    </li>
                    <li className="my-2">
                      <a>Ecommerce Websites</a>
                    </li>
                    <li>
                      <a>Apps Development</a>
                    </li>
                    <li className="my-2">
                      <a>Search Engine Optimization</a>
                    </li>
                    <li>
                      <a>Industrial Training</a>
                    </li>
                  </nav>
                </Col>
                <Col lg={3}>
                  <h2 class="text-white text-start head_links mb-3">
                    Our Location
                  </h2>
                  <img src={mapp} alt="" />
                </Col>
              </Col>
              <div className="text-white text-center border-top my-5">
                <div className="mt-5" >
                  Copyright © 2023 Appiesoft Web Solutions Pvt Ltd. All rights reserved.
                </div>
                <p className="text-center mt-3">
                  <span>
                    <i className="fa fa-facebook mx-3 text-white" aria-hidden="true">
                    </i>
                  </span>
                  <span>
                    <i class="fa-brands fa-instagram text-white"></i>
                  </span>
                </p>
              </div>
            </Row>
          </Container>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
