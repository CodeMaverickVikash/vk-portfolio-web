import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-300 border-t border-gray-700">
      <div className="container px-5 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <Logo width="50" height="50" />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Vikash Maskhare
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Passionate Software Engineer with 3+ years of experience in building modern, user-friendly web applications using React, Angular, and cutting-edge technologies.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <HiMail className="text-purple-400 text-lg" />
              <a href="mailto:vikashmaskhare95@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                vikashmaskhare95@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <HiPhone className="text-purple-400 text-lg" />
              <a href="tel:+919752004079" className="text-gray-400 hover:text-purple-400 transition-colors">
                +91 9752004079
              </a>
            </div>
            <div className="flex items-center gap-3">
              <HiLocationMarker className="text-purple-400 text-lg" />
              <span className="text-gray-400">Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <FaCode className="text-purple-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/vikashmaskhare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikash-maskhare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://twitter.com/vikashmaskhare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="mailto:vikashmaskhare95@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Copyright © {currentYear} Vikash Maskhare. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
