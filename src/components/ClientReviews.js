import React from 'react'
import customer1 from '../asset/customer1.png'
// import customer2 from '../asset/customer2.png'
import customer3 from '../asset/customer3.png'
import googlereview from '../asset/googlereview.png'
// import star from '../asset/star.png'
import './ClientReviews.css'
const ClientReviews = () => {
    return (
        <div>
            <section className='bg-light'>
                <div class="container px-5 py-24 mx-auto">
                    <div className='inner_head_line text-center'>
                        <h4>What Our Clients Say</h4>
                    </div>
                    <div className='googleImg my-4'>
                        <img src={googlereview} alt="" />
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                                        <img src={customer1} alt="" />
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Matt Costner</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="">Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white  p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                        {/* <img src={customer3} alt="" /> */}
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Alexa Michael</h2>
                                </div>
                                {/* <span>
                                    <img src={star} alt="" /></span> */}
                                <div class="flex-grow">
                                    <p class="">Pellentesque eu sit a feugiat erat tellus in lectus consequat mattis libero at fringilla gravida facilisis et sit tellus proin phasellus non eu.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white  p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                        <img src={customer3} alt="" />
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Sophie Moore
                                    </h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="">Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white  p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                        <img src={customer3} alt="" />
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Sophie Moore
                                    </h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="">Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white  p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                        <img src={customer3} alt="" />
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Sophie Moore
                                    </h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="">Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-4 h-full   bg-white  p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                        <img src={customer3} alt="" />
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Sophie Moore
                                    </h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="">Vitae tempor tellus nunc volutpat amet eget ultricies nascetur ornare felis mattis sed pretium morbi est at congue parturient elit et phasellus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ClientReviews
