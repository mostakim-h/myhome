"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";

interface City {
  name: string;
  properties: number;
  image: string;
}

const cities: City[] = [
  {
    name: 'Amsterdam',
    properties: 35,
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop'
  },
  {
    name: 'Long Beach',
    properties: 89,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop'
  },
  {
    name: 'Texas',
    properties: 65,
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&h=300&fit=crop'
  },
  {
    name: 'Las Vegas',
    properties: 120,
    image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400&h=300&fit=crop'
  },
  {
    name: 'Dhaka',
    properties: 78,
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=400&h=300&fit=crop'
  },
  {
    name: 'Saudi Arabia',
    properties: 95,
    image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop'
  }
];

export default function FeaturedAreasSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">FIND YOUR PROPERTY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Our <span className="gradient-text">Featured Areas</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover the most sought-after locations with premium properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card key={city.name} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer p-0 border-border/50 hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
                  <p className="text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {city.properties} Properties
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={'flex flex-wrap justify-center mt-12'}>
          <Button className="gradient-bg dark:text-white dark:hover:text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            See all areas
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  )
}
