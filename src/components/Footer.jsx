import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Digital Transformation',
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'Quality Assurance',
    'AI Solutions'
  ];

  const technologies = [
    'Flutter',
    'React Native',
    'React.js',
    'Kotlin',
    'Java',
    'Python',
    'Node.js',
    'Firebase'
  ];

  const industries = [
    'Healthcare',
    'E-commerce',
    'Fashion',
    'Hospitality',
    'Education',
    'Finance',
    'Real Estate',
    'Logistics'
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: 'https://facebook.com/appsait', label: 'Facebook' },
    { icon: <FaXTwitter size={20} />, href: 'https://twitter.com/appsait', label: 'X' },
    { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/company/appsait', label: 'LinkedIn' },
    { icon: <FaInstagram size={20} />, href: 'https://instagram.com/appsait', label: 'Instagram' },
    { icon: <FaYoutube size={20} />, href: 'https://youtube.com/appsait', label: 'YouTube' },
    { icon: <FaGithub size={20} />, href: 'https://github.com/appsait', label: 'GitHub' },

  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.jpg" alt="Apps AiT Logo" className="w-12 h-12 rounded-lg object-contain" />
              <span className="text-2xl font-bold">Apps AiT</span>
            </div>
            <p className="text-gray-400 mb-6">
              We bridge the gap between ideas and reality through cutting-edge technology. 
              Creating awesome digital experiences since 2022.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technologies</h3>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <span className="text-gray-400">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-gray-400">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest in tech and digital transformation.</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-r-xl font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Apps AiT. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          </div>

          {/* Company Info */}
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>Apps AiT • Software Development • 51-200 employees • Founded 2022</p>
            <p className="mt-2">
              <a href="https://appsait.com" className="hover:text-primary">https://appsait.com</a> • 
              <a href="https://play.google.com/store/apps/dev?id=6756875694075191085" className="hover:text-primary ml-2">
                Google Play Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;