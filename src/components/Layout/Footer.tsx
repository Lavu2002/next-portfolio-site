import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lavanya Patial</h3>
            <p className="text-gray-300 mb-4">
              A passionate software developer focused on creating efficient and scalable web applications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/lavanyapatial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/lavanya-patial-57a08a215" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="mailto:lavanyapatial@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-indigo-400"></i>
                <span className="text-gray-300">+91 8847383941</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-indigo-400"></i>
                <span className="text-gray-300">lavanyapatial@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-indigo-400"></i>
                <span className="text-gray-300">Chandigarh, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-300 text-center">
          <p>&copy; {currentYear} Lavanya Patial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;