"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, DollarSign, ArrowRight } from "lucide-react";
import { Property } from "@/lib/property-data";
import Link from "next/link";

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    const statusColors = {
        available: "bg-white/10 text-white border-white/20",
        sold: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
        reserved: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
    };

    const statusLabels = {
        available: "বিক্রয়ের জন্য",
        sold: "বিক্রিত",
        reserved: "সংরক্ষিত"
    };

    return (
        <Link href={`/land-sale/${property.id}`}>
            <Card className="group p-0 overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:scale-[1.02] cursor-pointer h-full">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                        <Badge className={`${statusColors[property.status]} border`}>
                            {statusLabels[property.status]}
                        </Badge>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white mb-2">
                            <DollarSign className="w-5 h-5" />
                            <span className="text-2xl font-bold">{property.price}</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{property.location}</span>
                    </div>

                    {/* Size */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Home className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{property.size}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                        {property.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground line-clamp-1">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>বিস্তারিত দেখুন</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
