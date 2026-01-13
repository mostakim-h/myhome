import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Bath, Bed, MapPin, Maximize} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Badge} from "@/components/ui/badge";
import ProductCard from "@/components/product-card";

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
    title: 'Ocean Vieuw Lounge',
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

function AllProperties() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">CHECKOUT OUR NEW</p>
          <h2 className="text-4xl font-bold text-gray-900">Discover Your Perfect Place</h2>
        </div>

        <Tabs defaultValue="apartment" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
            <TabsTrigger value="apartment">Apartment</TabsTrigger>
            <TabsTrigger value="house">House</TabsTrigger>
            <TabsTrigger value="villa">Villa</TabsTrigger>
            <TabsTrigger value="condo">Condo</TabsTrigger>
            <TabsTrigger value="office">Office</TabsTrigger>
          </TabsList>

          <TabsContent value="apartment">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {premiumProperties.map((property) => (
                <ProductCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default AllProperties;