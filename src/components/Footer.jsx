import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://facebook.com/appsait', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/appsait', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/company/appsait', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: 'https://instagram.com/appsait', label: 'Instagram' },
    { icon: <Github size={18} />, href: 'https://github.com/appsait', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          {/* Brand & Social */}
          <div className="flex flex-col items-center space-y-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">A</span>
              </div>
              <span className="text-xl font-bold">Apps AiT</span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm text-center max-w-sm">
              Digital innovation since 2022
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white transition-colors hover:bg-blue-600"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center space-y-2 mt-6 pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Apps AiT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;