"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Button } from "@/components/ui/button"
import React from "react"
import ProductCard from "@/components/product-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  featured?: boolean;
  forSale?: boolean;
  forRent?: boolean;
}

export default function PremiumPropertiesSection() {

  const premiumProperties: Property[] = [
    {
      id: 1,
      title: 'Minimalist Lake Hill',
      price: '$12,000',
      location: 'North Piper, USA',
      beds: 3,
      baths: 2,
      sqft: '2,500',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      featured: true,
      forSale: true
    },
    {
      id: 2,
      title: 'Modern Apartment',
      price: '$8,500',
      location: 'Los Angeles, USA',
      beds: 2,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      forRent: true
    },
    {
      id: 3,
      title: 'Ocean View Lounge',
      price: '$15,000',
      location: 'Miami, Florida',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Bright Office',
      price: '$9,200',
      location: 'New York, USA',
      beds: 2,
      baths: 1,
      sqft: '1,500',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
      forRent: true
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Premium <span className="gradient-text">Property Picks</span>
            </h2>
            <p className="text-muted-foreground text-center">Handpicked properties just for you</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumProperties.map((property) => (
            <ProductCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
