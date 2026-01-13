"use client"

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+8801812932328",
      description: "Mon-Fri 9am to 6pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@99housing.com",
      description: "We'll respond within 24hrs"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Dhaka, Bangladesh",
      description: "Come say hello"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 flex-1">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you're looking to buy, sell, or rent, our team of experts is here to help you every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass hover:glass-strong p-0 transition-all duration-300 hover:scale-105 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl gradient-bg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.detail}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Proof */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Trusted by over 10,000+ happy customers</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='h-full flex-1'>
            <Card className="glass-strong border-border/50 shadow-2xl p-0">
              <CardContent className="p-8 ">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Phone number (optional)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <Textarea
                    placeholder="Enter your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full gradient-bg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 h-12 text-base font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
