import React from "react";
import "./AboutUs.css";
// import mainlogoappie from "../../../../asset/mainlogoappie.png";
import aboutbanner from "../../../../asset/about/aboutbanner.svg";
import aboutusinner from "../../../../asset/about/aboutusinner.svg";
import Contact from "../../../servicePage/contactUS/Contact";
import Footer from "../../../footer/Footer";
import Header from "../../../header/Header";
import teamone from "../../../../asset/about/teamone.jpg";
import teamtwo from "../../../../asset/about/teamtwo.jpg";
import teamthree from "../../../../asset/about/teamthree.jpg";
import teamfour from "../../../../asset/about/teamfour.jpg";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="hero-img">
        <img src={aboutbanner} alt="" />
      </div>
      <div className="clr"></div>

      <div className="secnd-section-abt">
        <Container className="px-md-5 px-3">
          <div className="two-sctn">
            <div className="appie-group-text-area img-sctn">
              <h5>About Appiesoft Web Solution</h5>
              <h2>Passion, Dedication and A lot of Coffee.</h2>

              <img src={aboutusinner} />
            </div>
            <div className="para-sctn">
              <p>
                Appiesoft Web Solutions is a team of Digital Marketing experts,
                Website Designers and Developers that understand the value of
                your Brand or Product. As an Digital Marketing expert/Website
                Design and Development organization we have finished 500+
                projects over the world.
              </p>
              <p>
                We at Appiesoft Web Solutions are answering real business
                challenges for our clients through innovation and deep industry
                knowledge.
                <NavLink to="#"> e-commerce services</NavLink>, branding
                <NavLink to="#"> digital strategy</NavLink>, data storage and
                security and
                <NavLink to="#"> firewall security.</NavLink>
              </p>
              <p>
                AppieSoft Web Solutions, Mohali (Phase11) offers 6 Months/ 3
                Months/6 weeks Job Based Industrial training for B.Tech (All
                Branches)/MCA/M.Sc (IT)/Polytechnic Diploma (All Branches), MBA,
                BBA, B.Voc and other graduate students.
              </p>
              <p>
                Students who are interested to get training with Spoken English,
                Personality Development and Interview Preparation (HR+ Technical
                Round) classes and 100% placement assistance are required to
                register and enroll for Aptitude-cum-Technical Test.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="thrd-sctn-abt">
        <Container>
          <h2>We are energetic about creating Brand value and Development</h2>
          <p>
            We’ve built a strong partnership with Telstra over 25+ years working
            together. With
            <br />
            exceptional knowledge, streamlined services, and a commitment to
            customer service
            <br />
            excellence, you can rely on us to make tech matters easy.
          </p>
        </Container>
      </div>
      <div className="clr"></div>

      <div className="frth-sctn-abt">
        <div className="container">
          <ul className="dedcted">
            <li className="hdd-li">
              <h2>
                Dedicated
                <br /> project
                <br /> manager
                <br />
                and team.
              </h2>
            </li>
            <li className="img-li">
              <img src={teamone} />
            </li>
            <li className="img-li" id="img-one-li">
              <img src={teamtwo} />
            </li>
            <li className="img-li f-img">
              <img src={teamthree} />
            </li>
            <li className="para-li">
              <p>
                Every company is unique and therefore each design we create will
                reflect the client’s requirements and characteristics. From
                simple to complex, our website design team will create, host,
                and update the site for you.
              </p>
            </li>
            <li className="img-li  s-img">
              <img src={teamfour} />
            </li>
          </ul>
        </div>
      </div>
      <div className="clr"></div>

      {/* <div className="fifth-sctn-abt">
        <div className="img-wide-sctn">
          <img src={fourimgg} alt="" />
        </div>
        <div className="txt-wide-sctn">
          <h2>
            The Name Says It All -<br />
            We Know  AppieSoft Web Solutions
          </h2>
          <p>
            We’ve specialised in the development of websites 
            solutions for 5+ years. Our team knows what works, and if you’re
          unsure, we’ll help you decide on the best products and
            services 
            for you. We’ll work in partnership with you to get the best results.
          </p>
        </div>
      </div> */}
      <section className="text-gray-600 body-font">
      
        <div className="container  mx-auto flex flex-col">
          <div className="lg:w-4/3 mx-auto" data-aos="fade-left" >
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-orange-500 text-lg">
                    MANDEEP SINGH
                  </h2>
                  <div className="w-12 h-1 bgborder rounded mt-2 mb-2"></div>
                  <p className=" direct">DIRECTOR SALES</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  “Serial entrepreneur and Founder of AppieSoft and analytics
                  services company. At RTL, we go beyond helping businesses
                  transform through technology. We help them make a meaningful
                  difference. Translating their aspiration into reality. I
                  believe every business is born out of belief, the belief that
                  you can make an impact, and that you have an Idea that
                  matters. Drop us a line to talk more about the next big
                  revolution.”
                </p>

                <span className="mx-4">
                  <NavLink
                    to="https://www.facebook.com/appiesoftwebsolutions/"
                    target="_blank"
                  >
                    <i
                      className="fa fa-facebook text-dark"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </span>
                <span>
                  <NavLink
                    to="https://www.instagram.com/appiesoftweb/?hl=en"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-dark"></i>{" "}
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        
          <div className="lg:w-4/3 mx-auto mt-4" data-aos="fade -right" >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-orange-500 text-lg">
                    SHARAD SHARMA
                  </h2>
                  <div className="w-12 h-1 bgborder  rounded mt-2 mb-2"></div>
                  <p className=" direct">DIRECTOR SALES</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  “Serial entrepreneur and Founder of AppieSoft and analytics
                  services company. At RTL, we go beyond helping businesses
                  transform through technology. We help them make a meaningful
                  difference. Translating their aspiration into reality. I
                  believe every business is born out of belief, the belief that
                  you can make an impact, and that you have an Idea that
                  matters. Drop us a line to talk more about the next big
                  revolution”.
                </p>

                <span className="mx-4">
                  <NavLink
                    to="https://www.facebook.com/appiesoftwebsolutions/"
                    target="_blank"
                  >
                    <i
                      className="fa fa-facebook text-dark"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </span>
                <span>
                  <NavLink
                    to="https://www.instagram.com/appiesoftweb/?hl=en"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-dark"></i>{" "}
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clr"></div>
      <div className="sxth-sctn-abt">
        <div className="container">
          <div className="digi-main">
            <div className="digi-head">
              <h2>
                Digital Expertise
                <br />
                At Your Fingertips.
              </h2>
            </div>
            <div className="digi-para">
              <p>
                Our company is composed of highly enthusiastic and experienced
                engineers and is fully equipped with the latest technology ready
                to satisfy your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
