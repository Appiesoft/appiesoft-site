import React from "react";
// import Testimonial from "../testimonial/Testimonial";
import "./OurWork.css";
import Maskgroup from "../../../../asset/Mask group.png";
import team15 from "../../../../asset/service/team15.png";
import team14 from "../../../../asset/service/team14.png";
import team12 from "../../../../asset/service/team12.png";

import { NavLink } from "react-bootstrap";
import Header from "../../Header";
import Contact from "../../../servicePage/contactUS/Contact";
import OurPartners from "../../../servicePage/ourPartners/OurPartners";
import Footer from "../../../footer/Footer";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
const OurWork = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  const images = [
    { url: team15, title: "Sophie Moore", occupt: "Team Leader" },
    { url: team12, title: "Sophie Moore", occupt: "React-dev" },
    { url: team15, title: "Sophie Moore", occupt: "Wordpress" },
    { url: team14, title: "Sophie Moore", occupt: "Php-dev" },
  ];
  const imageTwo = [
    { url: team14, title: "Sophie Moore", occupt: "UI Designer" },
    { url: team15, title: "Sophie Moore", occupt: "Backend" },
    { url: team12, title: "Sophie Moore", occupt: "Frontend" },
    { url: team14, title: "Sophie Moore", occupt: "Wordpress" },
  ];
  const mbimages = [
    { url: team15, title: "Sophie Moore", occupt: "Founder" },
    { url: team12, title: "Sophie Moore", occupt: "Reactjs" },
  ];
  const mbimageTwo = [
    { url: team14, title: "Sophie Moore", occupt: "Founder" },
    { url: team15, title: "Sophie Moore", occupt: "Reactjs" },
  ];
  return (
    <div
    // style={{overFlow: "hidden"}}
    >
      <Header />
      <div className="web_inner_banner">
        <div className="container">
          <h1>Our Work</h1>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center mx-auto">
          <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-12 textDecor">
            <div className="slider__content3">
              <h5>WE ARE IT SERVICE AGENCY</h5>
              <h1>
                Big <span>Solutions</span>
              </h1>
              <p className="mb-lg-3 mb-xl-5 mb-xxl-5  mb-3 ">
                Appiesoft Web Solutions is a team of Digital Marketing experts,
                Website Designers, and Developers that understand the value of
                your Brand or Product. As a Digital Marketing expert/Website
                Design and Development organization, we have finished 500+
                projects over the world.
              </p>
              <div className="btn-list d-sm-flex align-items-center">
                <NavLink to="/contact">
                  <button>Meet With Us</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12  col-xl-6  col-xl-6 d-flex justify-content-center">
            <div className="hero-section mt-5">
              <img src={Maskgroup} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="team-area  area-7">
        <div className="parent-container mt-4 mt-lg-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-lg-2 mb-0">
                  <h1 className="">OUR EXPERTS</h1>
                  <h2 className="sect-title text-heding3">
                    Our Awesome Technology
                    <br />
                    <span>Team Member</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center d-none d-md-block">
            <div className="flex flex-col p-2 m-2  max-w-10xl">
              <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2  p-2">
              {images.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-dark-400 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
              <div className="flex space-x-4 space-y-2  p-2 items-center justify-center md:flex-row flex-col ">
              {imageTwo.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-stone-700 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center d-block d-md-none">
            <div className="flex flex-col p-2 m-2 ">
              <div className="flex items-center justify-center sm:flex-row  space-x-4 space-y-2  p-2">
              {mbimages.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-10 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-stone-400 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
              <div className="flex space-x-4 space-y-2  p-2 items-center justify-center sm:flex-row">
              {mbimageTwo.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-stone-700 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
              <div className="flex space-x-4 space-y-2  p-2 items-center justify-center sm:flex-row">
              {mbimageTwo.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-stone-700 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
              <div className="flex space-x-4 space-y-2  p-2 items-center justify-center sm:flex-row">
              {mbimageTwo.map((Img, index) => {
                return (
                <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 bgcard rounded-2xl">
                  <div className="h-28 w-28  rounded-full overflow-hidden bg-gray-200">
                  <img src={Img.url} alt="Image" className="mx-auto"/>
                  </div>
                  <div className="text-lg font-medium text-orange-400 cursor-pointer hover:text-stone-700 mt-3">
                  {Img.occupt}
                  </div>
                  <div className=" italic text-dark-500">{Img.title}</div>
                </div>
                );
              })}
              </div>
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
