// src/App.jsx
import React from 'react';
// CRITICAL FIX: Import BrowserRouter and destructure it properly
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Import All Page Components
import ScrollToTop from './components/ScrollToTop';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    // CRITICAL FIX: The entire application MUST be wrapped in the Router component.
    <Router>
      <Navbar />
      <ScrollToTop />
      
      <main>
        <Routes>
          {/* 1. HOME PAGE (Single-Page Layout) */}
          <Route path="/" element={
            <>
              <Slider />
              <AboutUs />
              <Products />
              <Gallery />
              <InquiryForm />
              <ContactDetails />
            </>
          } />
          
          {/* 2. DEDICATED ABOUT US PAGE */}
          <Route path="/about" element={
            <div style={{paddingTop: '100px'}}><AboutUs isDedicatedPage={true} /></div>
          } />

          {/* 3. DEDICATED PRODUCTS LIST PAGE */}
          <Route path="/products" element={<Products/>} />
          
          {/* 4. DEDICATED GALLERY PAGE */}
          <Route path="/gallery" element={
            <div style={{paddingTop: '100px'}}><Gallery isDedicatedPage={true} /></div>
          } />

          {/* 5. DEDICATED INQUIRY PAGE */}
          <Route path="/inquiry" element={
            <div style={{paddingTop: '100px'}}><InquiryForm isDedicatedPage={true} /></div>
          } />

          {/* 6. DEDICATED CONTACT DETAILS PAGE */}
          <Route path="/contact" element={
            <div style={{paddingTop: '100px'}}><ContactDetails isDedicatedPage={true} /></div>
          } />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;