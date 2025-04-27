
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-campus-700 to-campus-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover, Join, and Create Campus Events
          </h1>
          <p className="text-lg md:text-xl mb-8 text-campus-100">
            Your one-stop platform for all college events. Whether you're looking to attend 
            or organize an event, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-campus-800 hover:bg-campus-50">
              <Link to="/events">Browse Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-campus-800">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
