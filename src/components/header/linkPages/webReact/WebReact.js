import React from "react";
import jsw from "../../../../asset/service/jsw.svg";
import spinreact from "../../../../asset/service/spinreact.png";
import Header from "../../Header";
import Contact from "../../../servicePage/contactUS/Contact";
import Footer from "../../../footer/Footer";
import "./WebReact.css";
const WebReact = () => {
  return (
    <div>
      <Header />
      <div className="web_inner_banner">
        <div className="container">
          <h1>React Development</h1>
        </div>
      </div>
      <section className="text-dark-600 body-font overflow-hidden react-container">
        <div className="container mx-auto">
          <div className="lg:w-2/2 mx-auto flex flex-wrap justify-content-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 reactwebtext">
              <h1>React Development</h1>
              <p>
                Whether you work on your own or with thousands of other
                developers, using React feels the same. It is designed to let
                you seamlessly combine components written by independent people,
                teams, and organizations. People love web and native apps for
                different reasons. React lets you build both web apps and native
                apps using the same skills. It leans upon each platform’s unique
                strengths to let your interfaces feel just right on every
                platform.
              </p>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded"
              data-aos="flip-up"
              src={jsw}
            />
          </div>
        </div>
      </section>
      <section className="text-dark-600 body-font overflow-hidden mt-lg-5 mt-4 pt-md-5  ">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-12 reactpara">
            <div className="px-5 py-md-5 pt-5 pb-0 md:w-1/2 flex flex-col items-start ">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-dark-900  mb-2">
                React Js
              </h2>
              <p className="leading-relaxed">
                The React.js framework is an open-source JavaScript framework
                and library developed by Facebook. It's used for building
                interactive user interfaces and web applications quickly and
                efficiently with significantly less code than you would with
                vanilla JavaScript
              </p>
             
            </div>
            <div className="px-5 py-md-5 pt-4 pb-5 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-dark-900  mt-0 mb-2">
                React Native
              </h2>
              <p className="leading-relaxed">
                Also You can use React Native today in your existing Android and
                iOS projects or you can create a whole new app from
                scratch.Meanwhile, React Native – which is powered by React –
                lets developers use a set of UI components to quickly compile
                and launch iOS and Android apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font pb-md-5 pb-0">
        <div className="container px-md-5 px-2 pt-md-5 pt-3 mx-auto slider__content3">
          <div className="text-center mb-md-5 mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 slider__content3">
              Why we Choose React
            </h1>
            <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
              Four Reasons You Need To Refresh Your Website
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 bgimagee mb-3 mb-md-0">
            <div className="p-2 sm:w-1/2 w-full ">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center bgimage">
                <img src={spinreact} className="spin" />
                <span class="title-font font-medium">
                  Does Your Website Reflect Your Brand?
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full ">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center bgimage">
                <img src={spinreact} className="spin" />
                <span className="title-font font-medium">
                  Do Your Customers Or Prospects Need To Engage With You 24/7?
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full ">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center bgimage">
                <img src={spinreact} className="spin" />
                <span className="title-font font-medium">
                  Are You Converting Leads To Sales?
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full ">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center bgimage">
                <img src={spinreact} className="spin" />
                <span className="title-font font-medium">
                  Is Your Website Mobile Optimised?
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default WebReact;
