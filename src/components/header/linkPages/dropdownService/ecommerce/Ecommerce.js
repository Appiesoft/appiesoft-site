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
      <div className="inner_banner">
        <div className="container">
          <h1>Ecommerce</h1>
        </div>
      </div>
      <section className="ict-sec-one">
        <div className="my_wrap">
          <div className="business-commun-text">
            <h2>
              Selling online <br />
              made easy
            </h2>
            <p>
            Ecommerce is considered to be the most effective web solution for online business expansion, which demands a little investment on the owner’s side. AppieSoft Web Solutions is a leading Ecommerce web development company of London, which is a popular name amongst the startups, wholesalers, retailers and brand agents. Since online customers continue to expect more functionality, convenience and security so our robust Ecommerce web development services will ensure them an easy and seamless online shopping experience.
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div className="commun-img-area">
            <img
              src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512660.png"
              alt="Ecommerce"
            />
          </div>
          <div className="clr"></div>
        </div>
      </section>
      <section className="box_sect box_sect1 new_box_sec1">
        <div className="container">
          <div className="box_sec_enterprice">
            <h2 className="box_sec_enterprice-heading-2">
            AppieSoft Web Solutions specialises in developing individualised Ecommerce
              website design
            </h2>
            <p className="box_sec_enterprice-paragraph tmm">
              Our team is renowned for providing some of the best ecommerce
              <br />
              websites in London, including 5+ years.
            </p>
            <div className="teams">

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
                                <Row className='mx-auto'>
                                 
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
      <section className="digital-our-service">
        <div className="container">
          <div className="we-got-area we-got-area1">
            <div className="we-got-image">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Untitled-14.png"
                alt="Ecommerce"
              />
            </div>
            <div className="we-got-content">
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
      <div className="mobile-development">
        <div className="container">
          <div className="mobile-development-area">
            <div className="mobile-development1">
              <div className="mobile-development-logo">
                <img
                  src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512655.png"
                  alt="Ecommerce"
                />
              </div>
              <div className="mobile-development-content">
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
            <div className="mobile-development2">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/newimg5.png"
                alt="Ecommerce"
              />
            </div>
          </div>
          <div className=" clr"></div>
        </div>
      </div>
      <OurPartner/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Ecommerce;
