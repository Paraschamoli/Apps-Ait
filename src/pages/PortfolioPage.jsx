import { useState } from 'react';
import { 
  ExternalLink, Play, Star, Download, Users, 
  TrendingUp, Globe, Smartphone, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'healthcare',
      title: 'HealthWheelth',
      description: 'A comprehensive healthcare management platform with AI-powered diagnostics and patient monitoring system.',
      longDescription: 'Revolutionizing patient care with real-time monitoring, AI diagnostics, and seamless integration with hospital systems. Increased patient engagement by 300% and reduced administrative workload by 45%.',
      tech: ['Flutter', 'AI/ML', 'Firebase', 'Node.js', 'TensorFlow'],
      rating: 4.9,
      downloads: '50K+',
      impact: '40% faster diagnosis',
      image: 'healthwheelth.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.healthcare',
      features: [
        'AI Diagnostic Assistant',
        'Telemedicine Integration',
        'Patient Record Management',
        'Medication Tracker',
        'Emergency Alert System'
      ]
    },
    {
      id: 2,
      category: 'productivity',
      title: 'Image Editor Pro',
      description: 'Powerful image editing application with advanced filters, effects, and professional-grade tools for content creators.',
      longDescription: 'Empowering creators with intuitive image editing capabilities, AI-powered enhancements, and batch processing. Users report 80% faster editing workflows and professional-quality results. Used by 100K+ creators worldwide.',
      tech: ['React Native', 'OpenCV', 'Canvas API', 'WebGL', 'Firebase'],
      rating: 4.8,
      downloads: '120K+',
      impact: '80% faster workflows',
      image: 'imageeditor.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.imageeditor',
      features: [
        'Advanced Filters & Effects',
        'Batch Processing',
        'Layer Support',
        'AI Enhancement',
        'Cloud Sync'
      ]
    },
    {
      id: 3,
      category: 'entertainment',
      title: 'Infinity Games',
      description: 'Engaging mobile gaming platform featuring infinite gameplay mechanics and multiplayer capabilities.',
      longDescription: 'Creating endless entertainment with procedurally generated content, competitive multiplayer modes, and social features. Achieved 95% user retention rate and over 500K monthly active users with viral social sharing.',
      tech: ['Unity', 'C#', 'Multiplayer Networking', 'Firebase', 'Analytics'],
      rating: 4.7,
      downloads: '250K+',
      impact: '95% retention rate',
      image: 'infinity.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.infinity',
      features: [
        'Infinite Gameplay',
        'Multiplayer Mode',
        'Social Features',
        'Leaderboards',
        'Daily Rewards'
      ]
    },
    {
      id: 4,
      category: 'gaming',
      title: 'Mind Game Master',
      description: 'Interactive puzzle and brain-training app designed to enhance cognitive skills through engaging games.',
      longDescription: 'Boosting mental agility with scientifically-designed puzzles, progressive difficulty levels, and AI-powered personalization. Users improve their cognitive performance by 40% and enjoy daily brain training sessions.',
      tech: ['Flutter', 'GameKit', 'Machine Learning', 'Firebase', 'Analytics'],
      rating: 4.8,
      downloads: '180K+',
      impact: '40% cognitive boost',
      image: 'mindgame.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.mindgame',
      features: [
        'Brain Training Games',
        'Progressive Difficulty',
        'Performance Tracking',
        'Achievements System',
        'Daily Challenges'
      ]
    },
    {
      id: 5,
      category: 'productivity',
      title: 'PDF Reader Master',
      description: 'Comprehensive PDF management solution with annotation, form-filling, and advanced document handling.',
      longDescription: 'Streamlining document workflows with powerful PDF tools, OCR capabilities, and seamless cloud integration. Businesses report 50% reduction in document processing time and improved team collaboration.',
      tech: ['React Native', 'PDFKit', 'OCR', 'Cloud Storage', 'Node.js'],
      rating: 4.9,
      downloads: '200K+',
      impact: '50% time savings',
      image: 'pdfreader.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.pdfreader',
      features: [
        'Advanced PDF Editing',
        'OCR Technology',
        'Form Filling',
        'Annotation Tools',
        'Cloud Integration'
      ]
    },
    {
      id: 6,
      category: 'productivity',
      title: 'Screen Recorder Pro',
      description: 'Professional screen recording and video capture application with editing capabilities and instant sharing.',
      longDescription: 'Enabling content creators to capture, edit, and share professional-quality screen recordings. Supporting up to 4K resolution with minimal performance impact, used by educators, developers, and creators for tutorials and presentations.',
      tech: ['Android NDK', 'H.264', 'FFmpeg', 'WebRTC', 'Cloud API'],
      rating: 4.8,
      downloads: '150K+',
      impact: '4K quality capture',
      image: 'screenrecorder.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.screenrecorder',
      features: [
        '4K Recording',
        'Live Streaming',
        'Built-in Editor',
        'Audio Control',
        'Instant Sharing'
      ]
    },
    {
      id: 7,
      category: 'education',
      title: 'Smart Attendance System',
      description: 'Intelligent attendance management solution using biometric recognition and real-time reporting.',
      longDescription: 'Revolutionizing classroom and office attendance with facial recognition, geolocation verification, and automated reporting. Schools and organizations achieved 99% accuracy in attendance tracking and eliminated manual paperwork.',
      tech: ['Flutter', 'Facial Recognition', 'Firebase', 'Cloud Functions', 'PostgreSQL'],
      rating: 4.9,
      downloads: '75K+',
      impact: '99% accuracy',
      image: 'smartattendence.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.attendance',
      features: [
        'Facial Recognition',
        'Real-time Reporting',
        'Geolocation Verify',
        'Automated Reports',
        'Analytics Dashboard'
      ]
    },
    {
      id: 8,
      category: 'education',
      title: 'Smart Learning Platform',
      description: 'Comprehensive e-learning ecosystem with adaptive learning paths, interactive content, and progress analytics.',
      longDescription: 'Transforming education through personalized learning experiences, AI-powered content recommendations, and comprehensive progress tracking. Students experience 75% improvement in learning outcomes and enhanced engagement.',
      tech: ['React', 'Python', 'Machine Learning', 'WebRTC', 'PostgreSQL'],
      rating: 4.8,
      downloads: '160K+',
      impact: '75% better outcomes',
      image: 'smartlearningplateform.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.smartlearning',
      features: [
        'Adaptive Learning Paths',
        'AI Recommendations',
        'Live Classes',
        'Progress Analytics',
        'Peer Collaboration'
      ]
    },
    {
      id: 9,
      category: 'tools',
      title: 'AI Plant Checking',
      description: 'Smart plant health monitoring app using AI to detect diseases and provide care recommendations.',
      longDescription: 'Helping gardeners and farmers identify plant diseases instantly with AI-powered image recognition. Provides instant treatment recommendations and care tips. Users report 90% accuracy in disease detection.',
      tech: ['Flutter', 'TensorFlow', 'Firebase', 'OpenCV', 'Node.js'],
      rating: 4.8,
      downloads: '95K+',
      impact: '90% accuracy',
      image: 'aiplantscheking.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.plantcheck',
      features: [
        'AI Disease Detection',
        'Care Recommendations',
        'Plant Database',
        'Progress Tracking',
        'Expert Tips'
      ]
    },
    {
      id: 10,
      category: 'tools',
      title: 'CV Builder Pro',
      description: 'Professional CV/Resume builder with AI-powered templates and optimization suggestions.',
      longDescription: 'Create stunning resumes with AI assistance. Smart suggestions for better content, ATS optimization, and professional templates. Helped 50K+ job seekers land interviews.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'PDF Generation'],
      rating: 4.7,
      downloads: '110K+',
      impact: '45% more interviews',
      image: 'cvbuilder.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.cvbuilder',
      features: [
        'AI Content Suggestions',
        'ATS Optimization',
        'Professional Templates',
        'PDF Export',
        'Job Matching'
      ]
    },
    {
      id: 11,
      category: 'social',
      title: 'EasyToShare',
      description: 'Simple content sharing platform with built-in editing and social media integration.',
      longDescription: 'Seamlessly share photos, videos, and documents across all social platforms. Built-in editor with filters, effects, and instant publishing. Used by 200K+ content creators daily.',
      tech: ['React Native', 'Firebase', 'Cloud Storage', 'Social APIs', 'Node.js'],
      rating: 4.6,
      downloads: '200K+',
      impact: '5x faster sharing',
      image: 'easytoshare.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.easytoshare',
      features: [
        'Multi-Platform Sharing',
        'Built-in Editor',
        'Batch Upload',
        'Schedule Posts',
        'Analytics Dashboard'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: 9 },
    { id: 'healthcare', label: 'Healthcare', count: 1 },
    { id: 'productivity', label: 'Productivity', count: 3 },
    { id: 'entertainment', label: 'Entertainment', count: 1 },
    { id: 'gaming', label: 'Gaming', count: 1 },
    { id: 'education', label: 'Education', count: 2 },
    { id: 'ecommerce', label: 'E-commerce', count: 1 },
    { id: 'tools', label: 'Tools', count: 3 },
    { id: 'social', label: 'Social', count: 1 }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const stats = [
    { icon: <Download className="w-6 h-6" />, value: '1.2M+', label: 'Total Downloads' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '4.8', label: 'Average Rating' },
    { icon: <Globe className="w-6 h-6" />, value: '25+', label: 'Countries Served' },
    { icon: <Award className="w-6 h-6" />, value: '75+', label: 'Awards Won' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Discover how we've transformed ideas into successful digital products across various industries. 
                Each project showcases our commitment to innovation, quality, and client success.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    activeFilter === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Portfolio Grid */}
          <div className="space-y-16">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Side - Visuals */}
                    <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center min-h-96">
                      <img
                        src={`/${item.image}`}
                        alt={item.title}
                        // className="w-full h-full object-cover"
                        className="w-full h-full object-contain scale-95"
                      />
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">{item.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-semibold text-gray-900">{item.downloads} Downloads</span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-8">
                        <div />
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tech.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Smartphone className="w-5 h-5 text-white" />
                                <span className="text-sm text-white">Mobile App</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <TrendingUp className="w-5 h-5 text-green-300" />
                                <span className="text-sm text-white">{item.impact}</span>
                              </div>
                            </div>
                            <motion.a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 text-sm"
                            >
                              <Play className="w-4 h-4" />
                              <span>View</span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="p-8 lg:border-l lg:border-gray-200">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{item.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Project Impact</h4>
                        <p className="text-gray-600">{item.longDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Let's build something amazing together. View our complete portfolio on Google Play.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://play.google.com/store/apps/dev?id=6756875694075191085"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3"
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span>View All Projects</span>
                  </motion.a>
                  <motion.a
                    href="https://appsait.com/contact-us/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3"
                  >
                    <span>Get in Touch</span>
                    <span className="text-2xl">→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;