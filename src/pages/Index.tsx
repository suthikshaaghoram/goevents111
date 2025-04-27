
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import HeroSection from '@/components/home/HeroSection';
import EventsList from '@/components/event/EventsList';
import CategoriesSection from '@/components/home/CategoriesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: "1",
      title: "Anna University Technical Symposium 2025",
      date: "May 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Anna University, Chennai",
      category: "Technical",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1461749280684-dccba630e2f6')}?q=80&w=300&h=200&auto=format&fit=crop`,
      isPopular: true,
      spotsLeft: 100
    },
    {
      id: "2",
      title: "PSG Tech Leadership Summit",
      date: "May 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "PSG College of Technology, Coimbatore",
      category: "Academic",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1519389950473-47ba0277781c')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 50
    },
    {
      id: "3",
      title: "Madras Cultural Festival 2025",
      date: "June 5, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Madras Institute of Technology, Chennai",
      category: "Cultural",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1605810230434-7631ac76ec81')}?q=80&w=300&h=200&auto=format&fit=crop`,
      isPopular: true,
      spotsLeft: 200
    },
    {
      id: "4",
      title: "VIT Sports Championship",
      date: "June 12, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "VIT University, Vellore",
      category: "Sports",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1526374965328-7f61d4dc18c5')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 150
    },
  ];
  
  return (
    <PageContainer>
      <HeroSection />
      
      <CategoriesSection />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>
            <Button asChild variant="outline">
              <Link to="/events">View All</Link>
            </Button>
          </div>
          
          <EventsList events={upcomingEvents} />
        </div>
      </section>
      
      <section className="py-12 bg-campus-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Are you hosting an event?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Create and manage your campus events, track registrations, and reach more students.
          </p>
          <Button asChild size="lg" className="bg-campus-600 hover:bg-campus-700">
            <Link to="/admin/create-event">Create an Event</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Index;
