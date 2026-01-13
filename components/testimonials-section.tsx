"use client"

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Happy Homeowner',
    content: 'Absolute site was above my thinking. Very fast, professional and the right people',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Property Investor',
    content: 'The team helped me find the perfect investment property. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why people choose listee for own properties',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'How to choose your apartment wisely',
    date: 'Dec 08, 2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Make your residence clean and beautiful',
    date: 'Dec 05, 2024',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">WHAT THEY SAY</p>
            <h2 className="text-2xl font-bold mb-8">
              Read <span className="gradient-text">Testimonials</span> from Our Satisfied Clients
            </h2>

            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="mb-6 glass border-border/50 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog */}
          <div>
            <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">FROM OUR BLOG</p>
            <h2 className="text-2xl font-bold mb-8">
              Dream Home Found: Experience Our Client's <span className="gradient-text">Buying Journey</span>
            </h2>

            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="p-0 group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border-border/50 hover:scale-[1.02]">
                  <div className="flex">
                    <div className="relative w-32 h-32 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4 flex-1">
                      <p className="text-sm text-primary mb-2">{post.date}</p>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
