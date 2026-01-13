"use client"

import { use } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPropertyById } from "@/lib/property-data";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Phone, Mail, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const statusColors = {
    available: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    sold: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    reserved: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
  };

  const statusLabels = {
    available: "বিক্রয়ের জন্য",
    sold: "বিক্রিত",
    reserved: "সংরক্ষিত"
  };

  return (
    <div className="min-h-screen smooth-scroll">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/land-sale" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>সব সম্পত্তিতে ফিরে যান</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="bg-white/90 dark:text-black hover:bg-white backdrop-blur-sm">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 dark:text-black hover:bg-white backdrop-blur-sm">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Grid */}
                {property.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {property.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                          src={image}
                          alt={`${property.title} - ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Info */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{property.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>
                  <Badge className={`${statusColors[property.status]} border text-base px-4 py-2`}>
                    {statusLabels[property.status]}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-lg">{property.size}</span>
                  </div>
                  <div className="h-6 w-px bg-border"></div>
                  <div className="text-3xl font-bold gradient-text">{property.price}</div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                  <TabsTrigger value="specifications" className="data-[state=active]:gradient-bg data-[state=active]:text-black">
                    বিস্তারিত তথ্য
                  </TabsTrigger>
                  <TabsTrigger value="features" className="data-[state=active]:gradient-bg data-[state=active]:text-black">
                    বৈশিষ্ট্য
                  </TabsTrigger>
                  <TabsTrigger value="terms" className="data-[state=active]:gradient-bg data-[state=active]:text-black">
                    শর্তাবলী
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="specifications" className="mt-6">
                  <Card className="glass border-border/50">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(property.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-start py-3 border-b border-border/50 last:border-0">
                            <span className="font-semibold text-muted-foreground">{key}</span>
                            <span className="text-right font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <Card className="glass border-border/50">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="terms" className="mt-6">
                  <Card className="glass border-border/50">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {property.terms.map((term, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-semibold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-muted-foreground">{term}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <Card className="glass-strong border-border/50 shadow-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">যোগাযোগ করুন</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl gradient-bg">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ফোন</p>
                          <p className="font-semibold">{property.contact.phone}</p>
                        </div>
                      </div>

                      {property.contact.email && (
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl gradient-bg">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">ইমেইল</p>
                            <p className="font-semibold">{property.contact.email}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={() => window.open(`tel:${property.contact.phone}`, '_blank')}
                        className="w-full gradient-bg dark:text-white dark:hover:text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl h-12">
                        <Phone className="w-5 h-5 mr-2" />
                        কল করুন
                      </Button>
                      <Button
                        onClick={() => window.open(`https://wa.me/${property.contact.phone}`)}
                        variant="outline"
                        className="w-full h-12">
                        <Mail className="w-5 h-5 mr-2" />
                        মেসেজ পাঠান
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="glass border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4">দ্রুত তথ্য</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">সম্পত্তি আইডি</span>
                        <span className="font-semibold">#{property.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ধরন</span>
                        <span className="font-semibold">
                          {property.type === 'land' ? 'জমি' : property.type === 'flat' ? 'ফ্ল্যাট' : 'বাণিজ্যিক'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">অবস্থা</span>
                        <Badge className={`${statusColors[property.status]} border text-xs`}>
                          {statusLabels[property.status]}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
