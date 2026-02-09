import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: 'https://www.facebook.com/appsait', label: 'Facebook' },
    { icon: <FaXTwitter size={20} />, href: 'https://x.com/appsait', label: 'X' },
    { icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/company/appsait', label: 'LinkedIn' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/appsait', label: 'Instagram' },
    { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@appsait', label: 'YouTube' },
    { icon: <FaGithub size={20} />, href: 'https://github.com/appsait', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Apps AiT Logo" className="w-12 h-12 rounded-lg object-contain" />
            <span className="text-2xl font-bold">Apps AiT</span>
          </div>
          
          <p className="text-gray-400 text-center max-w-md">
            Bridging the gap between ideas and reality through cutting-edge technology. 
            Creating awesome digital experiences since 2022.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-600 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Apps AiT. All rights reserved.
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <a href="https://appsait.com" className="hover:text-primary">appsait.com</a> • 
            <a href="https://play.google.com/store/apps/dev?id=6756875694075191085" target="_blank" rel="noreferrer" className="hover:text-primary ml-2">
              Google Play Portfolio
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;