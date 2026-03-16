import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
// If not using React Router, replace Link with <a> tags

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Site Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-800">📝</span>
              <span className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                BlogSpace
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link> */}
                 <Link 
              to="/createBlog" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
            Create Blog
            </Link>
          </div>

          {/* Desktop Right Side - Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div> */}

            {/* Auth Buttons */}
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
              Sign Up
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {/* Mobile Search */}
            {/* <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div> */}

            {/* Mobile Navigation Links */}
            <Link 
               to="/createBlog" 
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Blog
            </Link>
            {/* <Link 
              to="/categories" 
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link> */}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              {/* <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sign In
              </button>
              <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;