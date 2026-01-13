import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Sophia Hart',
    role: 'Real Estate Agent',
    email: 'sophia@realestate.com',
    phone: '+1 234 567 8900',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Ralph Curtis',
    role: 'Real Estate Agent',
    email: 'ralph@realestate.com',
    phone: '+1 234 567 8901',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Jacob Acuin',
    role: 'Real Estate Agent',
    email: 'jacob@realestate.com',
    phone: '+1 234 567 8902',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Sophia Oral',
    role: 'Real Estate Agent',
    email: 'sophia.o@realestate.com',
    phone: '+1 234 567 8903',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop'
  }
];

function RealEstateAdvisors() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">MEET OUR AGENTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Real Estate <span className="gradient-text">Advisors</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Meet our dedicated team of licensed real estate agents, bringing unique expertise to
            help you achieve success. They'll walk you through every step of your journey with
            personalized support and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="p-0 group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{agent.name}</h3>
                <p className="text-muted-foreground mb-4">{agent.role}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {agent.email}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    {agent.phone}
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RealEstateAdvisors;
