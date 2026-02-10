import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error sending message. Please try again.");
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Digital Transformation',
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'Quality Assurance',
    'AI Solutions',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "contact@appsait.com",
      link: "mailto:contact@appsait.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Global Presence",
      description: "Remote teams across 5 countries"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "< 24 hours",
      description: "For all business inquiries"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-primary">Start Your Project?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help transform your ideas into reality. Book a free consultation today.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-lg text-gray-800 hover:text-primary transition-colors">
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-800">{info.details}</p>
                        )}
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Consultation</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>30-minute free discovery call</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Project roadmap & timeline</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Custom proposal & pricing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>No-obligation estimate</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Your message has been received. We'll contact you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you ASAP</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Service Interested In *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-gray-500 text-sm">
                      By submitting this form, you agree to our Privacy Policy and consent to contact.
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;