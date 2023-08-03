import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import WebReact from './components/header/linkPages/webReact/WebReact';


const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const AboutUs = lazy(() => import('./components/header/linkPages/aboutUs/AboutUs'));
const ContactUs = lazy(() => import('./components/header/linkPages/contactUs/ContactUs'));
const OurWork = lazy(() => import('./components/header/linkPages/work/OurWork'));
const Testimonial = lazy(() => import('./components/header/linkPages/testimonial/Testimonial'));
const WebGhrapic = lazy(() => import('./components/header/linkPages/dropdownService/web&ghrapic/WebGhrapic'));
const WebService = lazy(() => import('./components/header/linkPages/dropdownService/webdevelopment/WebService'));
const SearchEngine = lazy(() => import('./components/header/linkPages/dropdownService/searchEngine/SearchEngine'));
const Ecommerce = lazy(() => import('./components/header/linkPages/dropdownService/ecommerce/Ecommerce'));
const AppDevelopment = lazy(() => import('./components/header/linkPages/dropdownService/appDevelopment/AppDevelopment'));
const Error = lazy(() => import('./components/dashboard/ErrorPage/Error'));

const App = () => {
  return (
    <>
      <Suspense fallback={ <div className="spinner-overlay">
      <div className="spinner" />
    </div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/web-and-graphic" element={<WebGhrapic />} />
          <Route path="/web-development" element={<WebService />} />
          <Route path="/search-engine-optimization" element={<SearchEngine/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          <Route path="/react-development" element={<WebReact/>} />
          <Route path="/app-development" element={<AppDevelopment />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
