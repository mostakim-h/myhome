"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Home as HomeIcon, DollarSign } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HeroSection() {
  const [searchLocation, setSearchLocation] = useState('');

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop',
      title: 'Find Your Perfect Home',
      subtitle: 'Discover a place you\'ll love to live'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop',
      title: 'Modern Living Spaces',
      subtitle: 'Experience luxury and comfort'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop',
      title: 'Your Dream Awaits',
      subtitle: 'Find the perfect property for your lifestyle'
    }
  ];

  return (
    <section className="relative pt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-[92dvh] hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

              {/* Animated Hero Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 animate-fade-in-up animation-delay-200 drop-shadow-lg max-w-3xl">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                  <Button size="lg" className="gradient-bg hover:opacity-90 transition-all duration-300 dark:text-white dark:hover:text-white shadow-2xl hover:shadow-primary/50 hover:scale-105 text-lg px-8 py-6">
                    Explore Properties
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300 shadow-2xl hover:scale-105 text-lg px-8 py-6">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
