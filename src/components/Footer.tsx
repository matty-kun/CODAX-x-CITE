import React from 'react';
import { motion } from 'framer-motion';
import CodaxLogo  from '../assets/Codax.png';
import { SiDiscord, SiGithub, SiFacebook } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      icon: SiDiscord,
      name: "Discord",
      href: "https://discord.gg/hN8Mekq8Rs",
      color: "hover:text-indigo-400"
    },
    {
      icon: SiGithub,
      name: "GitHub",
      href: "https://github.com/matty-kun",
      color: "hover:text-gray-400"
    },
    {
      icon: SiFacebook,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61571566707262",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Form", href: "#form" },
    { name: "Check out DevLift", href: "https://devlift.vercel.app", target: "_blank" }
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-2 rounded-lg">
                <img src={CodaxLogo} alt="Codax Logo" className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold">CODAX Community</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering students to discover their niche and thrive in it.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href} 
                    target={link.target}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`flex items-center gap-3 text-gray-300 ${social.color} transition-colors duration-200`}
                  whileHover={{ x: 4 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 CODAX Community. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <p>Created by Jan Matthew Vargas</p>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;