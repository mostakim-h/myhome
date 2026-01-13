"use client"

import {Button} from "@/components/ui/button"
import {Facebook, Home as HomeIcon, Instagram, Linkedin, Twitter} from "lucide-react"
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HomeIcon className="w-8 h-8 text-primary"/>
              <span className="text-2xl font-bold">
              <span className="text-primary">99</span>Housing
            </span>
            </div>
            <p className="text-gray-400 mb-4">
              We are a passionate team dedicated to bringing your real estate dreams to life.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20">
                <Facebook className="w-4 h-4"/>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20">
                <Twitter className="w-4 h-4"/>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20">
                <Instagram className="w-4 h-4"/>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20">
                <Linkedin className="w-4 h-4"/>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Recent Listings</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Property Listing 1</a></li>
              <li><a href="#" className="hover:text-white transition">Property Listing 2</a></li>
              <li><a href="#" className="hover:text-white transition">Property Listing 3</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Our Latest Blogs</h3>
            <div className="space-y-4">
              {blogPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="flex gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm text-gray-400">{post.date}</p>
                    <h4 className="text-sm font-semibold line-clamp-2">{post.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 99Housing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
