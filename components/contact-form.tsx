import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import StatesSection from "@/components/states-section";

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

  return (
    <section className="py-20 bg-gray-900">
      <div className={'flex items-center lg:flex-row flex-col container mx-auto px-4'}>
        <StatesSection/>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
              <Input
                type="email"
                placeholder="Your email address"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
              />
              <Input
                placeholder="Phone number (optional)"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
              />
              <Textarea
                placeholder="Enter your message here..."
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="min-h-[120px]"
              />
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Get Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;