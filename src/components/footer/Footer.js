import React from "react";
// import roundmail from '../asset/roundmail.png'
// import calllogo from '../asset/calllogo.png'
import location from "../../asset/location.png";
import mainlogo from "../../asset/mainlogo.png";
import mainlogoappie from "../../asset/mainlogoappie.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="bg_footer_color">
        <div class="flex justify-content-evenly md:text-left pt-5  order-first">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
            <div class="h-full flex items-center  rounded-lg">
              <img alt="team" class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4" src={location} />
              <div class="flex-grow">
                <h2 class=" footer_info">SEND YOUR MESSAGE</h2>
                <p class="text-white inner_footer_info">
                  info@appiesoftwebsolutions.com
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
            <div class="h-full flex items-center rounded-lg">
              <img alt="team" class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4" src={location} />
              <div class="flex-grow">
                <h2 class=" footer_info">CALL US</h2>
                <p class="text-white inner_footer_info">+91-8847249971</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-25">
            <div class="h-full flex items-center  rounded-lg">
              <img
                alt="team"
                class="w-23 h-23  object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={location}
              />
              <div class="flex-grow">
                <h2 class="inner_footer_info text-white">
                  SCF 80 FF, Phase 11, Sector 65, Sahibzada Ajit Singh Nagar,
                  Punjab 160065
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-right text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 ps-5">
            <img src={mainlogoappie} alt="" className="rounded-2" />
            <p className="img_para w-50 text-start mt-4">
            We are energetic about
creating Brand value and
Development and this
nearly keep running into
our veins. We are altogether
dedicated toward our work,
looking for chances to make
stylish items over the
advanced range
            </p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full ps-5">
              <h2 class="text-white text-start mb-3 head_links">Quick Links</h2>
              <nav class="list-none mb-10 text-start inner_links">
                <li className="my-2">
                  <a>Home </a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li className="my-2">
                  <a>Services</a>
                </li>
                <li>
                  <a>Our Works</a>
                </li>
                <li className="my-2">
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class=" text-white text-start head_links mb-3">Services</h2>
              <nav class="list-none mb-10 inner_links text-start">
                <li className="my-2">
                  <a>Web Development</a>
                </li>
                <li>
                  <a>Web & Graphics Design</a>
                </li>
                <li className="my-2">
                  <a>Ecommerce Websites</a>
                </li>
                <li>
                  <a>Apps Development</a>
                </li>
                <li className="my-2">
                  <a>Search Engine Optimization</a>
                </li>
                <li>
                  <a>Industrial Training</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-1">
              <h2 class="text-white text-start head_links mb-3">
            Our Location
              </h2>
              <h2 class="text-white text-start head_links mb-3">
       Loding...
              </h2>
            </div>
          
          </div>
          <div className="flex justify-center text-white mt-3">
            <div className="">
            Copyright © 2021 Appiesoft Web Solutions Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
