import React from "react";
import "./Service.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import image11 from "../../asset/header/image11.png";
import OurClient from "./ourClient/OurClient";
import ReviewPage from "./reviewPage/ReviewPage";
import Subscription from "./subscriptionPage/Subscription";
import OurPartners from "./ourPartners/OurPartners";
import Contact from "./contactUS/Contact";
const Service = () => {
  return (
    <>
      <div>
        {/* <Container>
          <section className="bg-light py-md-4 pt-0">
            <Row className="mx-auto ">
              <Col
                xxl={10}
                xl={10}
                lg={10}
                className="text-center mx-auto text-black  pb-3"
              >
                <h1 className="ourService">Our Services</h1>
              </Col>
            </Row>
            <Row className="mx-auto pb-4">
              <Col
                xxl={11}
                xl={12}
                lg={11}
                md={12}
                xs={11}
                sm={12}
                className="col-10 d-flex justify-content-center mx-auto mt-md-4 mt-3 gap_card  flex-wrap"
              >
                <Col xxl={3} xl={3} lg={5} md={5} sm={9} className="card_bg ">
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-4  my-xl-3 my-3 service_text">
                      Web & Graphic Design
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 mb-sm-2 text-black px-2">
                      Every company is unique and therefore each design we
                      create will reflect the client’s requirements and
                      characteristics.From simple to complex, our website design
                      team will create, host, and update the site for you.
                    </p>
                    <Button className="main_button border-0 px-4 py-sm-2 mt-3 mb-5">
                      Read More
                    </Button>
                  </Col>
                </Col>
                <Col
                  md={5}
                  xxl={3}
                  xl={3}
                  lg={5}
                  sm={9}
                  className="card_bg  mt-4 mt-md-0"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-4  my-xl-4  my-3 service_text">
                      Web Development
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black mb-sm-2  px-2 px-sm-4">
                      We have developed several website as per customer
                      requirements. We have an expert team of web developers,
                      web programmers which delivers pioneering website
                      programming services at a variety of web programming
                      platform.
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 py-sm-2 mb-5">
                      Read More
                    </Button>
                  </Col>
                </Col>
                <Col
                  md={5}
                  xxl={3}
                  xl={3}
                  lg={5}
                  sm={9}
                  className="card_bg  d-none d-xl-block"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-5 my-xl-4 my-3 service_text">
                      Industrial Training
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black px-2 mb-sm-2">
                      AppieSoft Web Solutions, Mohali (Chandigarh) offers 6
                      Months/3 Months/6 weeks Industrial training for B.Tech
                      (All Branches)/MCA/M.Sc (IT)/ Polytechnic Diploma (All
                      Branches), MBA, BBA, B.Voc and other
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                      Read More
                    </Button>
                  </Col>
                </Col>
              </Col>
              <Col
                xxl={11}
                xl={12}
                lg={11}
                md={12}
                sm={12}
                xs={11}
                className="d-flex justify-content-center gap_card mx-auto mt-md-5 mt-4 flex-wrap"
              >
                <Col
                  xxl={3}
                  xl={3}
                  lg={5}
                  md={5}
                  sm={9}
                  className="card_bg  d-md-block d-xl-none"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-5 my-xl-4 my-3 service_text">
                      Industrial Training
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black px-2 mb-sm-2">
                      AppieSoft Web Solutions, Mohali (Chandigarh) offers 6
                      Months/3 Months/6 weeks Industrial training for B.Tech
                      (All Branches)/MCA/M.Sc (IT)/ Polytechnic Diploma (All
                      Branches), MBA, BBA, B.Voc and other
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                      Read More
                    </Button>
                  </Col>
                </Col>
                <Col
                  xxl={3}
                  xl={3}
                  lg={5}
                  md={5}
                  sm={9}
                  className="card_bg mt-4 mt-md-0"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-4 my-xl-3 my-3 service_text">
                      Ecommerce Websites
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black px-2 mb-sm-2">
                      It is our experienced and skilled Ecommerce website
                      development team that will effectively evaluate your
                      business needs, offering perfectly tailored solutions for
                      your design, development, Ecommerce and data needs.
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                      Read More
                    </Button>
                  </Col>
                </Col>
                <Col
                  md={5}
                  xxl={3}
                  xl={3}
                  lg={5}
                  sm={9}
                  className="card_bg mt-md-5 mt-4 mt-xl-0"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                      Apps Development
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black px-2 mb-sm-2">
                      Mobile application is the latest to join the technology
                      revolution.We’ll take you through the basics of Android
                      Studio, the default integrated development environment
                      (IDE) supported by Google to develop Android apps.
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                      Read More
                    </Button>
                  </Col>
                </Col>
                <Col
                  md={5}
                  xxl={3}
                  xl={3}
                  lg={5}
                  sm={9}
                  className="card_bg mt-md-5 mt-4 mt-xl-0"
                >
                  <Col lg={12} className="text-center pt-2 mb-4 mt-4">
                    <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                  </Col>
                  <Col
                    md={9}
                    xxl={9}
                    xl={9}
                    lg={9}
                    className="text-center mx-auto"
                  >
                    <h2 className="text-black my-xxl-4 my-xl-3 my-3 service_text">
                      Search Engine Optimization
                    </h2>
                  </Col>
                  <Col
                    lg={11}
                    xl={10}
                    xxl={11}
                    md={10}
                    className="text-center mx-auto"
                  >
                    <p className="service_para mb-4 text-black px-2 mb-sm-2">
                      Our deep knowledge about keyword and market research, SEO
                      PR, link building, content marketing,social media
                      promotion, infographics, onpage and offpage SEO, makes us
                      capable of delivering you the best search engine
                      optimization results.
                    </p>
                    <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                      Read More
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Row>
          </section>
        </Container> */}

        {/* <section className="sscn6 py-lg-5 py-md-4 text-center bg-light">
          <Container className="bg-light">
            <Row className="mx-auto ">
              <Col
                xxl={10}
                xl={10}
                lg={10}
                className="text-center mx-auto text-black  pb-3"
              >
                <h1 className="ourService">Our Services</h1>
              </Col>
            </Row>
            <Row className="mx-auto six_images_grid">
            <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Apps Development
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                Mobile application is the latest to join the technology
                      revolution.We’ll take you through the basics of Android
                      Studio, the default integrated development environment
                      (IDE) supported by Google to develop Android apps.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                  Industrial Training
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                  AppieSoft Web Solutions, Mohali (Chandigarh) offers 6 Months/3
                  Months/6 weeks Industrial training for B.Tech (All
                  Branches)/MCA/M.Sc (IT)/ Polytechnic Diploma (All Branches),
                  MBA, BBA, B.Voc and other
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white tile-boxes d-md-none d-lg-block">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Ecommerce Websites
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                It is our experienced and skilled Ecommerce website
                      development team that will effectively evaluate your
                      business needs, offering perfectly tailored solutions for
                      your design, development, Ecommerce and data needs.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              </Row>
              <Row className="mx-auto six_images_grid flex-wrap">
              <div className="col-md  bg-white tile-boxes d-md-block d-lg-none">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Ecommerce Websites
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                It is our experienced and skilled Ecommerce website
                      development team that will effectively evaluate your
                      business needs, offering perfectly tailored solutions for
                      your design, development, Ecommerce and data needs.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white tile-boxes midbox-comp">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4  my-xl-4  my-3 service_text">
                  Web Development
                </h2>
                <p className="service_para mb-4 text-black mb-sm-2">
                  We have developed several website as per customer
                  requirements. We have an expert team of web developers, web
                  programmers which delivers pioneering website programming
                  services at a variety of web programming platform.
                </p>
                <Button className="main_button border-0 px-4 mt-3 py-sm-2 mb-5">
                  Read More
                </Button>
              </div>
             
              <div className="col-md bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4  my-xl-3 my-3 service_text">
                  Web & Graphic Design
                </h2>
                <p className="service_para mb-4 mb-sm-2 text-black">
                  Every company is unique and therefore each design we create
                  will reflect the client’s requirements and
                  characteristics.From simple to complex, our website design
                  team will create, host, and update the site for you.
                </p>
                <h5 className="mid-head-sscn6 d-inline-flex mb-0 py-3 bttn-windows">
                  <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                    Read More
                  </Button>
                </h5>
              </div>
              <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Search Engine Optimization
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                Our deep knowledge about keyword and market research, SEO
                      PR, link building, content marketing,social media
                      promotion, infographics, onpage and offpage SEO, makes us
                      capable of delivering you the best search engine
                      optimization results.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              </Row>
          </Container>
        </section> */}

        <section className="sscn6 py-lg-5 py-md-4 text-center bg-light">
          <Container className="bg-light">
            <Row className="mx-auto ">
              <Col
                xxl={10}
                xl={10}
                lg={10}
                className="text-center mx-auto text-black  pb-3"
              >
                <h1 className="ourService">Our Services</h1>
              </Col>
            </Row>
            <Row className="mx-auto six_images_grid">
            <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Apps Development
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                Mobile application is the latest to join the technology
                      revolution.We’ll take you through the basics of Android
                      Studio, the default integrated development environment
                      (IDE) supported by Google to develop Android apps.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                  Industrial Training
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                  AppieSoft Web Solutions, Mohali (Chandigarh) offers 6 Months/3
                  Months/6 weeks Industrial training for B.Tech (All
                  Branches)/MCA/M.Sc (IT)/ Polytechnic Diploma (All Branches),
                  MBA, BBA, B.Voc and other
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
          </Row>
              <Row className="mx-auto six_images_grid flex-wrap">
              <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Ecommerce Websites
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                It is our experienced and skilled Ecommerce website
                      development team that will effectively evaluate your
                      business needs, offering perfectly tailored solutions for
                      your design, development, Ecommerce and data needs.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white tile-boxes midbox-comp">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4  my-xl-4  my-3 service_text">
                  Web Development
                </h2>
                <p className="service_para mb-4 text-black mb-sm-2">
                  We have developed several website as per customer
                  requirements. We have an expert team of web developers, web
                  programmers which delivers pioneering website programming
                  services at a variety of web programming platform.
                </p>
                <Button className="main_button border-0 px-4 mt-3 py-sm-2 mb-5">
                  Read More
                </Button>
              </div>
              </Row>
              <Row className="mx-auto six_images_grid flex-wrap">
              <div className="col-md bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4  my-xl-3 my-3 service_text">
                  Web & Graphic Design
                </h2>
                <p className="service_para mb-4 mb-sm-2 text-black">
                  Every company is unique and therefore each design we create
                  will reflect the client’s requirements and
                  characteristics.From simple to complex, our website design
                  team will create, host, and update the site for you.
                </p>
                <h5 className="mid-head-sscn6 d-inline-flex mb-0 py-3 bttn-windows">
                  <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                    Read More
                  </Button>
                </h5>
              </div>
              <div className="col-md  bg-white tile-boxes">
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-circle service-bg-Img "></div>
                <h2 className="text-black my-xxl-4 my-xl-4 my-3 service_text">
                Search Engine Optimization
                </h2>
                <p className="service_para mb-4 text-black  mb-sm-2">
                Our deep knowledge about keyword and market research, SEO
                      PR, link building, content marketing,social media
                      promotion, infographics, onpage and offpage SEO, makes us
                      capable of delivering you the best search engine
                      optimization results.
                </p>
                <Button className="main_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              </Row>
          </Container>
        </section>


        <section className="section-four my-xl-5 my-0">
          <div className="container">
            <div className="six-way-help-box">
              <h5>Why choose us</h5>
              <h2>6 Ways We Help</h2>
              <ul>
                <li>
                  <img src={image11} alt="" />
                  <p>
                    24 Hour Monitoring &amp;
                    <br /> Support 365 Days A Year
                  </p>
                </li>
                <li>
                  <img src={image11} alt="" />
                  <p>
                    Fixed Prices.
                    <br /> No Surprise Charges Ever
                  </p>
                </li>
                <li className="border-end-0 ">
                  <img src={image11} alt="" />
                  <p>
                    We Only Use <br />
                    Certified Experts
                  </p>
                </li>
                <li className="border-bottom-0">
                  <img src={image11} alt="" />

                  <p>
                    Access To Products You
                    <br /> Can’t Get Anywhere Else
                  </p>
                </li>
                <li className=" border-bottom-0">
                  <img src={image11} alt="" />
                  <p>
                    Big Savings On
                    <br /> Hardware &amp; Software
                  </p>
                </li>
                <li className="border-end-0 border-bottom-0">
                  <img src={image11} alt="" />

                  <p>
                    Local People For Fast
                    <br /> Implementation
                  </p>
                </li>
              </ul>
            </div>
            <div className="clr"></div>
          </div>
        </section>
      </div>
      <OurClient />
      <ReviewPage />
      <Subscription />
      <OurPartners />
      <Contact />
    </>
  );
};

export default Service;
