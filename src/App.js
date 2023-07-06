import React from 'react'
import Navbar from './components/Navbar'
import InnerNavbar from './components/InnerNavbar'
import HeroSection from './components/HeroSection'
import ItcGroup from './components/ItcGroup'
import OurService from './components/OurService'
import ClientPage from './components/ClientPage'
import PartnerPage from './components/PartnerPage'
import ClientReviews from './components/ClientReviews'
import InputField from './components/InputField'
import Footer from './components/Footer'
import './App.css'
const App = () => {
    return (
        <div>
            <Navbar />
            <InnerNavbar />
            <HeroSection />
            <ItcGroup />
            <OurService />
            <ClientPage />
            <ClientReviews />
            <PartnerPage />
            <InputField />
            <Footer />
            {/* <table>
                <thead>
                    <tr>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Monthly  Leave
                                </span>
                            </div>
                        </th>
                        <th >
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Jan
                                </span>
                            </div>
                        </th>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Feb
                                </span>
                            </div>
                        </th>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Mar
                                </span>
                            </div>
                        </th>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Jun
                                </span>
                            </div>
                        </th>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Jul
                                </span>
                            </div>
                        </th>
                        <th>
                            <div class="rotated-th">
                                <span class="rotated-th__label">
                                    Aug
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Sourabh </th>
                        <td> &#9989; </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th scope="row"> Mohit </th>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th scope="row"> Vishal  </th>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th scope="row"> Chandan  </th>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <th scope="row">Tanuj </th>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                        <td> &#9989; </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default App