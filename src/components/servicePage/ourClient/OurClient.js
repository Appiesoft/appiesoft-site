import React from 'react'
import client1 from '../../../asset/client/client1.png'
import client2 from '../../../asset/client/client2.png'
import client3 from '../../../asset/client/client3.png'
import client4 from '../../../asset/client/client4.png'
import client5 from '../../../asset/client/client5.png'
import client6 from '../../../asset/client/client6.png'
import client7 from '../../../asset/client/client7.png'

import client8 from '../../../asset/client/client8.svg'
import client11 from '../../../asset/client/client11.png'
import { Col, Row } from 'react-bootstrap'
import img1 from '../../../asset/img1.png'
import img2 from '../../../asset/img2.png'
import img3 from '../../../asset/img3.png'
import './OurClient.css'
const OurClient = () => {
    return (
        <div className='col-auto'>
            <section class="section-five">
	     <div class="container">
	             <div class="Our-clients-box">
	                    <div class="our-client-text">
	                     <h5>Our clients</h5>
	                     <h2>We Have The Pleasure Of Working With</h2> 
	                    </div>
	                <ul>
	                    <li class="myBtn">
                        <img src={client1} className="img-fluid img_circle_size" alt="" />
	                      
	                   </li>
	                    <li class="myBtn">
                        <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn">
                       <img src={client3} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn">
                       <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn btnffth">
                       <img src={client4} className="img-fluid img_circle_size" alt="" />
	                   </li>
	               </ul>
	               <ul class="mmk">
	                   <li class="myBtn btnsxth">
                       <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn btnsvnth">
                       <img src={client7} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn btnegth">
                       <img src={client6} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li class="myBtn btnninth">
                       <img src={client5} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                    <li class="myBtn btntenth">
	                    <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	               </ul>
	              
	           </div>
	       <div class="clr"></div> 
	     </div>

 </section>

            <section className='py-5 '>
                <div className="container mx-auto py-3">
                    <div className='head_line mb-3 mx-3'>
                        <h6>News</h6>
                    </div>
                    <div className='inner_head_line d-md-flex justify-between mx-3' >
                        <h2>Advice on how to <br />
                            make your content.
                        </h2>
                        <div className='align-self-end mt-3 mt-lg-0'>
                            <button className='main_button py-3 text-white px-4 rounded-2'>
                                Explore All Resources
                            </button>
                        </div>
                    </div>
                    <Row className=" mt-5 mx-auto">
                        <div class="col-md-6 col-sm-12 portfolio-item filter-app mb-4 mb-sm-0">
                            <div className='row mx-auto position-relative border_radius'>
                                <div className='col-12 px-0'>
                                    <img src={img3} class="img-fluid img_work" alt="" />
                                </div>
                                <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                    <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                    <h4 className='m-0 para_text mt-3'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 portfolio-item filter-app mt-sm-4 mt-md-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className='row mx-auto position-relative border_radius'>
                                        <div className='col-12 px-0'>
                                            <img src={img1} class="img-fluid img_work" alt="" />
                                        </div>
                                        <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                            <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                            <h4 className='m-0 para_text mt-3'>
                                                Amet minim mollit non deserunt.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className='row mx-auto position-relative border_radius'>
                                        <div className='col-12 px-0'>
                                            <img src={img2} class="img-fluid img_work" alt="" />
                                        </div>
                                        <div className='col-12 d-flex flex-column pb-5 position_textBox ps-4'>
                                            <p className='m-0 heading_text mt-auto'>Managed IT</p>
                                            <h4 className='m-0 para_text mt-3'>
                                                Amet minim mollit non deserunt.
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Row>
                </div>

            </section>
        </div>
    )
}

export default OurClient