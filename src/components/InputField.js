import React from 'react'

const InputField = () => {
    return (
        <div>
            <div className='container input_field my-5'>
                <div className='row'>
                    <div className='col-4 p-4 bg_color_input'>
                        <div className='row'>
                            <div className="col-12 pb-3">
                                <p className='mb-3 text-white'>Contact Us</p>
                                <h1 className='m-0 text-white Talk_size'>
                                    Let’s Talk
                                </h1>
                            </div>
                            <div className='col-12 d-flex align-items-center justify-content-between'>
                                <div class="mb-3 me-3 input_field_names">
                                    <input type="text" class=" bg-transparent border-bottom" id="formGroupExampleInput" placeholder="Your Name" />
                                </div>
                                <div class="mb-3 ms-3 input_field_names">
                                    <input type="text" class="border-bottom  bg-transparent" id="formGroupExampleInput2" placeholder="Bussiness Name" />
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center justify-content-between'>
                                <div class="mb-3 me-3 input_field_names">
                                    <input type="text" class=" bg-transparent border-bottom" id="formGroupExampleInput" placeholder="Your Name" />
                                </div>
                                <div class="mb-3 ms-3 input_field_names">
                                    <input type="text" class="border-bottom  bg-transparent" id="formGroupExampleInput2" placeholder="Bussiness Name" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white'>
                                My Preference:
                            </h5>
                            <div >
                                <span><input type="checkbox" className='me-1 mt-3 manage1' /> Managed IT</span>
                            </div>
                            <div>
                                <span><input type="checkbox" className='me-1' />Communication </span>
                            </div>
                            <div>
                                <span><input type="checkbox" className='me-1' />Digital Strategy</span>
                            </div>
                            <div>
                                <button className='main_button px-4 py-2 rounded-2 text-white mt-4 mb-4'>Send More Information Please</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default InputField
