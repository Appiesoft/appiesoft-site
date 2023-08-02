import React from "react";
import "./Ecommerce.css";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Col, Row } from "react-bootstrap";
import caorusel1 from "../../../../../asset/service/caorusel1.png" 
import caorusel2 from "../../../../../asset/service/carousel2.png"
import Header from '../../../Header'
import OurPartner from "../../../../servicePage/ourPartners/OurPartners";
import Contact from '../../../../servicePage/contactUS/Contact'
import Footer from '../../../../footer/Footer';
const Ecommerce = () => {
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
    { url: caorusel1},
    { url: caorusel2},
    { url: caorusel1},
    { url: caorusel2},
    { url: caorusel1},
    { url: caorusel2},
    { url: caorusel1}
   
]
  return (
    <div>
    <Header/>
      <div class="inner_banner">
        <div class="container">
          <h1>Ecommerce</h1>
        </div>
      </div>
      <section class="ict-sec-one">
        <div class="my_wrap">
          <div class="business-commun-text">
            <h2>
              Selling online <br />
              made easy
            </h2>
            <p>
            Ecommerce is considered to be the most effective web solution for online business expansion, which demands a little investment on the owner’s side. AppieSoft Web Solutions is a leading Ecommerce web development company of London, which is a popular name amongst the startups, wholesalers, retailers and brand agents. Since online customers continue to expect more functionality, convenience and security so our robust Ecommerce web development services will ensure them an easy and seamless online shopping experience.
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div class="commun-img-area">
            <img
              src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512660.png"
              alt="Ecommerce"
            />
          </div>
          <div class="clr"></div>
        </div>
      </section>
      <section class="box_sect box_sect1 new_box_sec1">
        <div class="container">
          <div class="box_sec_enterprice">
            <h2 class="box_sec_enterprice-heading-2">
            AppieSoft Web Solutions specialises in developing individualised Ecommerce
              website design
            </h2>
            <p class="box_sec_enterprice-paragraph tmm">
              Our team is renowned for providing some of the best ecommerce
              <br />
              websites in London, including 5+ years.
            </p>
            <div class="teams">

            <Carousel
                    className='pt-3 pt-md-0'
                    infinite={true}
                    responsive={responsive}
                >
                      {images.map((Img, index) => {
                        return (
                            <Row className="mx-auto">
                        <Col lg={12} className='d-flex  flex-wrap'>
                            <Col lg={12} >
                                <Row class='mx-auto'>
                                 
                                        <Col lg={12} className='d-flex justify-content-evenly'>
                                            
                                                <img src={Img.url} alt="" />
                                           
                                        </Col>
                                   
                                </Row>
                            </Col>
                            </Col>
                            </Row>
                            )
                    })}
                </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section class="digital-our-service">
        <div class="container">
          <div class="we-got-area we-got-area1">
            <div class="we-got-image">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Untitled-14.png"
                alt="Ecommerce"
              />
            </div>
            <div class="we-got-content">
              <p>
              Appiesoft Web Solutions is a team of Digital Marketing experts, Website Designers and Developers that understand the value of your Brand or Product. As an Digital Marketing expert/Website Design and Development organization we have finished 500+ projects over the world.
                <br />
                <br />
                Talk to us about how we can help you master Ecommerce for your
                business!
              </p>
              <button type="button">Talk To An Expert Now</button>
            </div>
          </div>
        </div>
      </section>
      <div class="mobile-development">
        <div class="container">
          <div class="mobile-development-area">
            <div class="mobile-development1">
              <div class="mobile-development-logo">
                <img
                  src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512655.png"
                  alt="Ecommerce"
                />
              </div>
              <div class="mobile-development-content">
                <p>
                  In 2022, 75% of Australians went online to do their shopping,
                  creating a large spike in a wide range of markets; fashion,
                  groceries, electronics, DIY and hobbies. Over two-thirds of
                  55–64-year-old Australians regularly went online for their
                  purchases.
                </p>
                <a href="https://telcoict.com.au/contact-us/">
                  <button type="button">Talk To An Expert Now</button>
                </a>
              </div>
            </div>
            <div class="mobile-development2">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/newimg5.png"
                alt="Ecommerce"
              />
            </div>
          </div>
          <div class=" clr"></div>
        </div>
      </div>
      <OurPartner/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Ecommerce;
