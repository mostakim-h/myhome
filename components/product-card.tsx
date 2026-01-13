import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Bath, Bed, MapPin, Maximize} from "lucide-react";

interface Props {
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

function ProductCard({property}: {property: Props}) {
  return (
    <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow p-0">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-64 w-full object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.forSale && (
            <Badge className="bg-red-500">For Sale</Badge>
          )}
          {property.forRent && (
            <Badge className="bg-green-500">For Rent</Badge>
          )}
        </div>
      </div>
      <CardContent className="px-6 pb-6">
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-primary mb-3">{property.price}</p>
        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-1"/>
          {property.location}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600 border-t pt-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4"/>
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4"/>
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4"/>
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;