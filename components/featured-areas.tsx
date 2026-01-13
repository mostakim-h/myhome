"use client"

import {Button} from "@/components/ui/button"
import {ChevronRight} from "lucide-react";
import {Card} from "@/components/ui/card";
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
          <p className="text-primary font-semibold mb-2">FIND YOUR PROPERTY</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Featured Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card key={city.name} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer p-0">
              <div className="relative h-64">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                  <p className="text-gray-200">{city.properties} Properties</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={'flex flex-wrap justify-center mt-12'}>
          <Button>
            See all areas
            <ChevronRight className="w-4 h-4 ml-2"/>
          </Button>
        </div>

      </div>
    </section>
  )
}
