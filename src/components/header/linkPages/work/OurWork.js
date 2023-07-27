import React from "react";
import Testimonial from "../testimonial/Testimonial";
import "./OurWork.css";
import heroman3 from "../../../../asset/service/heroman3.png";
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
    { url: team15, title: "Sophie Moore", occupt: "Wordpress" },
    { url: team14, title: "Sophie Moore", occupt: "Php" },
    { url: team15, title: "Sophie Moore", occupt: "Designer" },
  ];
  return (
    <div>
      <Header />
      <div class="web_inner_banner">
        <div class="container">
          <h1>Our Work</h1>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="slider__content3">
              <h5>WE ARE IT SERVICE AGENCY</h5>
              <h1>
                Big <span>Solutions</span>
              </h1>
              <p className="mb-5">
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
          <div class="col-lg-6 col-md-12">
            <div class="hero-section">
              <img src={heroman3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section class="team-area  area-7">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-5">
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
        <div class="custom-container">
          <div class="team-slide owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <div
                  class="owl-item cloned d-flex "
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  {images.map((Img, index) => {
                    return (
                      <div class="team-wrapper ">
                        <span href="team-details.html" class="team-image">
                          <img src={Img.url} alt="Image" />
                        </span>
                        <div class="team-thumb2">
                          <div class="team-content text-center mt-3">
                            <NavLink>{Img.title}</NavLink>
                            <h6>{Img.occupt}</h6>
                          </div>
                          {/* <div class="team-icon-wrapper2">
								<div class="inner-team-icon pos-rel">
									<div class="team-icon text-center">
										<i class="fab fa-facebook-f"></i>
										<i class="fab fa-twitter mx-3"></i>
										<i class="fab fa-linkedin-in"></i>									
										</div>
								</div>
							</div> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	  <OurPartners/>
	  <Contact/>
	  <Footer/>
    </div>
  );
};

export default OurWork;
