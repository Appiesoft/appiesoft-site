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
import fourimgg from "../../../../asset/herosection/fourimgg.png";

import { Container } from "react-bootstrap";
import InnerHeader from "../../innerHeader/InnerHeader";
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
              Appiesoft Web Solutions is a team of Digital Marketing experts, Website Designers and Developers that understand the value of your Brand or Product. As an Digital Marketing expert/Website Design and Development organization we have finished 500+ projects over the world.
              </p>
              <p>
              We at Appiesoft Web Solutions are answering real business challenges for our clients through innovation and deep industry knowledge.
                <NavLink to="#"> e-commerce services</NavLink>, branding
                <NavLink to="#"> digital strategy</NavLink>, data storage and security and
                <NavLink to="#"> firewall security.</NavLink>
              </p>
              <p>
              AppieSoft Web Solutions, Mohali (Phase11) offers 6 Months/ 3 Months/6 weeks Job Based Industrial training for B.Tech (All Branches)/MCA/M.Sc (IT)/Polytechnic Diploma (All Branches), MBA, BBA, B.Voc and other graduate students.
              </p>
              <p>
              Students who are interested to get training with Spoken English, Personality Development and Interview Preparation (HR+ Technical Round) classes and 100% placement assistance are required to register and enroll for Aptitude-cum-Technical Test.
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
              Every company is unique and therefore each design we create will reflect the client’s requirements and characteristics. From simple to complex, our website design team will create, host, and update the site for you.
              </p>
            </li>
            <li className="img-li  s-img">
              <img src={teamfour} />
            </li>
          </ul>
        </div>
      </div>
      <div className="clr"></div>

      <div className="fifth-sctn-abt">
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
      </div>
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
              Our company is composed of highly enthusiastic and experienced engineers and is fully equipped with the latest technology ready to satisfy your needs.
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
