import React from 'react'
import client1 from '../../../asset/client/client1.png'
import client2 from '../../../asset/client/client2.png'
import client3 from '../../../asset/client/client3.png'
import client4 from '../../../asset/client/client4.png'
import client5 from '../../../asset/client/client5.png'
import client6 from '../../../asset/client/client6.png'
import client7 from '../../../asset/client/client7.png'
import {Row } from 'react-bootstrap'
import unnamed from '../../../asset/service/unnamed.png';
import darwin from '../../../asset/service/darwin.jpg';
import lankan from '../../../asset/service/lankan.jpg';
import recruitment from '../../../asset/service/recruitment.jpg';
import './OurClient.css'
import { NavLink } from 'react-router-dom'
const OurClient = () => {
    return (
        <div className='col-auto'>
            <section className="section-five">
	     <div className="container">
	             <div className="Our-clients-box">
	                    <div className="our-client-text">
	                     <h5>Our clients</h5>
	                     <h2 className='py-2'>We Have The Pleasure Of Working With</h2> 
	                    </div>
	                <ul>
	                    <li className="myBtn">
                        <img src={client1} className="img-fluid img_circle_size" alt="" />
	                      
	                   </li>
	                    <li className="myBtn">
                        <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn">
                       <img src={client3} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn">
                       <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn btnffth">
                       <img src={client4} className="img-fluid img_circle_size" alt="" />
	                   </li>
	               </ul>
	               <ul className="mmk">
	                   <li className="myBtn">
                       <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn">
                       <img src={client7} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn">
                       <img src={client6} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                   <li className="myBtn">
                       <img src={client5} className="img-fluid img_circle_size" alt="" />
	                   </li>
	                    <li className="myBtn">
	                    <img src={client2} className="img-fluid img_circle_size" alt="" />
	                   </li>
	               </ul>
	              
	           </div>
	       <div className="clr"></div> 
	     </div>

 </section>
            <section className='py-5 '>
                <div className="container mx-auto py-3">
                    <div className='head_line mb-3 mx-3'>
                        <h5>Latest Work</h5>
                    </div>
                    <div className='inner_head_line d-md-flex justify-between mx-3' >
                        <h2>Advice on how to <br />
                            make your content.
                        </h2>
                        <div className='align-self-end mt-3 mt-lg-0'>
                        <NavLink to='/about'>
                            <button className='explore_button  text-white rounded-2'>
                                Explore All Resources
                            </button></NavLink>
                        </div>
                    </div>
                    <Row className=" mt-5 mx-auto">
                        <div className="col-md-6 col-sm-12 mb-4 mb-sm-0">
                            <div className='row mx-auto '>
                                <div className='col-12 px-0'>
                                    <img src={lankan} className="img-fluid img_work" alt="" />
                                </div> 
                                
                            </div>
                            <div className='row mx-auto  mt-4 '>
                                <div className='col-12 px-0'>
                                    <img src={recruitment} className="img-fluid img_work" alt="" />
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12  mt-sm-4 mt-md-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className='row mx-auto '>
                                        <div className='col-12 px-0'>
                                            <img src={unnamed} className="img-fluid img_work" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className='row mx-auto'>
                                        <div className='col-12 px-0'>
                                            <img src={darwin} className="img-fluid img_work" alt="" />
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