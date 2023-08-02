import React, { useState } from "react";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
// import InnnerHeader from "../../../header/innerHeader/InnerHeader";
import contactmail from "../../../../asset/contactmail.png";
import contactphone from "../../../../asset/contactphone.png";
import { Link, NavLink } from "react-router-dom";
import "./ContactUs.css";
import { Card, Col, Container, Form } from "react-bootstrap";
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTwo, setisTwo] = useState(false);
  const [isThree, setisThree] = useState(false);
  const [isFour, setisFour] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setisTwo(false);
    setisThree(false);
    setisFour(false);
  };
  const toggletwo = () => {
    setisTwo(!isTwo);
    setIsOpen(false);
    setisThree(false);
    setisFour(false);
  };

  const togglethree = () => {
    setisThree(!isThree);
    setisFour(false);
    setisTwo(false);
    setIsOpen(false);
  };
  const togglefour = () => {
    setisFour(!isFour);
    setisTwo(false);
    setIsOpen(false);
    setisThree(false);
  };

  return (
    <div>
      <Header />
      {/* <InnnerHeader /> */}
      <div className="inner_banner">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="cont_sec1">
        <div className="container">
          <ul>
            <li>
              <img src={contactmail} alt="" className="mailimg" />
              <span className="mt-3">SEND YOUR MESSAGE</span>
              <h4>
                <NavLink to="mailto:info@appiesoftwebsolutions.com">
                  info@appiesoftwebsolutions.com
                </NavLink>
              </h4>
            </li>
            <li>
              <div className="call">
                <img src={contactphone} className="mailimg" />
                <div className="txt">
                  <span>CALL US</span>
                  <h4>
                    <NavLink to="tel:1300 414 214">+91-8847249971</NavLink>
                  </h4>
                </div>
              </div>
              <NavLink to="tel:1300 414 214">
                <button  className="talkk">Talk To An Expert Now</button>
              </NavLink>
            </li>
          </ul>
          <div className="talk_sec">
            <div className="cntct">
              <h2>
                We’d <br />
                Love To
                <br /> Meet You.
              </h2>
              <p>
              You can explore our web development services and feel
free to comment and make indications.
                <br />
                <br />
                Complete the form below and one of our team will be in contact
                with you within 24 hours.
              </p>
            </div>
          </div>
          <div className="container input_field pb-5">
            <div className="row mx-auto pb-lg-5">
              <Col
                lg={12}
                xs={12}
                className="d-flex justify-content-around flex-wrap mx-auto"
              >
                <Col lg={11} className="mx-auto">
                  <Card className=" rounded-4 py-lg-4  px-lg-3 p-0 contactus_bg">
                    <div className="row mx-auto">
                      <div className="col-md-12 col-12 d-md-flex align-items-center justify-content-between flex-wrap">
                        <div class="mb-md-3 me-md-3 input_field_names">
                          <input
                            type="text"
                            className=" bg-transparent border-bottom py-4"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-md-3 ms-md-3 input_field_names border-bottom">
                          <Form.Select className="py-4">
                            <option hidden>Select a Service</option>
                            <option value="1">Web & Graphic Design</option>
                            <option value="2">Web Development</option>
                            <option value="3">Industrial Training</option>
                            <option value="4">Ecommerce Websites</option>
                            <option value="5">Apps Development</option>
                            <option value="6">
                              Search Engine Optimization
                            </option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="col-md-12 col-12 d-flex align-items-center justify-content-between flex-wrap">
                        <div className="mb-md-2 me-md-3  input_field_names"  id="phone">
                          <input
                            type="number"
                            className=" bg-transparent border-bottom py-4"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="mb-md-2 ms-md-3 input_field_names">
                          <input
                            type="email"
                            className="border-bottom  bg-transparent py-4"
                            placeholder="Email ID"
                          />
                        </div>
                      </div>
                      <div className="card_title mt-4">
                        <h5 className="mt-lg-5 mb-lg-4">My Preference:</h5>
                        <div className="d-flex my-3">
                          <input type="checkbox" className="me-3 mt-1" />{" "}
                          <h5> Managed IT</h5>
                        </div>
                        <div className="d-flex">
                          <input type="checkbox" className="me-3 mt-1" />{" "}
                          <h5>Communication</h5>
                        </div>
                        <div className="d-flex my-3">
                          <input type="checkbox" className="me-3 mt-1" />{" "}
                          <h5>Digital Strategy</h5>
                        </div>
                        <div>
                          <button className="contactus_btn px-3 w-100 py-3 rounded-2  mt-4 mb-2">
                            Send More Information Please
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Col>
            </div>
          </div>
        </div>
      </div>
      <div className="cont_seclast">
        <div className="container">
          <h2 className="main_title">Common Questions</h2>
        </div>
        <Container>
          <Col
            lg={10}
            className="modify_content align-self-center width_box_content mx-auto pt-lg-5 pt-3"
          >
            <div
            
              onClick={toggleDropdown}
              className={` ${
                !isOpen
                  ? "boxinactive d-flex justify-content-between rounded-2"
                  : "boxactive d-flex justify-content-between rounded-2"
              }`}
            >
              <h2>Do you outcome your work overseas?</h2>
              <h2>
                <i
                  className={` ${
                    !isOpen ? "fa-solid fa-plus" : "fa-solid fa-minus"
                  }`}
                ></i>
              </h2>
            </div>
            {isOpen && (
              <h3 className="pt-1 pb-3 px-1">
                No. We use local teams only. That way we can respond more
                quickly to any problems that may occur. We want your tech
                running smoothly so you can focus on what you do best.
              </h3>
            )}
            <div
              onClick={toggletwo}
              className={` ${
                !isTwo
                  ? "boxinactive rounded-2  mt-md-3 mt-3 d-flex justify-content-between"
                  : "boxactive d-flex justify-content-between rounded-2  mt-md-3 mt-3"
              }`}
            >
              <h2>Is your support 24 hours?</h2>
              <h2>
                <i
                  className={` ${
                    !isTwo ? "fa-solid fa-plus" : "fa-solid fa-minus"
                  }`}
                ></i>
              </h2>
            </div>
            {isTwo && (
              <h3 className="pt-1 pb-3 px-1">
                Yes. We have people available whenever you need us. We
                understand that your tech runs 24 hours, and you need it be
                working at all times.
              </h3>
            )}
            <div
              onClick={togglethree}
              className={` ${
                !isThree
                  ? "boxinactive rounded-2 mt-md-3 mt-3 d-flex justify-content-between"
                  : "boxactive d-flex justify-content-between rounded-2 mt-md-3 mt-3"
              }`}
            >
              <h2>Are your service customised for my bussiness?</h2>
              <h2>
                <i
                  className={` ${
                    !isThree ? "fa-solid fa-plus" : "fa-solid fa-minus"
                  }`}
                ></i>
              </h2>
            </div>
            {isThree && (
              <h3 className="pt-1 pb-3 px-1">
                There is great off the shelf software. But we know one size
                never fits all. So anything we set up for you is designed to
                make your business run smoother and in the way you want it to.
              </h3>
            )}
            <div
              onClick={togglefour}
              className={` ${
                !isFour
                  ? "boxinactive rounded-2 mt-md-3 mt-3 d-flex justify-content-between"
                  : "boxactive d-flex justify-content-between rounded-2 mt-md-3 mt-3"
              }`}
            >
              <h2>Are your service expensive?</h2>
              <h2>
                <i
                  className={` ${
                    !isFour ? "fa-solid fa-plus" : "fa-solid fa-minus"
                  }`}
                ></i>
              </h2>
            </div>
            {isFour && (
              <h3 className="pt-1 pb-3 px-1">
                Simply book a chat with one of our experts. We’ll have a chat
                about exactly what you need and how we can help. If you like our
                approach then we’ll give you a fixed price quote and get
                everything up and running for you, fast!
              </h3>
            )}
            <p className="mt-3">
              Follow Us:
              <span className="mx-3">
                <Link to="https://www.facebook.com/appiesoftwebsolutions/">
                  <i className="fa fa-facebook " aria-hidden="true"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.instagram.com/appiesoftweb/?hl=en">
                  <i className="fa-brands fa-instagram "></i>
                </Link>
              </span>
            </p>
          </Col>
        </Container>
      </div>

      {/* <Col lg={12} md={12} xxl={5} xl={5} className="modify_content align-self-center ms-xl-5 ms-xxl-0 mt-lg-5 mt-xl-0 my-md-5 my-4 width_box_content">
            <h1 className='mb-3'>Common Question</h1>
            <div  onClick={toggleDropdown}  className={` ${!isOpen ? "boxinactive rounded-2" : "boxactive rounded-2"}`}>
              <h2>Do you outcome your work overseas?</h2>
              <h2>
              <i class={` ${!isOpen ? "fa-solid fa-plus" : "fa-solid fa-minus"}`}></i>
              </h2>
            </div>
            {isOpen && (
               <h3 className='pt-1 px-1'>
                  No. We use local teams only. That way we can respond more quickly to any problems that may occur. We want your tech running smoothly so you can focus on what you do best.
              </h3>
              )}
            <div   onClick={toggletwo}  className={` ${!isTwo ? "boxinactive rounded-2  mt-md-3 mt-3" : "boxactive rounded-2  mt-md-3 mt-3"}`}>
              <h2>Is your support 24 hours?</h2>
              <h2>
              <i class={` ${!isTwo ? "fa-solid fa-plus" : "fa-solid fa-minus"}`}></i>
              </h2>
            </div>
            {isTwo && (
               <h3  className='pt-1 px-1'>
               Yes. We have people available whenever you need us. We understand that your tech runs 24 hours, and you need it be working at all times.
              </h3>
              )}
            <div  onClick={togglethree}  className={` ${!isThree ? "boxinactive rounded-2 mt-md-3 mt-3" : "boxactive rounded-2 mt-md-3 mt-3"}`}>
              <h2>Are your service customised for my bussiness?</h2>
              <h2>
              <i class={` ${!isThree ? "fa-solid fa-plus" : "fa-solid fa-minus"}`}></i>
              </h2>
            </div>
            {isThree && (
               <h3  className='pt-1 px-1'>
              There is great off the shelf software. But we know one size never fits all. So anything we set up for you is designed to make your business run smoother and in the way you want it to.
              </h3>
              )}
            <div  onClick={togglefour}  className={` ${!isFour ? "boxinactive rounded-2 mt-md-3 mt-3" : "boxactive rounded-2 mt-md-3 mt-3"}`} >
              <h2>Are your service expensive?</h2>
              <h2>
              <i class={` ${!isFour ? "fa-solid fa-plus" : "fa-solid fa-minus"}`}></i>
              </h2>
            </div>
            {isFour && (
               <h3  className='pt-1 px-1'>
               Simply book a chat with one of our experts. We’ll have a chat about exactly what you need and how we can help. If you like our approach then we’ll give you a fixed price quote and get everything up and running for you, fast!
              </h3>
              )}
            <p className='mt-3'>
              Follow Us:
              <span className='mx-3'>
              <Link to='https://www.facebook.com/appiesoftwebsolutions/'>
                <i class="fa fa-facebook " aria-hidden="true"></i></Link>
              </span>
              <span>
              <Link to='https://www.instagram.com/appiesoftweb/?hl=en'>
              <i class="fa-brands fa-instagram "></i>
              </Link>
              </span>
            </p>
          </Col> */}
      <Footer />
    </div>
  );
};

export default ContactUs;
