import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = "/assest/img/logo/logo.png"; 

  return (
    // 'w-full' aur 'flex' screen ke mutabiq adjust ho jayenge
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 md:px-8 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo - h-24 se h-48 tak adjust karein */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-24 md:h-48 w-auto" /> 
          </Link>
        </div>

        {/* Menu Items - Desktop par dikhenge, mobile par hide ho jayenge */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-medium items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/properties" className="hover:text-blue-600">Projects</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
        </div>

        {/* Right Side - EN, Search, Menu Icon */}
        <div className="flex items-center space-x-4 md:space-x-6 text-gray-800">
          <span className="hidden md:block font-medium cursor-pointer">EN ∨</span>
          <button className="text-xl">🔍</button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl md:hidden">☰</button>
        </div>
      </div>

      {/* Mobile Drawer - Ye khud hi screen ke hisab se show/hide hoga */}
      {isOpen && (
        <div className="md:hidden bg-white/90 mt-2 p-4 rounded-lg shadow-lg backdrop-blur-sm">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About Us</Link>
          <Link to="/properties" className="block py-2">Projects</Link>
          <Link to="/services" className="block py-2">Services</Link>
          <Link to="/pricing" className="block py-2">Pricing</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;