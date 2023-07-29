import React from 'react'
import "./WebGhrapic.css";
import groupImg from "../../../../../asset/Groupimg.png";
import user from "../../../../../asset/service/user.png";
import OurPartners from '../../../../servicePage/ourPartners/OurPartners'
import Contact from "../../../../servicePage/contactUS/Contact";
import Header from '../../../../header/Header'
import Footer from '../../../../footer/Footer'

const WebGhrapic = () => {
  return (
    <div>
   <Header/>
   <div class="inner_banner">
        <div class="container">
          <h1>Web & Graphic Services</h1>
        </div>
      </div>
      <section class="ict-sec-one">
        <div class="my_wrap">
          <div class="business-commun-text">
            <h2>
              Your system,
              <br />
              by design
            </h2>
            <p>
              Every business has unique technology needs.
              <br /> Your team needs the right tools to analyse <br />
              performance, set and reach targets, <br />
              communicate effectively and achieve goals.
            </p>
            <p>
              Your customers and clients need access to
              <br /> tailored software and apps for efficient, high <br />
              quality service delivery.
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div class="commun-img-area">
            <img src={groupImg} alt="appiesoft Consulting" />
          </div>
          <div class="clr"></div>
        </div>
      </section>
      <section class="ict-sec-two">
        <div class="container">
          <h2>
            But with the number of systems and software on the
            <br />
            market growing every day, where do you start?
          </h2>
          <div class="white-sctn2">
            <div class="prple-imgg lgg">
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
      <div class="ict-last-section">
        <div class="container">
          <div class="prple-sctn-light">
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
      <OurPartners/>
      <Contact/>
   <Footer/>
    </div>
  )
}

export default WebGhrapic
