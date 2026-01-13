"use client";

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PremiumPropertiesSection from "@/components/premium-properties";
import ContactForm from "@/components/contact-form";
import FeaturedAreasSection from "@/components/featured-areas";
import AllProperties from "@/components/all-properties";
import RealEstateAdvisors from "@/components/real-estate-advisors";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

const Home: React.FC = () => {

  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection/>
      <PremiumPropertiesSection/>
      <ContactForm/>
      <FeaturedAreasSection/>
      <hr className={'border-dashed border-2 '} />
      <AllProperties/>
      <RealEstateAdvisors/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}

export default Home;