import React from "react";
import "./MainSection.css";
import { Col, Row ,Button} from "react-bootstrap";
import fourimgg from "../../asset/herosection/fourimgg.png";
const MainSection = () => {
  return (
 
      <>
        <section id="hero" class="d-flex align-items-center">
          <div className="col-10  mx-auto mt-3">
            <div class="container" data-aos="zoom-out" data-aos-delay="100">
              <h1 className="text-white">
                Web & Graphic <br /> That<span className="ms-3">Design</span>
              </h1>
              <h2 className="text-white mt-3">
                Our aim is to keep design professional, clear and<br/>crisp, easy to
                navigate and quick to download.
              </h2>
              <h2 className="text-white mt-5">
                From simple to complex, our website design team <br/>will create,
                host, and update the site for you.
              </h2>
              <div class="d-flex">
                <Button className="main_button rounded-2 py-3 px-3 border-0 mt-4">
                  Talk To An Expert Now
                </Button>
              </div>
            </div>
          </div>
        </section>

   <div className="bg-ligt">
      <section class="d-flex align-items-center pt-5 bg-light">
        <div className="container mt-5 ">
          <Row className="bg-light">
            <div className="row">
              <Col lg={6} className="position-relative">
                <img src={fourimgg} className="image_position" alt="" />
              </Col>
              <Col lg={6} className=" py-5 my-5 px-0 main_content">
                <h6 className="head_line">Welcome To</h6>
                <h4 className="inner_head_line mt-3">
                  AppieSoft Web Solutions
                </h4>
                <p className="inner_paragraph mt-4">
                  Passion, Dedication and A lot of Coffee. We at Appiesoft Web S
                </p>

                <p className="inner_paragraph mt-4">
                  We at Appiesoft Web Solutions are answering real business
                  challenges for our clients through innovation and deep
                  industry knowledge. Appiesoft Web Solutions is a team of
                  Digital Marketing experts, Website Designers, and Developers
                  that understand the value of your Brand or Product. As a
                  Digital Marketing expert/Website Design and Development
                  organization, we have finished 500+ projects over the world.
                </p>

                <p className="inner_paragraph mt-5">
                  We are energetic about creating Brand value and Development
                  and this nearly keep running into our veins. We are altogether
                  dedicated toward our work, looking for chances to make stylish
                  items over the advanced range.
                </p>
                <button className=" main_button rounded-2 border-0 text-white py-3 px-4 mt-4">
                    Read More
                  </button>
              </Col>
            </div>
          </Row>
        </div>
      </section>
    </div>
      </>

  );
};

export default MainSection;
