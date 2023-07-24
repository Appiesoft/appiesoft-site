import React, { useState } from 'react';
import { Card, Col, Form } from "react-bootstrap";
import "./Contact.css";
import { Link } from 'react-router-dom';

const Contact = () => {
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
    <div className="container input_field my-xl-5 mt-lg-0 mb-lg-4">
      <div className="row mx-auto">
        <Col lg={12} xs={12} className="d-flex justify-content-around flex-wrap mx-auto">
          <Col lg={11} xxl={5} xl={5} className='mx-auto'  >
            <Card className="bg_contact_banner rounded-4 py-4  px-3">
              <div className="row mx-auto">
                <div className="col-12 pb-3">
                  <p className="mb-3 contact_title">Contact Us</p>
                  <h1 className="m-0 text-white Talk_size">Let’s Talk</h1>
                </div>
                <div className="col-md-12 col-12 d-md-flex align-items-center justify-content-between flex-wrap">
                  <div class="mb-md-3 me-md-3 input_field_names">
                    <input
                      type="text"
                      className=" bg-transparent border-bottom py-2"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="mb-md-3 ms-md-3 input_field_names border-bottom">
                    <Form.Select>
                      <option hidden>Select a Service</option>
                      <option value="1">Web & Graphic Design</option>
                      <option value="2">Web Development</option>
                      <option value="3">Industrial Training</option>
                      <option value="4">Ecommerce Websites</option>
                      <option value="5">Apps Development</option>
                      <option value="6">Search Engine Optimization</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-12 col-12 d-flex align-items-center justify-content-between flex-wrap">
                  <div class="mb-md-3 me-md-3 me-4 input_field_names">
                    <input
                      type="number"
                      class=" bg-transparent border-bottom py-2"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="mb-md-3 ms-md-3 input_field_names">
                    <input
                      type="email"
                      class="border-bottom  bg-transparent py-2"
                      placeholder="Email ID"
                    />
                  </div>
                </div>
                <div className="card_title">
                  <h5 className="my-4">My Preference:</h5>
                  <div className="d-flex my-2">
                    <input type="checkbox" className="me-3 mt-1" />{" "}
                    <h5> Managed IT</h5>
                  </div>
                  <div className="d-flex">
                    <input type="checkbox" className="me-3 mt-1" />{" "}
                    <h5>Communication</h5>
                  </div>
                  <div className="d-flex my-2">
                    <input type="checkbox" className="me-3 mt-1" />{" "}
                    <h5>Digital Strategy</h5>
                  </div>
                  <div>
                    <button className="contact_btn px-3 py-2 rounded-2  mt-4 mb-2">
                      Send More Information Please
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} md={12} xxl={5} xl={5} className="modify_content align-self-center ms-xl-5 ms-xxl-0 mt-lg-5 mt-xl-0 my-md-5 my-4 width_box_content">
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
            <div   onClick={toggletwo}  className={` ${!isTwo ? "boxinactive rounded-2  mt-md-4 mt-3" : "boxactive rounded-2  mt-md-4 mt-3"}`}>
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
            <div  onClick={togglethree}  className={` ${!isThree ? "boxinactive rounded-2 mt-md-4 mt-3" : "boxactive rounded-2 mt-md-4 mt-3"}`}>
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
            <div  onClick={togglefour}  className={` ${!isFour ? "boxinactive rounded-2 mt-md-4 mt-3" : "boxactive rounded-2 mt-md-4 mt-3"}`} >
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
          </Col>
        </Col>
      </div>
    </div>
  );
};

export default Contact;
