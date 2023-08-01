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

const OurWork = () => {
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
                Mauris nulla mattis inceptos enim sodales suscipit suspendisse
                varius nam fusce, pulvinar vel posuere augue feugiat aenean
                faucibus cubilia. Varius arcu imperdiet dignissim pellentesque
                est eleifend morbi.
              </p>
              <div class="btn-list d-sm-flex align-items-center">
                <button>Meet With Us</button>
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
        <div className="parent-container"> 
          <div className="owl-stage">
            <div
              className="owl-item"
              data-aos="fade-left"
              data-aos-delay="10"
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
