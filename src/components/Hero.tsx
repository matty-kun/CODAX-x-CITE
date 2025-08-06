import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Zap } from 'lucide-react';
import CodaxLogo from '../assets/Codax.png';
import CiteLogo from '../assets/CITE.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-300/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white"
              whileHover={{ scale: 1.05 }}
            >
              <img src={CodaxLogo} alt="CODAX Logo" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">CODAX Community</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white/80 font-semibold text-xl my-2 sm:my-0"
              whileHover={{ scale: 1.1 }}
            >
              ×
            </motion.div>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white"
              whileHover={{ scale: 1.05 }}
            >
              <img src={CiteLogo} alt="CITE Logo" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">NDMC's CITE Department</span>
            </motion.div>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}Path
            </span>
          </h1>

          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            CODAX and CITE are teaming up to help you discover your niche through focused programs, events, and communities—so you can build the right skills at the right time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:gap-6 w-full"
        >
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-5 py-3 rounded-full font-semibold text-base flex items-center gap-2 shadow-lg w-full max-w-xs mx-auto transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300/40 active:scale-95 justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)"
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-base font-semibold">Join Us</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-xs sm:text-base">500+ Members both in Discord and Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-xs sm:text-base">Active Community</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;