import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '/public/assets/logo.png';  // Logo import yahan se

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Affiliate Program', href: '#affiliate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Sirf Logo – text hata diya */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="EarnIndia Logo"
              className="h-10 md:h-14 mr-4"   // mr-4 = margin right
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-accent transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300">
              Login
            </button>

          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-3xl text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 mt-4">
                <button className="bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                  Login
                </button>
                <button className="bg-accent text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
                  Signup
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;