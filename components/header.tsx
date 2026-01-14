"use client"

import { Button } from "@/components/ui/button"
import { Home, User, Menu } from "lucide-react"
import React from "react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import Logo from "@/public/houseicon.png"
import Image from "next/image";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-sm border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src={Logo} alt={'logo'} className="w-14 h-14 text-primary drop-shadow-lg" />
              <div className="absolute inset-0 blur-xl bg-primary/30 -z-10"></div>
            </div>
            <span className="text-2xl font-bold">
              <span className="gradient-text">99</span>
              <span className="text-foreground">Housing</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105 inline-block">Home</Link>
            <Link href="/land-sale" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105 inline-block">Land Sale</Link>
            <Link href="/flat-sale" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105 inline-block">Flat Sale</Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105 inline-block">About us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:flex hover:bg-primary/10 transition-all duration-300">
              <User className="w-4 h-4 mr-2" />
              Create Account
            </Button>
            <Button className="gradient-bg hover:opacity-90 dark:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Home className="w-4 h-4 mr-2" />
              Add Listing
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
