import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "To edify, fortify, and amplify every tech individual, equipping them with knowledge, resilience and visibility to thrive and lead in the dynamic tech industry."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A tech community that shall continually inspire each other, aspire to greatness, and desire meaningful growth and success in the ever-evolving landscape of technology."
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-purple-600">CODAX</span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            In partnership with the NDMC's CITE Department, CODAX empowers students to discover their niche and thrive—aligned with the mission and vision stated below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl sm:max-w-4xl mx-auto mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Feeling Overwhelmed?
          </h3>
          <p className="text-base sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
            The tech industry has countless paths—and choosing the right one can be confusing. You may want to explore programs.
          </p>
          <motion.button
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;