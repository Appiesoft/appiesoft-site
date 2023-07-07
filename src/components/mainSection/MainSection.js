import React from "react";
import "./MainSection.css";
import { Col, Row, Button, Container } from "react-bootstrap";
import fourimgg from "../../asset/herosection/fourimgg.png";
const MainSection = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <Container className="container_width">
          <Row className="mx-auto">
            <Col md={12} lg={12} xl={12} xxl={12} className="px-0">

              <h1 className="text-white">
                Web & Graphic <br /> That<span className="ms-3">Design</span>
              </h1>
              <h2 className="text-white mt-3">
                Our aim is to keep design professional, clear and
                <br />
                crisp, easy to navigate and quick to download.
              </h2>
              <h2 className="text-white mt-5">
                From simple to complex, our website design team <br />
                will create, host, and update the site for you.
              </h2>
              <div className="d-flex">
                <Button className="main_button rounded-2 py-3 px-3 border-0 mt-4">
                  Talk To An Expert Now
                </Button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
      <div className="bg-ligt">
      <section class="d-flex align-items-center pt-5 bg-light">
        <div className="container mt-5 ">
          <Row className="bg-light">
              <Col lg={6} className="position-relative">
                <img src={fourimgg} className="image_position" alt="" />
              </Col>
              <Col lg={6} className=" py-3 my-5 px-0 main_content">
                <h6 className="head_line">Welcome To</h6>
                <h4 className="inner_head_line my-5">
                  AppieSoft Web Solutions
                </h4>
                <p className="inner_paragraph_head mt-4">
                  Passion, Dedication and A lot of Coffee.
                </p>

                <p className="inner_paragraph mt-4">
                  We at Appiesoft Web Solutions are answering real business
                  challenges for our clients through innovation and deep
                  industry knowledge. <br/> Appiesoft Web Solutions is a team of
                  Digital Marketing experts, Website Designers, and Developers
                  that understand the value of your Brand or Product. As a
                  Digital Marketing expert/Website Design and Development
                  organization, we have finished 500+ projects over the world.
                </p>

                <p className="inner_paragraph mt-3 pt-3">
                  We are energetic about creating Brand value and Development
                  and this nearly keep running into our veins. We are altogether
                  dedicated toward our work, looking for chances to make stylish
                  items over the advanced range.
                </p>
                <button className=" main_button rounded-2 border-0 text-white py-3 px-5 mt-5">
                    Read More
                  </button>
              </Col>
          </Row>
        </div>
      </section>
    </div>
    </>
  );
};

export default MainSection;
