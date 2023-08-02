import React from "react";
import Testimonial from "../testimonial/Testimonial";
import "./OurWork.css";
import Maskgroup from "../../../../asset/Mask group.png";
import team15 from "../../../../asset/service/team15.jpg";
import team14 from "../../../../asset/service/team14.jpg";
import team12 from "../../../../asset/service/team12.jpg";

import { NavLink } from "react-bootstrap";
import Header from "../../Header";
import Contact from "../../../servicePage/contactUS/Contact";
import OurPartners from "../../../servicePage/ourPartners/OurPartners";
import Footer from "../../../footer/Footer";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const OurWork = () => {
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
    { url: team15, title: "Sophie Moore", occupt: "Founder" },
    { url: team12, title: "Sophie Moore", occupt: "Reactjs" },
    { url: team15, title: "Sophie Moore", occupt: "Designer" },
    { url: team15, title: "Sophie Moore", occupt: "Php" },
    { url: team15, title: "Sophie Moore", occupt: "Php" },
  ];
  return (
    <div 
    // style={{overFlow: "hidden"}}
    >
      <Header />
      <div class="web_inner_banner">
        <div class="container">
          <h1>Our Work</h1>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center mx-auto">
          <div class="col-lg-6 col-xl-6 col-xxl-6 col-md-12 textDecor">
            <div class="slider__content3">
              <h5>WE ARE IT SERVICE AGENCY</h5>
              <h1>
                Big <span>Solutions</span>
              </h1>
              <p className="mb-lg-3 mb-xl-5 mb-xxl-5  mb-3 ">
              Appiesoft Web Solutions is a team of Digital Marketing experts, Website Designers, and Developers that understand the value of your Brand or Product. As a Digital Marketing expert/Website Design and Development organization, we have finished 500+ projects over the world.
              </p>
              <div class="btn-list d-sm-flex align-items-center">
              <NavLink to='/contact'>
                <button>Meet With Us</button></NavLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12  col-xl-6  col-xl-6 d-flex justify-content-center">
            <div class="hero-section mt-5">
              <img src={Maskgroup} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section class="team-area  area-7">
      <div className="parent-container mt-4 mt-lg-5"> 
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-lg-5 mb-0">
                <h1 class="">OUR EXPERTS</h1>
                <h2 class="sect-title text-heding3">
                  Our Awesome Technology
                  <br />
                  <span>Team Member</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
          <div className="owl-stage">
            <div
             data-aos="fade-left"
              data-aos-delay="10"
              className="owl-item"
            > 
                 <Carousel
                    className='pt-3 pt-md-0'
                    infinite={true}
                    responsive={responsive}
                >
        
              {images.map((Img, index) => {
                return (
                  <div className="team-wrapper mt-4">
                    <span href="team-details.html" className="team-image">
                      <img src={Img.url} alt="Image" />
                    </span>
                    <div className="team-thumb2">
                      <div className="team-content text-center mt-3">
                        <NavLink>{Img.title}</NavLink>
                        <h6>{Img.occupt}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
              </Carousel>
            </div>
          </div>
          </div>
      </section>
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default OurWork;
