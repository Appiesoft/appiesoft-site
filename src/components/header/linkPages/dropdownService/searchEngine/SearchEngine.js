import React from 'react'
import './SearchEngine.css'
import Header from '../../../Header'
import OurPartners from '../../../../servicePage/ourPartners/OurPartners'
import Footer from '../../../../footer/Footer'
import Contact from '../../../../servicePage/contactUS/Contact'
const SearchEngine = () => {
  return (

    <div>
     <Header/>
      <div class="search_inner_banner">
    <div class="container">
        <h1>Search Engine Optimisation</h1>
    </div>
</div>
<section class="ict-sec-one">
    <div class="my_wrap">
           <div class="business-commun-text"> 
                <h2>Helping customers find your business online</h2>
                <p>Not sure where to start with Search Engine Optimisation? Relax and leave the hard work to us.<br/><br/>

					SEO can seem complicated, confusing and costly. <a href="https://telcoict.com.au/">Telco ICT Group</a> is a Search Engine Optimisation Specialist – we will work with you to demystify the SEO process and set you up with an
affordable Search Engine Optimisation Package to fit your needs.</p>
                 <a href="https://telcoict.com.au/contact-us/"><button type="button">Talk To An Expert Now</button></a>
           </div>
             <div class="commun-img-area cmn-img-area-new-img"> 
               <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/seobackimg.jpg" alt="Search Engine Optimisation"/> 
           </div>
        <div class="clr"></div>
    </div>
 </section>
 <section class="Search-Engine-icon-sec new-seo-icon-sec "> 
    <div class="container">
             <div class="we-got-area Search-Engine we-got-new-seo">
                  <div class="we-got-image Search-Engine-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/searchimage.png" alt="Search Engine Optimisation" />
                  </div>
                   <div class="we-got-content Search-Engine-cont seo-new-cont">
                       <p class="seo-parag">Our experienced technicians will break down and explain all Search Engine Optimisation SCosts so you’ll understand all costs upfront.<br/><br/>

Our Search Engine Optimizer Services will help customers and prospects find you and stay with you.</p>
                   </div>
             </div>
            
    </div>
 </section>
 <section class="SEO-Myths-out-watch"> 
    <div class="container">
    <div>
    <h1 class="SEO-Myths-head">Five SEO Myths to watch out for</h1>
    </div>
           
             <div class="SEO-Myths-out">
                  <div class="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg1.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div class="SEO-Myths-out-cont">
                       <span class="seo-myth-conent">SEO Myth #1:</span>
                       <h2>High Keyword Density Will Improve Page Ranking</h2>
                       <p>Crowding your webpage with the same keywords over and over is referred to as keyword stuffing, which can actually lead to search penalties.</p>
                   </div>
             </div>
       
              <div class="SEO-Myths-out">
                  <div class="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg2.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div class="SEO-Myths-out-cont">
                       <span class="seo-myth-conent">SEO Myth #2:</span>
                       <h2>Quantity of Links is More Important than Quality</h2>
                       <p>Website visitors are smarter these days and may discount you altogether if they see you are providing excessive links. We recommend lowering the quantity of your links and concentrate more on quality.</p>
                   </div>
             </div>
    
              <div class="SEO-Myths-out">
                  <div class="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg3.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div class="SEO-Myths-out-cont">
                       <span class="seo-myth-conent">SEO Myth #3:</span>
                       <h2>The Type of Links Doesn’t Matter</h2>
                       <p>One of the important goals of SEO is to build authority, creating trust among potential customers, which can lead to a higher conversion rate.We do this is by the type of links you share.</p>
                   </div>
             </div>
       
              <div class="SEO-Myths-out">
                  <div class="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg4.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div class="SEO-Myths-out-cont">
                       <span class="seo-myth-conent">SEO Myth #4:</span>
                       <h2>Link Building is Not Relevant for SEO</h2>
                       <p>A lack of link building can lead to lower success in achieving higher rankings and gaining traffic. Any improper link structure may cause the search engine to fail to crawl and index your site properly and affect your ratings.</p>
                   </div>
             </div>
      
              <div class="SEO-Myths-out">
                  <div class="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg5.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div class="SEO-Myths-out-cont">
                       <span class="seo-myth-conent">SEO Myth #5:</span>
                       <h2>SEO is a One-Time Job</h2>
                       <p>Crowding your webpage with the same keywords over and over is referred to as keyword stuffing, which can actually lead to search penalties.</p>
                   </div>
             </div>
    </div>
 </section>
<OurPartners/>
<Contact/>
<Footer/>
    </div>
  )
}

export default SearchEngine
