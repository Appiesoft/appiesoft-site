import React from "react";
import "./AboutUs.css";
import mainlogoappie from "../../../../asset/mainlogoappie.png";
import aboutbanner from "../../../../asset/about/aboutbanner.svg";
import aboutusinner from "../../../../asset/about/aboutusinner.svg";
import Contact from '../../../servicePage/contactUS/Contact';
import Footer from '../../../footer/Footer';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div>
      <header id="masthead" className="site-header inner-hdr">
        <Container>
          <div className="lft_logo">
            <Link>
              <img src={mainlogoappie} alt="" className="rounded-2" />
            </Link>
          </div>
          <div className="main-mnu">
            <div className="menu-communications-container">
              <ul id="menu-communications" className="menu">
                <li
                  id="menu-item-43"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43"
                >
                  <Link href="https://telcoictgroup.com/telcoict/telstra-business-partnership/">
                    Telstra Business Partner
                  </Link>
                </li>
                <li
                  id="menu-item-44"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"
                >
                  <Link href="https://telcoictgroup.com/telcoict/3cx-enterprise-mobility-management/">
                    3CX Apps & Integration
                  </Link>
                </li>
                <li
                  id="menu-item-45"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45"
                >
                  <Link href="https://telcoictgroup.com/telcoict/office-365-enterprise-mobility-management/">
                    Office 365 Enterprise Mobility Management
                  </Link>
                </li>
                <li
                  id="menu-item-46"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46"
                >
                  <Link href="https://telcoictgroup.com/telcoict/business-phone-systems/">
                    Business Phone Systems
                  </Link>
                </li>
                <li
                  id="menu-item-47"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"
                >
                  <Link href="https://telcoictgroup.com/telcoict/ericsson-lg-ipecs/">
                    Ericson LG iPECS
                  </Link>
                </li>
                <li
                  id="menu-item-48"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48"
                >
                  <Link href="https://telcoictgroup.com/telcoict/nbn-telstra-fibre/">
                    NBN + Telstra Fibre
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </Container>
        <div className="clr"></div>
      </header>
      
      <div class="hero-img">
        <img src={aboutbanner} alt="" className="rounded-2" />
      </div>
      <div className="clr"></div>

      <div class="secnd-section-abt">
        <Container>
          <div class="two-sctn">
            <div class="appie-group-text-area img-sctn">
              <h5>About Appiesoft Web Solution</h5>
              <h2>Exceptional service. Unlimited success.</h2>

              <img src={aboutusinner} />
            </div>
            <div class="para-sctn">
              <p>
                For 25+ years, Telco ICT has been creating exceptional
                <a href="#"> business telecommunications</a> solutions for
                businesses with vision… businesses just like yours.
              </p>
              <p>
                We invest time up-front to understand your unique business
                needs, from the most effective way to communicate with your
                clients, through to
                <a href="#">e-commerce services</a>, branding,{" "}
                <a href="#">digital strategy</a>, data storage and security and{" "}
                <a href="#">firewall security.</a>
              </p>
              <p>
                Then we’ll develop, deliver and manage the telecommunications
                solution that’s individual to you - it’s that simple!
              </p>
              <p>
                Our commitment to excellence and full suite of{" "}
                <a href="#">Telco services</a> has secured Telco ICT an
                outstanding reputation as one of the best and most trusted
                <a href="#">Telco companies</a> in Australia.
              </p>
              <p>
                From <a href="#">business phone systems</a> to{" "}
                <a href="#">E-commerce</a>, <a href="#">Managed IT support</a>{" "}
                to <a href="#">digital strategy</a>, there are so many reasons
                to choose Telco ICT.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div class="thrd-sctn-abt">
       <Container>
        <h2>Your Trusted Telstra Business Partner.</h2>
        <p>We’ve built a strong partnership with Telstra over 25+ years working together. With<br/>
        exceptional knowledge, streamlined services, and a commitment to customer service<br/>
        excellence, you can rely on us to make tech matters easy.</p>
        </Container>
     </div>
      <div className="clr"></div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
