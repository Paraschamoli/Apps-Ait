import { useState } from 'react';
import { 
  Star, Download, Users, TrendingUp, Globe, Award,
  ChevronRight, Filter, Sparkles, Smartphone, Monitor,
  TabletSmartphone, Brain, Heart, BookOpen, Briefcase,
  Zap, Target, BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'healthcare',
      title: 'HealthWheelth',
      subtitle: 'AI-Powered Healthcare Platform',
      description: 'A comprehensive healthcare management platform with AI-powered diagnostics and patient monitoring system.',
      tech: ['Flutter', 'AI/ML', 'Firebase', 'Node.js', 'TensorFlow'],
      rating: 4.9,
      downloads: '50K+',
      impact: '40% faster diagnosis',
      image: 'healthwheelth.jpg',
      color: 'from-emerald-50 to-cyan-50',
      accentColor: 'emerald',
      icon: <Heart className="w-6 h-6" />,
      platforms: ['iOS', 'Android', 'Web'],
      metrics: [
        { label: 'Patient Engagement', value: '+300%' },
        { label: 'Admin Workload', value: '-45%' },
        { label: 'Diagnosis Speed', value: '+40%' }
      ]
    },
    {
      id: 2,
      category: 'productivity',
      title: 'Image Editor Pro',
      subtitle: 'Professional Creative Suite',
      description: 'Powerful image editing application with advanced filters, effects, and professional-grade tools.',
      tech: ['React Native', 'OpenCV', 'Canvas API', 'WebGL'],
      rating: 4.8,
      downloads: '120K+',
      impact: '80% faster workflows',
      image: 'imageeditor.jpg',
      color: 'from-violet-50 to-purple-50',
      accentColor: 'violet',
      icon: <Monitor className="w-6 h-6" />,
      platforms: ['iOS', 'Android'],
      metrics: [
        { label: 'Editing Speed', value: '+80%' },
        { label: 'User Satisfaction', value: '4.8/5' },
        { label: 'Active Creators', value: '100K+' }
      ]
    },
    {
      id: 3,
      category: 'gaming',
      title: 'Infinity Games',
      subtitle: 'Endless Entertainment Platform',
      description: 'Engaging mobile gaming platform featuring infinite gameplay mechanics and multiplayer capabilities.',
      tech: ['Unity', 'C#', 'Multiplayer', 'Firebase'],
      rating: 4.7,
      downloads: '250K+',
      impact: '95% retention rate',
      image: 'infinity.jpg',
      color: 'from-orange-50 to-amber-50',
      accentColor: 'orange',
      icon: <Sparkles className="w-6 h-6" />,
      platforms: ['iOS', 'Android'],
      metrics: [
        { label: 'User Retention', value: '95%' },
        { label: 'Monthly Users', value: '500K+' },
        { label: 'Avg. Play Time', value: '45min' }
      ]
    },
    {
      id: 4,
      category: 'education',
      title: 'Smart Learning',
      subtitle: 'Adaptive Learning Ecosystem',
      description: 'Comprehensive e-learning platform with adaptive learning paths and interactive content.',
      tech: ['React', 'Python', 'ML', 'WebRTC'],
      rating: 4.8,
      downloads: '160K+',
      impact: '75% better outcomes',
      image: 'smartlearningplateform.jpg',
      color: 'from-blue-50 to-indigo-50',
      accentColor: 'blue',
      icon: <BookOpen className="w-6 h-6" />,
      platforms: ['Web', 'iOS', 'Android'],
      metrics: [
        { label: 'Learning Outcomes', value: '+75%' },
        { label: 'Student Engagement', value: '+60%' },
        { label: 'Course Completion', value: '85%' }
      ]
    },
    {
      id: 5,
      category: 'productivity',
      title: 'PDF Reader Master',
      subtitle: 'Document Workflow Solution',
      description: 'Comprehensive PDF management with annotation, form-filling, and advanced document handling.',
      tech: ['React Native', 'PDFKit', 'OCR', 'Cloud'],
      rating: 4.9,
      downloads: '200K+',
      impact: '50% time savings',
      image: 'pdfreader.jpg',
      color: 'from-red-50 to-rose-50',
      accentColor: 'red',
      icon: <Briefcase className="w-6 h-6" />,
      platforms: ['iOS', 'Android', 'Desktop'],
      metrics: [
        { label: 'Time Saved', value: '50%' },
        { label: 'Team Productivity', value: '+40%' },
        { label: 'User Rating', value: '4.9/5' }
      ]
    },
    {
      id: 6,
      category: 'tools',
      title: 'AI Plant Checking',
      subtitle: 'Smart Gardening Assistant',
      description: 'AI-powered plant health monitoring app for disease detection and care recommendations.',
      tech: ['Flutter', 'TensorFlow', 'OpenCV', 'Node.js'],
      rating: 4.8,
      downloads: '95K+',
      impact: '90% accuracy',
      image: 'aiplantscheking.jpg',
      color: 'from-green-50 to-emerald-50',
      accentColor: 'green',
      icon: <Target className="w-6 h-6" />,
      platforms: ['iOS', 'Android'],
      metrics: [
        { label: 'Disease Detection', value: '90%' },
        { label: 'User Accuracy', value: '95%' },
        { label: 'Gardener Satisfaction', value: '4.8/5' }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'productivity', label: 'Productivity', icon: <Zap className="w-4 h-4" /> },
    { id: 'healthcare', label: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'gaming', label: 'Gaming', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Briefcase className="w-4 h-4" /> },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const stats = [
    { icon: <Download className="w-5 h-5" />, value: '1.2M+', label: 'Downloads', trend: '+25%' },
    { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Clients', trend: '+15%' },
    { icon: <Star className="w-5 h-5" />, value: '4.8', label: 'Avg Rating', trend: '' },
    { icon: <Globe className="w-5 h-5" />, value: '25+', label: 'Countries', trend: '+5' },
    { icon: <Award className="w-5 h-5" />, value: '75+', label: 'Awards', trend: '2024' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center space-x-2 text-sm text-gray-500 mb-6">
              
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Crafting Digital
                <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A curated showcase of transformative digital products that redefine user experiences 
                across industries. Each project represents our commitment to innovation, precision, 
                and impactful design.
              </p>
            </div>
          </FadeIn>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-sm border border-gray-100" />
                  <div className="relative p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white mb-4`}>
                      {stat.icon}
                    </div>
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      {stat.trend && (
                        <div className="text-sm font-medium text-emerald-600">{stat.trend}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-10 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-between mb-16">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all flex items-center space-x-2 backdrop-blur-sm ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredProject(item.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500 shadow-xl border border-gray-100" />
                
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Project Image */}
                  <div className={`p-8 ${item.color}`}>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-white shadow-inner">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img
                          src={`/${item.image}`}
                          alt={item.title}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-2 rounded-xl bg-gradient-to-br from-${item.accentColor}-100 to-${item.accentColor}-50`}>
                            {item.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-500">{item.subtitle}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {item.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-xl font-bold text-gray-900 mb-1`}>{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Platform & Downloads */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        {item.platforms.map((platform) => (
                          <div key={platform} className="flex items-center space-x-1 text-gray-500">
                            {platform === 'iOS' || platform === 'Android' ? (
                              <Smartphone className="w-4 h-4" />
                            ) : platform === 'Web' ? (
                              <Globe className="w-4 h-4" />
                            ) : (
                              <Monitor className="w-4 h-4" />
                            )}
                            <span className="text-sm">{platform}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

         
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;