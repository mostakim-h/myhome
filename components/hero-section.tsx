"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Search} from "lucide-react"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

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
        autoplay={{delay: 5000}}
        loop
        className="h-[800px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Box */}
      <div
        className="absolute"
        style={{
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1200px',
          zIndex: 10
        }}
      >
        <div className="container mx-auto p-10">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-6">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                </TabsList>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      className={'w-full'}
                      placeholder="Enter Location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0৳ - 5,000৳">0৳ - 5,000৳</SelectItem>
                        <SelectItem value="5,000৳ - 10,000৳">5,000৳ - 10,000৳</SelectItem>
                        <SelectItem value="10,000+৳">10,000+৳</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>
                    <Search className="w-5 h-5 mr-2"/>
                    Search
                  </Button>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
