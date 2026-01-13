"use client"

import React, {useState} from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyCard from "@/components/property-card";
import {properties} from "@/lib/property-data";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, SlidersHorizontal} from "lucide-react";

export default function LandSalePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen smooth-scroll">
      <Header/>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              জমি <span className="gradient-text">বিক্রয়</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              আপনার স্বপ্নের জমি খুঁজে নিন আমাদের প্রিমিয়াম সংগ্রহ থেকে
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto glass-strong rounded-2xl p-6 shadow-2xl border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                <Input
                  placeholder="অবস্থান বা শিরোনাম দিয়ে খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger
                  className="h-12 w-full p-5.5 bg-background/50 border-border/50 focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="সম্পত্তির ধরন"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">সব ধরনের</SelectItem>
                  <SelectItem value="land">জমি</SelectItem>
                  <SelectItem value="flat">ফ্ল্যাট</SelectItem>
                  <SelectItem value="commercial">বাণিজ্যিক</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger
                  className="h-12 w-full p-5.5 bg-background/50 border-border/50 focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="অবস্থা"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">সব অবস্থা</SelectItem>
                  <SelectItem value="available">বিক্রয়ের জন্য</SelectItem>
                  <SelectItem value="reserved">সংরক্ষিত</SelectItem>
                  <SelectItem value="sold">বিক্রিত</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProperties.length}</span> টি সম্পত্তি পাওয়া গেছে
            </p>
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property}/>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
                <SlidersHorizontal className="w-10 h-10 text-muted-foreground"/>
              </div>
              <h3 className="text-2xl font-bold mb-2">কোনো সম্পত্তি পাওয়া যায়নি</h3>
              <p className="text-muted-foreground">
                আপনার অনুসন্ধান মানদণ্ড পরিবর্তন করে আবার চেষ্টা করুন
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
