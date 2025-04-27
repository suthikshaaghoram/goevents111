
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-campus-600" />
              <span className="font-bold text-xl text-campus-800">CampusEvents</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              The easiest way to discover, register and manage college events.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-campus-600 text-sm">Home</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-campus-600 text-sm">Browse Events</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-campus-600 text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Events</h3>
            <ul className="space-y-2">
              <li><Link to="/events?category=academic" className="text-gray-600 hover:text-campus-600 text-sm">Academic</Link></li>
              <li><Link to="/events?category=social" className="text-gray-600 hover:text-campus-600 text-sm">Social</Link></li>
              <li><Link to="/events?category=career" className="text-gray-600 hover:text-campus-600 text-sm">Career</Link></li>
              <li><Link to="/events?category=club" className="text-gray-600 hover:text-campus-600 text-sm">Club Activities</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Email: info@campusevents.edu</li>
              <li className="text-gray-600 text-sm">Phone: (123) 456-7890</li>
              <li className="text-gray-600 text-sm">Address: 123 College St, Campus City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CampusEvents. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-campus-600 text-sm">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-campus-600 text-sm">Privacy</Link>
            <Link to="/help" className="text-gray-500 hover:text-campus-600 text-sm">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
