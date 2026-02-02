import { Link } from "react-router-dom";
import { downloadDefaultResume } from "../utils/downloadResume";
import Logo from "./Logo";

const Home = () => {
  return (
    <div className="main-section dark:bg-gray-900 min-h-screen">
      {/* Hero Section - Modern & Interactive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-5 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 mb-16 md:mb-0">
              {/* Greeting Badge */}
              <div className="inline-flex items-center px-4 py-2 mb-6 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-purple-100 dark:border-purple-900">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Vikash
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300 text-4xl md:text-5xl lg:text-6xl">
                  Software Engineer
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
                Crafting exceptional digital experiences with <span className="font-semibold text-purple-600 dark:text-purple-400">3+ years</span> of expertise in
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> React</span>,
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> Angular</span>, and modern web technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/profile"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>View Profile</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <button
                  onClick={downloadDefaultResume}
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Connect:</span>
                <a href="https://github.com/CodeMaverickVikash/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/vikash-maskhare-3b1397209/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:vikashmaskhare95@gmail.com" className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Animated Logo/Image */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full shadow-2xl">
                  <Logo width="300" height="300" className="animate-float" />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-purple-200 dark:border-purple-800 animate-bounce-slow">
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">3+ Years</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-indigo-200 dark:border-indigo-800 animate-bounce-slow animation-delay-1000">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">React & Angular</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized in modern web technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* React */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  ⚛️
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">React.js</h3>
              </div>
            </div>

            {/* Angular */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  🅰️
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Angular</h3>
              </div>
            </div>

            {/* TypeScript */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  TS
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">TypeScript</h3>
              </div>
            </div>

            {/* Node.js */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  📗
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Node.js</h3>
              </div>
            </div>

            {/* MongoDB */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  🍃
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">MongoDB</h3>
              </div>
            </div>

            {/* Tailwind */}
            <div className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - OrganizeSwift */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-6xl">📋</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">OrganizeSwift</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Task management platform with modern tech stack for seamless productivity
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Angular</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">Node.js</span>
                </div>
                <Link to="/profile" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project 2 - InstantNotes */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-6xl">📝</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">InstantNotes</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  MERN stack note-taking app for efficient organization and focus
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">MongoDB</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">Express</span>
                </div>
                <Link to="/profile" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project 3 - CodingForum */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-6xl">💬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">CodingForum</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Q&A platform for developers with real-time updates and authentication
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">MySQL</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">PHP</span>
                </div>
                <Link to="/profile" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Link
              to="/profile"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Technologies</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Testimonials from colleagues and clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10 text-purple-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "Vikash is an exceptional developer with deep expertise in React and Angular. His attention to detail and commitment to quality is outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">John Doe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Senior Tech Lead</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10 text-purple-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "Working with Vikash has been a pleasure. He brings innovative solutions and consistently delivers high-quality code on time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Sarah Miller</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
