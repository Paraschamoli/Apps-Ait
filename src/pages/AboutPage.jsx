'use client'

import { useState } from 'react'
import { 
  Globe, Trophy, Target, Zap, Shield, 
  Heart, Sparkles, CheckCircle, Award, TrendingUp, 
  Clock, Phone, ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '../components/animations/FadeIn'

const AboutPage = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex problems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build partnerships, not just projects",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We deliver robust, scalable, and high-performance solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear communication, honest timelines, and open collaboration",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Apps AiT was founded with a vision to transform digital experiences",
      icon: "🏛️"
    },
    {
      year: "2022",
      title: "First 50 Projects",
      description: "Delivered 50+ successful projects across healthcare and e-commerce",
      icon: "🚀"
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew to 100+ experts across development, design, and marketing",
      icon: "👥"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services to clients in 15+ countries worldwide",
      icon: "🌍"
    },
    {
      year: "2024",
      title: "Awards & Recognition",
      description: "Recognized as a leading digital transformation partner",
      icon: "🏆"
    },
    {
      year: "Present",
      title: "Continuous Growth",
      description: "200+ projects delivered, serving diverse industries",
      icon: "📈"
    }
  ]

  const stats = [
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Countries Served" },
    { icon: <Trophy className="w-6 h-6" />, value: "200+", label: "Projects Delivered" },
    { icon: <Target className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Industry Awards" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "4.8/5", label: "Average Rating" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6"
              >
                About Apps AiT
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Code</span>
              </h1>
              
              <p className="text-2xl text-gray-600 mb-12">
                We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming ideas into exceptional digital experiences.
              </p>
              
              <motion.a
                href="#our-story"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg mx-auto"
              >
                Explore Our Story
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a leading digital transformation partner, our journey has been driven by passion and innovation.
              </p>
            </div>
          </FadeIn>

          {/* Timeline - Simplified */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                        {milestone.icon}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-xl font-bold text-gray-900">{milestone.year}</span>
                        <span className="text-primary font-semibold">{milestone.title}</span>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeIn direction="right">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="mb-6">
                    To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {['Innovate relentlessly', 'Deliver excellence consistently', 'Empower through technology'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="mb-6">
                    To be the world's most trusted digital transformation partner, recognized for our ability to turn visionary ideas into market-leading digital products that shape the future.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <div>
                        <div className="font-bold">2025 Goal</div>
                        <div className="text-sm opacity-90">Expand to 30+ countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every solution we create.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Work Environment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Culture</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We foster an environment of collaboration, innovation, and continuous learning.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "🤝",
                title: "Collaborative",
                description: "Teamwork and open communication are at our core"
              },
              {
                icon: "💡",
                title: "Innovative",
                description: "Encouraging creative thinking and new ideas"
              },
              {
                icon: "📚",
                title: "Learning Focused",
                description: "Continuous growth and skill development"
              },
              {
                icon: "⚖️",
                title: "Balanced",
                description: "Flexible work environment for work-life harmony"
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center text-white max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="mb-8">
                Whether you have a project in mind or want to learn more about our approach, we'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg"
              >
                Start a Conversation
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default AboutPage