import React from "react";
import "./Testimonial.css";
import Header from "../../Header";
import Footer from "../../../footer/Footer";
import OurPartners from "../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../servicePage/contactUS/Contact";
import star from "../../../../asset/star.png";
import customer1 from "../../../../asset/customer1.png";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Testimonial = () => {
  const card = [
    {
      url: customer1,
      url2: star,
      title2: "Sophie Moore",
      title: "Sophie Moore",
      para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
    },
    {
      url: customer1,
      url2: star,
      title2: "Sophie Moore",
      title: "Sophie Moore",
      para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
    },
    {
      url: customer1,
      url2: star,
      title2: "Sophie Moore",
      title: "Sophie Moore",
      para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
    },
    {
      url: customer1,
      url2: star,
      title2: "Sophie Moore",
      title: "Sophie Moore",
      para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
    },
  ];
  return (
    <div>
      <Header />
      <div class="web_inner_banner">
        <div class="container">
          <h1>Testimonials</h1>
        </div>
      </div>
      {/* <div class="container my-5">
        <Row>
          <Col
            lg={12}
            md={6}
            sm={12}
            xl={12}
            xxl={12}
            className="testigap mx-auto"
          >
            {card.map((importImg, index) => {
              return (
                <div class="testimonial-box">
                  <div class="testimonial">
                    <i class="fas fa-quote-right"></i>
                    <div class="testimonial-user">
                      <img src={importImg.url} alt="" />
                      <div class="user-info">
                        <span class="user-name">{importImg.title}</span>
                        <span class="user-name">
                          <img src={importImg.url2} alt="" />
                        </span>
                      </div>
                    </div>
                    <span class="testimonial-text">{importImg.para}</span>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div> */}
      <section class="text-gray-600 body-font">
        <div class="container px-lg-5 px-3 mx-auto mt-4">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            <p class="leading-relaxed mb-6 testimonialPara">
            They are very easy to communicate with and he starts working on tasks you give him right away. I will look to Mandeep in the future for help when it comes to WordPress development and any CSS needs.
            </p>
          </h1>

          <div class="flex flex-wrap -m-4">
          {card.map((importImg, index) => {
              return (
            <div class="p-4 md:w-1/2 w-full rounded-4"  data-aos="fade-up"
              data-aos-delay="10">
              <div class="h-full p-lg-5 p-3 rounded testigap">
                <img src={importImg.url2} alt="" />
                <p class=" mb-6 mt-3 testtitle">
                {importImg.para}
                </p>
                <NavLink >
                <div class="d-flex items-center">
                  <img
                    alt="testimonial"
                    src={importImg.url}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center me-4 "
                  />
                  <span class="flex-grow flex flex-col ms-lg-3 ms-0  pt-2 pt-lg-0">
                    <span class="title-font font-medium testtitle">
                    {importImg.title}
                    </span>
                    <span class="text-dark-500 text-sm">{importImg.title}</span>
                  </span>
                  </div>
                </NavLink>
              </div>
            </div>
            );
            })}
          </div>

        </div>
      </section>
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Testimonial;
