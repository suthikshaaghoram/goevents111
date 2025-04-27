
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-campus-600" />
          <span className="font-bold text-xl text-campus-800">CampusEvents</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-campus-600 font-medium">
            Home
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-campus-600 font-medium">
            Events
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-campus-600 font-medium">
            About
          </Link>
          <div className="pl-4 flex space-x-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="bg-campus-600 hover:bg-campus-700">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-campus-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/events" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-campus-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-campus-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="mt-4 px-3 pt-4 pb-2 border-t border-gray-200 flex flex-col space-y-2">
              <Button asChild variant="outline">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="bg-campus-600 hover:bg-campus-700">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
