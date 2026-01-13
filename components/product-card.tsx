import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bath, Bed, MapPin, Maximize } from "lucide-react";

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

function ProductCard({ property }: { property: Props }) {
  return (
    <Card key={property.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 p-0 border-border/50 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          {property.forSale && (
            <Badge className="bg-destructive/90 backdrop-blur-sm hover:bg-destructive">For Sale</Badge>
          )}
          {property.forRent && (
            <Badge className="bg-chart-2/90 backdrop-blur-sm hover:bg-chart-2">For Rent</Badge>
          )}
        </div>
      </div>
      <CardContent className="px-6 pb-6 pt-4">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{property.title}</h3>
        <p className="text-2xl font-bold gradient-text mb-3">{property.price}</p>
        <p className="text-muted-foreground mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-primary" />
          {property.location}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-primary" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-primary" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4 text-primary" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
