import React from 'react'
import './SearchEngine.css'
import Header from '../../../Header'
import OurPartners from '../../../../servicePage/ourPartners/OurPartners'
import Footer from '../../../../footer/Footer'
import Contact from '../../../../servicePage/contactUS/Contact'
import bulb from '../../../../../asset/service/bulb.png'
const SearchEngine = () => {
  return (

    <div>
     <Header/>
      <div className="search_inner_banner">
    <div className="container">
        <h1>Search Engine Optimisation</h1>
    </div>
</div>
<section className="ict-sec-one">
    <div className="my_wrap">
           <div className="business-commun-text"> 
                <h2>SEO and Internet Marketing</h2>
                <p>Strengthen up your online presence with our advanced seo services in London,Edinburgh, UK. Being one of the best ways of business promotions, Search Engine Optimization (SEO) helps in generating significant leads. AppieSoft Web Solutions is considered to be the best seo company in the United Kingdom, which is known for its bespoke SEO strategies. We have the pool of best seo experts, who have the potential to improve your online visibility effectively and can deliver high quality targeted traffic towards your website.</p>
                 <a href="https://telcoict.com.au/contact-us/"><button type="button">Talk To An Expert Now</button></a>
           </div>
             <div className="commun-img-area cmn-img-area-new-img"> 
               <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/seobackimg.jpg" alt="Search Engine Optimisation"/> 
           </div>
        <div className="clr"></div>
    </div>
 </section>
 <section className="Search-Engine-icon-sec new-seo-icon-sec "> 
    <div className="container">
             <div className="we-got-area Search-Engine we-got-new-seo">
                  <div className="we-got-image Search-Engine-img">
                     <img src={bulb} alt="Search Engine Optimisation" />
                  </div>
                   <div className="we-got-content Search-Engine-cont seo-new-cont">
                       <p className="seo-parag">Our deep knowledge about keyword and market research, SEO PR, link building, content marketing,social media promotion, infographics, onpage and offpage SEO, makes us capable of delivering you the best search engine optimization results. <br/><br/>

Our Search Engine Optimizer Services will help customers and prospects find you and stay with you.</p>
                   </div>
             </div>
            
    </div>
 </section>
 <section className="SEO-Myths-out-watch"> 
    <div className="container">
    <div>
    <h1 className="SEO-Myths-head">Five SEO Myths to watch out for</h1>
    </div>
           
             <div className="SEO-Myths-out">
                  <div className="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg1.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div className="SEO-Myths-out-cont">
                       <span className="seo-myth-conent">SEO Myth #1:</span>
                       <h2>High Keyword Density Will Improve Page Ranking</h2>
                       <p>Crowding your webpage with the same keywords over and over is referred to as keyword stuffing, which can actually lead to search penalties.</p>
                   </div>
             </div>
       
              <div className="SEO-Myths-out">
                  <div className="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg2.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div className="SEO-Myths-out-cont">
                       <span className="seo-myth-conent">SEO Myth #2:</span>
                       <h2>Quantity of Links is More Important than Quality</h2>
                       <p>Website visitors are smarter these days and may discount you altogether if they see you are providing excessive links. We recommend lowering the quantity of your links and concentrate more on quality.</p>
                   </div>
             </div>
    
              <div className="SEO-Myths-out">
                  <div className="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg3.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div className="SEO-Myths-out-cont">
                       <span className="seo-myth-conent">SEO Myth #3:</span>
                       <h2>The Type of Links Doesn’t Matter</h2>
                       <p>One of the important goals of SEO is to build authority, creating trust among potential customers, which can lead to a higher conversion rate.We do this is by the type of links you share.</p>
                   </div>
             </div>
       
              <div className="SEO-Myths-out">
                  <div className="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg4.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div className="SEO-Myths-out-cont">
                       <span className="seo-myth-conent">SEO Myth #4:</span>
                       <h2>Link Building is Not Relevant for SEO</h2>
                       <p>A lack of link building can lead to lower success in achieving higher rankings and gaining traffic. Any improper link structure may cause the search engine to fail to crawl and index your site properly and affect your ratings.</p>
                   </div>
             </div>
      
              <div className="SEO-Myths-out">
                  <div className="SEO-Myths-out-img">
                     <img src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/fiveseoimg5.png" alt="Search Engine Optimisation"/>
                  </div>
                   <div className="SEO-Myths-out-cont">
                       <span className="seo-myth-conent">SEO Myth #5:</span>
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
