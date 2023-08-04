import React from "react";
import "./MainSection.css";
import { Col, Row, Container } from "react-bootstrap";
import fourimgg from "../../asset/herosection/fourimgg.png";
import { NavLink } from "react-router-dom";
const MainSection = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <Container >
          <Row className="mx-auto">
            <Col md={12} lg={12} xl={11} xxl={12} className="px-0 mx-auto">
                <h1 className="text-white text-md-center text-lg-start">
                  Web & Graphic <br /> That<span className="ms-3">Design</span>
                </h1>
                <h2 className="text-white text-md-center text-lg-start mt-3">
                  Our aim is to keep design professional, clear and
                  <br />
                  crisp, easy to navigate and quick to download.
                </h2>
                <h2 className="text-white text-md-center text-lg-start mt-5">
                  From simple to complex, our website design team <br />
                  will create, host, and update the site for you.
                </h2>
                <div className="d-flex justify-content-md-center justify-content-lg-start">
                <NavLink to='/contact' >
                  <button className="graphic_button mt-4">
                    Talk To An Expert Now
                  </button></NavLink>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="bg-ligt">
        <section className="d-flex align-items-center pt-5 bg-light">
          <div className="container mt-5 ">
            <Row className="bg-light mx-auto">
              <Col lg={6} >
                <img src={fourimgg} className="image_position" alt="" />
              </Col>
              <Col lg={6} className=" py-3 my-3 my-lg-5 px-0 main_content px-md-4 px-lg-0 text-center text-lg-start">
                <h6 className="head_line text-center text-lg-start">Welcome To</h6>
                <h4 className="inner_head_line my-xxl-5 my-xl-3 my-lg-3 mt-md-3 mt-3 text-center text-lg-start">
                  AppieSoft Web Solutions
                </h4>
                <p className="inner_paragraph_head mt-2 mt-lg-4 text-center text-lg-start">
                  Passion, Dedication and A lot of Coffee.
                </p>

                <p className="inner_paragraph mt-lg-4 mt-md-3  mt-sm-3 text-center text-lg-start">
                  We at Appiesoft Web Solutions are answering real business
                  challenges for our clients through innovation and deep
                  industry knowledge. <br /> Appiesoft Web Solutions is a team
                  of Digital Marketing experts, Website Designers, and
                  Developers that understand the value of your Brand or Product.
                  As a Digital Marketing expert/Website Design and Development
                  organization, we have finished 500+ projects over the world.
                </p>

                <p className="inner_paragraph mt-3 pt-3 pt-sm-0 mt-sm-2 text-center text-lg-start">
                  We are energetic about creating Brand value and Development
                  and this nearly keep running into our veins. We are altogether
                  dedicated toward our work, looking for chances to make stylish
                  items over the advanced range.
                </p>
                <NavLink to='/about' >
                <button className=" appisoft_button text-white mt-4 py-2">
                  Read More
                </button></NavLink>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainSection;
