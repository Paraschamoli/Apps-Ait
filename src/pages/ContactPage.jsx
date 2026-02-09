import { useState } from 'react';
import { 
  Send, Mail, Phone, MapPin, Clock, MessageSquare, 
  Calendar, Video, CheckCircle, Users, Globe, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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
        budget: '',
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

  const budgets = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+',
    'Not sure yet'
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "contact@appsait.com",
      subtitle: "General Inquiries",
      action: "mailto:contact@appsait.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Sales & Support",
      action: "tel:+15551234567",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      details: "Available 24/7",
      subtitle: "Instant Support",
      action: "#chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Meeting",
      details: "Schedule a Call",
      subtitle: "Free Consultation",
      action: "https://calendly.com/appsait",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "51-200 skilled professionals with diverse expertise"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Presence",
      description: "Serving clients across 15+ countries worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "200+ successful projects delivered since 2022"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Guaranteed response within 24 hours"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-semibold mb-8 shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get In Touch
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing</span> Together
              </h1>
              <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your vision into reality with our expert team. From concept to launch, 
                we're here to guide you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl flex items-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Start Your Project</span>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Stats Bar */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24h", label: "Response Time" },
                { value: "15+", label: "Countries Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <FadeIn className="flex-grow">
                <div className="relative h-full">
                  {/* Background decoration */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                  <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-100 h-full flex flex-col">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                      >
                        <div className="relative mb-10">
                          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                            <CheckCircle className="w-16 h-16 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-100" />
                        </div>
                        <h3 className="text-5xl font-bold text-gray-900 mb-6">Thank You! 🎉</h3>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                          Your message has been received successfully! Our team will review your inquiry 
                          and contact you within 24 hours to schedule your free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsSubmitted(false)}
                            className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                          >
                            Send Another Message
                          </motion.button>
                          <motion.a
                            href="https://calendly.com/appsait"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                          >
                            Schedule Directly
                          </motion.a>
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <div className="text-center mb-12">
                          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                              <Send className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-primary text-lg">Start Your Project</span>
                          </div>
                          <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Something Amazing</span>
                          </h2>
                          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Tell us about your vision and let's create something extraordinary together
                          </p>
                          <div className="flex items-center justify-center space-x-3 mt-6">
                            <Video className="w-6 h-6 text-primary" />
                            <span className="font-semibold text-primary">Free 30-min Consultation</span>
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Company Name
                              </label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                                placeholder="Your Company"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Service Interested In *
                              </label>
                              <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                              >
                                <option value="">Select a service</option>
                                {services.map((service, index) => (
                                  <option key={index} value={service}>{service}</option>
                                ))}
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                                Project Budget
                              </label>
                              <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-lg"
                              >
                                <option value="">Select budget range</option>
                                {budgets.map((budget, index) => (
                                  <option key={index} value={budget}>{budget}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold mb-3 text-lg">
                              Project Details *
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows="8"
                              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition resize-none text-lg"
                              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                            />
                          </div>

                          <div className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-6">
                            <input
                              type="checkbox"
                              id="privacy"
                              required
                              className="w-6 h-6 rounded border-gray-300 text-primary focus:ring-primary mt-1"
                            />
                            <label htmlFor="privacy" className="text-gray-700 text-base leading-relaxed">
                              I agree to the Privacy Policy and consent to being contacted by Apps AiT regarding my inquiry.
                            </label>
                          </div>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 disabled:opacity-70 shadow-xl hover:shadow-2xl transition-shadow"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-7 h-7 border-3 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-7 h-7" />
                                <span>Send Message & Get Free Consultation</span>
                              </>
                            )}
                          </motion.button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 flex flex-col h-full space-y-8">
              <FadeIn delay={0.4}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl" />
                  <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="group cursor-pointer">
                        <div className="flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Mail className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Email</h4>
                            <a href="mailto:contact@appsait.com" className="text-primary text-lg hover:underline font-medium">
                              contact@appsait.com
                            </a>
                            <p className="text-gray-600 mt-1">For general inquiries</p>
                          </div>
                        </div>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Phone className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Phone</h4>
                            <a href="tel:+15551234567" className="text-primary text-lg hover:underline font-medium">
                              +1 (555) 123-4567
                            </a>
                            <p className="text-gray-600 mt-1">Mon-Fri, 9AM-6PM EST</p>
                          </div>
                        </div>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <MapPin className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Global Presence</h4>
                            <p className="text-gray-800 text-lg font-medium">Remote teams across</p>
                            <p className="text-gray-600 mt-1">5+ countries worldwide</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white shadow-2xl">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">Why Choose Apps AiT?</h3>
                    </div>
                    
                    <ul className="space-y-6">
                      {whyChooseUs.map((item, index) => (
                        <li key={index} className="flex items-start space-x-5">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                            <p className="text-white/90 leading-relaxed">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-xl">Quick Response Guaranteed</span>
                      </div>
                      <p className="text-white/95 leading-relaxed">
                        We understand the importance of your time. Our team commits to responding 
                        to all inquiries within 24 hours, with urgent matters handled immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about working with Apps AiT
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A minimum viable product (MVP) typically takes 2-4 months, while full-scale enterprise solutions may take 6-12 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "We have extensive experience across 15+ industries including healthcare, e-commerce, fashion, hospitality, education, finance, and logistics. Our adaptable approach allows us to excel in any sector."
                },
                {
                  q: "Do you provide ongoing support and maintenance?",
                  a: "Yes, we offer comprehensive post-launch support packages including bug fixes, updates, performance optimization, security monitoring, and feature enhancements. Our support plans are tailored to your specific needs."
                },
                {
                  q: "What is your development process?",
                  a: "We follow an agile methodology with 6 key phases: Discovery, Design, Development, Testing, Deployment, and Support. We maintain transparent communication through regular updates, demos, and collaborative tools."
                },
                {
                  q: "How do you ensure project quality?",
                  a: "Quality is embedded throughout our process with code reviews, automated testing, manual QA, performance testing, and user acceptance testing (UAT). We maintain 98% client satisfaction through rigorous quality standards."
                }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;