import React from "react";
import "./Testimonial.css";
import Header from "../../Header";
import Footer from "../../../footer/Footer";
import OurPartners from "../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../servicePage/contactUS/Contact";
import star from "../../../../asset/star.png";
import customer1 from "../../../../asset/customer1.png";
import { Col, Row } from "react-bootstrap";

const Testimonial = () => {
	
   
  const card = [
    {
      url: customer1,
      url2: star,
      title: "Sophie Moore",
      para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
    },
	{
		url: customer1,
		url2: star,
		title: "Sophie Moore",
		para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
	  },
	  {
		url: customer1,
		url2: star,
		title: "Sophie Moore",
		para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
	  },
	  {
		url: customer1,
		url2: star,
		title: "Sophie Moore",
		para: "Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.",
	  }
  ];
  return (
    <div>
      <Header />
	  <div class="web_inner_banner">
        <div class="container">
          <h1>Testimonials</h1>
		  
        </div>
		</div>
         <div class="container my-5">

  <Row>
<Col lg={12} className="d-flex flex-lg-wrap testigap" >
          {card.map((importImg, index) => {
            return (
				<div class="testimonial-box">
              <div class="testimonial">
                <i class="fas fa-quote-right"></i>
                <div class="testimonial-user">
                  <img src={importImg.url} alt="" />
                  <div class="user-info">
                    <span class="user-name">{importImg.title}</span>
                    <span class="user-name">
                      {" "}
                      <img src={importImg.url2} alt="" />
                    </span>
                  </div>
                </div>
                <span class="testimonial-text">{importImg.para}</span>
              </div>
			  </div>
            );
          })}
		  </Col>
		  </Row>
		
		
         </div>
	
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Testimonial;
