
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (would implement with a toast)
    alert('Your message has been sent successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-display font-bold text-school-green mb-6">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
            placeholder="What is this regarding?"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
            placeholder="Please write your message here..."
          />
        </div>
        
        <div>
          <Button type="submit" className="w-full md:w-auto bg-school-green hover:bg-school-green-dark text-white py-3 px-8 rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
