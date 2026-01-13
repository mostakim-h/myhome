"use client"

import {Button} from "@/components/ui/button"
import {Home, User} from "lucide-react"
import React from "react"

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-blue-600"/>
            <span className="text-2xl font-bold">
                <span className="text-blue-600">99</span>
                <span className="text-gray-800">Housing</span>
              </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Land Sale</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Flat Sale</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About us</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2"/>
              Create Account
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Home className="w-4 h-4 mr-2"/>
              Add Listing
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
