import React from 'react'
import Button from 'react-bootstrap/Button';
import "./HeroSection.css"
const HeroSection = () => {
    return (
        <div>
            <section id="hero" class="d-flex align-items-center">
                <div className='col-10  mx-auto mt-3'>
                    <div class="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1 className='text-white'>Telecommunications & IT <br /> That<span className='ms-3'>Works Every Time</span></h1>
                        <h2 className='text-white'>  We’ll handle the tech so you can get on <br /> with running your business.</h2>
                        <div class="d-flex">
                            <Button className='main_button rounded-2 py-3 px-3 border-0 mt-4'>Talk To An Expert Now</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection