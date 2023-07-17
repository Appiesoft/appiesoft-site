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
        <section className="sscn6 py-lg-5 py-md-4  py-4 text-center bg-light ">
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
              <div className="col-md  bg-white card-boxes">
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
                <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white card-boxes">
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
                <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white card-boxes d-lg-block d-md-none">
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
                <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
            </Row>
              <Row className="mx-auto six_images_grid flex-wrap">
              <div className="col-md  bg-white card-boxes d-lg-none d-md-block">
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
                <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                  Read More
                </Button>
              </div>
              <div className="col-md  bg-white card-boxes midbox-comp  d-lg-none d-md-block">
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
                <Button className="service_button border-0 px-4 mt-3 py-sm-2 mb-5">
                  Read More
                </Button>
              </div>
              </Row>
              <Row className="mx-auto six_images_grid flex-wrap">
              <div className="col-md  bg-white card-boxes midbox-comp d-lg-block d-md-none">
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
                <Button className="service_button border-0 px-4 mt-3 py-sm-2 mb-5">
                  Read More
                </Button>
              </div>
              <div className="col-md bg-white card-boxes">
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
                  <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                    Read More
                  </Button>
                </h5>
              </div>
              <div className="col-md  bg-white card-boxes">
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
                <h5 className="mid-head-sscn6 d-inline-flex mb-0 py-3 bttn-windows">
                  <Button className="service_button border-0 px-4 mt-3 mb-5 py-sm-2">
                    Read More
                  </Button>
                </h5>
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
