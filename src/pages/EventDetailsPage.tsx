
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, User, Users, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // In a real app, you would fetch this data based on the ID
  // This is mock data for demonstration
  const event = {
    id: id || "1",
    title: "Fall Career Fair 2023",
    date: "Oct 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Center Grand Hall",
    category: "Career",
    image: "https://source.unsplash.com/random/1200x600/?career",
    organizer: "Career Services Center",
    description: `
      Join us for the annual Fall Career Fair where you'll have the opportunity to meet with representatives from over 50 companies across various industries. This event is perfect for students looking for internships, co-ops, or full-time positions.
      
      Companies attending include: Tech Innovators, Finance First, Engineering Excellence, Marketing Masters, and many more!
      
      Remember to bring copies of your resume and dress professionally. There will also be a resume review station and professional headshot booth available on a first-come, first-served basis.
    `,
    spotsLeft: 25,
    totalSpots: 200,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log('Registration data:', formData);
    
    // Show success toast
    toast({
      title: "Registration successful!",
      description: "You are now registered for this event.",
    });
    
    // Close the dialog
    setIsDialogOpen(false);
  };
  
  if (!event) {
    return (
      <PageContainer>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="relative h-64 md:h-96 overflow-hidden bg-campus-900">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-campus-900/80 to-campus-800/40">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-campus-600">{event.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-campus-300" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-campus-300" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-campus-300" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <div className="prose max-w-none">
                {event.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Organizer</h2>
              <div className="flex items-center gap-3">
                <div className="bg-campus-100 rounded-full p-2">
                  <User className="h-6 w-6 text-campus-600" />
                </div>
                <div>
                  <p className="font-medium">{event.organizer}</p>
                  <p className="text-sm text-gray-600">Event Host</p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Registration Details</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Secure your spot for this event
                </p>
                
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">{event.date}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{event.time}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{event.location}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-medium">
                    {event.spotsLeft} / {event.totalSpots} spots left
                  </span>
                </div>
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-campus-600 hover:bg-campus-700">
                    Register Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Register for {event.title}</DialogTitle>
                    <DialogDescription>
                      Fill in your details to secure your spot at this event.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-campus-600 hover:bg-campus-700"
                      >
                        Confirm Registration
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>
                  {event.totalSpots - event.spotsLeft} people have registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default EventDetailsPage;
