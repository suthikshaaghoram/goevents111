
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';

const AboutPage = () => {
  return (
    <PageContainer>
      <div className="bg-campus-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About CampusEvents
          </h1>
          <p className="text-campus-100 max-w-2xl">
            The easiest way to discover and participate in events happening across your campus.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              CampusEvents was created with a simple mission: to connect students with the vibrant activities and opportunities available on campus.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that college experiences extend far beyond the classroom, and participating in events can enrich students' academic and personal lives.
            </p>
            <p className="text-gray-700">
              Our platform makes it easy for students to discover events aligned with their interests and for event organizers to reach their target audience effectively.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/600x400/?campus" 
              alt="Students on campus" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-campus-100 text-campus-600 mb-4">
              <span className="text-2xl" role="img" aria-label="Discovery">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Discovery</h3>
            <p className="text-gray-600">
              Find events tailored to your interests, from academic lectures to social gatherings, all in one centralized platform.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-campus-100 text-campus-600 mb-4">
              <span className="text-2xl" role="img" aria-label="Connection">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Connection</h3>
            <p className="text-gray-600">
              Connect with peers who share similar interests and build your network within the campus community.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-campus-100 text-campus-600 mb-4">
              <span className="text-2xl" role="img" aria-label="Opportunity">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Opportunity</h3>
            <p className="text-gray-600">
              Access unique opportunities for personal and professional growth through workshops, career fairs, and networking events.
            </p>
          </div>
        </div>
        
        <div className="bg-campus-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            For Event Organizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Create & Manage</h3>
              <p className="text-gray-700 mb-4">
                Easily create and manage your event listings with our intuitive platform. Set up registrations, track attendance, and communicate with attendees all in one place.
              </p>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-700">
                Gain valuable insights into your event's performance with detailed analytics. Understand your audience better and optimize future events based on data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Reach</h3>
              <p className="text-gray-700 mb-4">
                Reach the right audience with targeted promotions. Our platform helps you connect with students who are most likely to be interested in your events.
              </p>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-700">
                Our team is here to help you succeed. Get support for your event promotion, registration setup, and any technical issues that may arise.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you're a student looking to make the most of your college experience or an organizer wanting to reach more students, CampusEvents is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-campus-600 text-white px-6 py-2 rounded-md hover:bg-campus-700 font-medium">
              Create an Account
            </a>
            <a href="/events" className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 font-medium">
              Browse Events
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
