import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Linkedin, Twitter} from "lucide-react";

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">MEET OUR AGENTS</p>
          <h2 className="text-4xl font-bold text-gray-900">Your Real Estate Advisors</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet our dedicated team of licensed real estate agents, bringing unique expertise to
            help you achieve success. They&#39;ll walk you through every step of your journey with
            personalized support and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className="text-gray-600 mb-4">{agent.role}</p>
                <p className="text-sm text-gray-500 mb-2">{agent.email}</p>
                <p className="text-sm text-gray-500 mb-4">{agent.phone}</p>
                <div className="flex justify-center gap-3">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
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