import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6"
              >
                🚀 Trusted by 200+ Companies Worldwide
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ideas</span> to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary"> Reality</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                We bridge the gap between vision and reality through cutting-edge technology. 
                Creating awesome digital experiences since 2022.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Play size={20} />
                  <span>Watch Demo</span>
                </motion.button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">51-200</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              {/* Removed the Live Dashboard mock interface */}
              
              {/* Floating Elements (keeping these since they're separate) */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-200"
              >
                <div className="text-sm font-semibold text-primary">📱 Mobile First</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-200"
              >
                <div className="text-sm font-semibold text-secondary">⚡ Fast Delivery</div>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;