import React from 'react'
import image2 from '../asset/image2.png'
import image6 from '../asset/image6.png'
import image3 from '../asset/image3.png'
import image4 from '../asset/image4.png'
import image7 from '../asset/image7.png'
import image8 from '../asset/image8.png'
import image11 from '../asset/image11.png'
import image12 from '../asset/image12.png'
import image5 from '../asset/image5.png'
const PartnerPage = () => {
    return (
        <div>
            <section className='pt-5'>
                <div class="container" data-aos="zoom-in">
                    <header class="inner_head_line text-center">
                        <h3>Our Trusted Partners</h3>
                    </header>
                    <div > <div className="align-items-center flex-wrap">
                        <div className=' col-8 mx-auto flex-wrap d-flex justify-content-evenly '>
                            <img src={image2} class="img-fluid my-4" alt="" />
                            <img src={image8} class="img-fluid my-4 mx-4" alt="" />
                            <img src={image3} class="img-fluid my-4 ms-4" alt="" />
                            <img src={image4} class="img-fluid my-4 ms-5" alt="" />
                            <img src={image5} class="img-fluid mx-3" alt="" />
                            <img src={image6} class="img-fluid mx-3" alt="" />
                            <img src={image7} class="img-fluid mx-3" alt="" />
                            <img src={image11} class="img-fluid mx-3" alt="" />
                            <img src={image12} class="img-fluid mx-3" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnerPage