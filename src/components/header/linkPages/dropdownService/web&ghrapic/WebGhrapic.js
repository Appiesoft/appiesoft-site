import React from "react";
import "./WebGhrapic.css";
import groupImg from "../../../../../asset/Groupimg.png";
import user from "../../../../../asset/service/user.png";
import OurPartners from "../../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../../servicePage/contactUS/Contact";
import Header from "../../../../header/Header";
import Footer from "../../../../footer/Footer";

const WebGhrapic = () => {
  return (
    <div>
      <Header />
      <div className="inner_banner">
        <div className="container">
          <h1>Web & Graphic Services</h1>
        </div>
      </div>
      <section className="ict-sec-one">
        <div className="my_wrap">
          <div className="business-commun-text">
            <h2>
              Your system,
              <br />
              by design
            </h2>
            <p>
              Every business has unique technology needs. Your team needs the
              right tools to analyse performance, set and reach targets,
              communicate effectively and achieve goals.
            </p>
            <p>
              Your customers and clients need access to tailored software and
              apps for efficient, high quality service delivery.
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div className="commun-img-area">
            <img src={groupImg} alt="appiesoft Consulting" />
          </div>
          <div className="clr"></div>
        </div>
      </section>
      <section className="ict-sec-two">
        <div className="container">
          <h2>
            But with the number of systems and software on the
            <br />
            market growing every day, where do you start?
          </h2>
          <div className="white-sctn2">
            <div className="prple-imgg lgg">
              <img src={user} alt="user Consulting" />
            </div>
            <p>
              Our ICT Consulting team is one of the best in the business, ready
              to advise you and your
              <br /> team on the design, structure and efficiency of your ideal
              ICT system. A highly respected <br />
              ICT consulting company, we have 25+ years’ experience across all
              industries - and we love <br />
              creating unique solutions for businesses like yours.
            </p>
          </div>
        </div>
      </section>
      <div className="ict-last-section">
        <div className="container">
          <div className="prple-sctn-light">
            <p>
              If you’re looking for experienced and skillful professionals in
              ICT consulting services, to design your unique solution, reach out
              today for a <br />
              no obligation consultation.
            </p>
            <span>
              <button type="button">Talk To An Expert Now</button>
            </span>
          </div>
        </div>
      </div>
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebGhrapic;
