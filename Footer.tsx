import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Henery University</h3>
            <p className="text-gray-300">Excellence in African Education.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-yellow-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-400 transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Mekelle, Ethiopia<br />Email: henokdesta67@gmail.com<br />Phone: +251930695142</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p>&copy; 2025 Henery University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;