import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight, HiSearch, HiBookOpen, HiCode, HiLightningBolt, HiDatabase, HiTemplate } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaCode, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiPostgresql, SiGit, SiDocker, SiPostman } from 'react-icons/si';
import { Category, LanguageReference } from '../types';
import { ROUTES } from '../constants';

const TechStack = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: Category[] = [
    { name: 'All', icon: HiBookOpen, color: 'purple' },
    { name: 'Frontend', icon: FaReact, color: 'blue' },
    { name: 'Backend', icon: FaNodeJs, color: 'green' },
    { name: 'Database', icon: HiDatabase, color: 'orange' },
    { name: 'Framework', icon: HiTemplate, color: 'indigo' },
    { name: 'Tools', icon: HiCode, color: 'pink' },
  ];

  const languageReferences: LanguageReference[] = [
    // Frontend Technologies
    {
      id: 1,
      name: 'JavaScript',
      description: 'Core language of the web. Essential for building interactive and dynamic web applications. Powers both frontend and backend development in the MEAN/MERN stack.',
      category: 'Frontend',
      year: '1995',
      paradigm: 'Multi-paradigm',
      features: ['ES6+ Syntax', 'Async/Await', 'Closures', 'Event Loop', 'DOM Manipulation'],
      useCases: ['Web Development', 'Single Page Applications', 'Real-time Apps', 'API Integration'],
      icon: SiJavascript,
      gradient: 'from-yellow-400 to-yellow-600',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Superset of JavaScript with static typing. Enhances code quality and developer experience in large-scale applications. Widely used in Angular and modern React projects.',
      category: 'Frontend',
      year: '2012',
      paradigm: 'Multi-paradigm',
      features: ['Static Typing', 'Interfaces', 'Generics', 'Type Inference', 'Enhanced IDE Support'],
      useCases: ['Enterprise Applications', 'Angular Projects', 'React with TypeScript', 'Type-safe APIs'],
      icon: SiTypescript,
      gradient: 'from-blue-500 to-blue-700',
      difficulty: 'Advanced'
    },
    {
      id: 3,
      name: 'React',
      description: 'Popular JavaScript library for building user interfaces. Component-based architecture makes it perfect for building scalable SPAs. Core of the MERN stack.',
      category: 'Framework',
      year: '2013',
      paradigm: 'Component-based',
      features: ['Virtual DOM', 'JSX', 'Hooks', 'Component Reusability', 'Unidirectional Data Flow'],
      useCases: ['Single Page Apps', 'Progressive Web Apps', 'Mobile Apps (React Native)', 'Dashboard UIs'],
      icon: FaReact,
      gradient: 'from-cyan-400 to-blue-500',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      name: 'Angular',
      description: 'Comprehensive TypeScript-based framework by Google. Full-featured framework for building enterprise-grade applications. Core of the MEAN stack.',
      category: 'Framework',
      year: '2016',
      paradigm: 'MVC/MVVM',
      features: ['Two-way Data Binding', 'Dependency Injection', 'RxJS', 'TypeScript Native', 'CLI Tools'],
      useCases: ['Enterprise Applications', 'Large-scale SPAs', 'Admin Dashboards', 'Progressive Web Apps'],
      icon: FaAngular,
      gradient: 'from-red-500 to-red-700',
      difficulty: 'Advanced'
    },
    {
      id: 5,
      name: 'HTML5',
      description: 'Latest evolution of HTML. Foundation of web development providing semantic markup and modern APIs for building accessible and SEO-friendly applications.',
      category: 'Frontend',
      year: '2014',
      paradigm: 'Markup Language',
      features: ['Semantic Elements', 'Canvas API', 'Local Storage', 'Geolocation', 'Multimedia Support'],
      useCases: ['Web Structure', 'SEO Optimization', 'Accessibility', 'Progressive Web Apps'],
      icon: FaHtml5,
      gradient: 'from-orange-500 to-red-500',
      difficulty: 'Beginner'
    },
    {
      id: 6,
      name: 'CSS3',
      description: 'Modern styling language for web applications. Creates responsive, beautiful, and animated user interfaces with advanced layout systems like Flexbox and Grid.',
      category: 'Frontend',
      year: '2011',
      paradigm: 'Style Sheet Language',
      features: ['Flexbox', 'Grid Layout', 'Animations', 'Media Queries', 'Custom Properties'],
      useCases: ['Responsive Design', 'UI Styling', 'Animations', 'Layout Design'],
      icon: FaCss3Alt,
      gradient: 'from-blue-400 to-blue-600',
      difficulty: 'Intermediate'
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development. Provides low-level utility classes for building custom designs without leaving your HTML.',
      category: 'Framework',
      year: '2017',
      paradigm: 'Utility-first CSS',
      features: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Customizable', 'JIT Compiler'],
      useCases: ['Rapid Prototyping', 'Custom Designs', 'Component Libraries', 'Modern Web Apps'],
      icon: SiTailwindcss,
      gradient: 'from-cyan-400 to-teal-500',
      difficulty: 'Beginner'
    },
    {
      id: 8,
      name: 'Bootstrap',
      description: 'Popular CSS framework for responsive web development. Provides pre-built components and grid system for quick and consistent UI development.',
      category: 'Framework',
      year: '2011',
      paradigm: 'Component-based CSS',
      features: ['Grid System', 'Pre-built Components', 'Responsive Utilities', 'JavaScript Plugins', 'Customizable'],
      useCases: ['Rapid Development', 'Responsive Websites', 'Admin Templates', 'Landing Pages'],
      icon: SiBootstrap,
      gradient: 'from-purple-500 to-purple-700',
      difficulty: 'Beginner'
    },
    // Backend Technologies
    {
      id: 10,
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript development. Core backend technology in both MEAN and MERN stacks.',
      category: 'Backend',
      year: '2009',
      paradigm: 'Event-driven',
      features: ['Non-blocking I/O', 'NPM Ecosystem', 'Event Loop', 'Scalable', 'Cross-platform'],
      useCases: ['REST APIs', 'Real-time Applications', 'Microservices', 'Server-side Rendering'],
      icon: FaNodeJs,
      gradient: 'from-green-500 to-green-700',
      difficulty: 'Intermediate'
    },
    {
      id: 11,
      name: 'Express.js',
      description: 'Fast, minimalist web framework for Node.js. Simplifies building robust APIs and web applications. Essential part of MEAN and MERN backend development.',
      category: 'Backend',
      year: '2010',
      paradigm: 'Middleware-based',
      features: ['Routing', 'Middleware', 'Template Engines', 'Error Handling', 'RESTful APIs'],
      useCases: ['REST APIs', 'Web Applications', 'Microservices', 'API Gateways'],
      icon: SiExpress,
      gradient: 'from-gray-600 to-gray-800',
      difficulty: 'Intermediate'
    },

    // Database Technologies
    {
      id: 12,
      name: 'MongoDB',
      description: 'NoSQL document database with flexible schema. Stores data in JSON-like documents. The "M" in MEAN and MERN stacks, perfect for modern web applications.',
      category: 'Database',
      year: '2009',
      paradigm: 'Document-oriented',
      features: ['Flexible Schema', 'JSON Documents', 'Scalability', 'Aggregation Framework', 'Indexing'],
      useCases: ['Web Applications', 'Real-time Analytics', 'Content Management', 'IoT Applications'],
      icon: SiMongodb,
      gradient: 'from-green-500 to-green-700',
      difficulty: 'Intermediate'
    },
    {
      id: 13,
      name: 'MySQL',
      description: 'Popular open-source relational database. ACID-compliant with strong data integrity. Widely used for structured data and complex queries.',
      category: 'Database',
      year: '1995',
      paradigm: 'Relational',
      features: ['ACID Compliance', 'SQL Queries', 'Transactions', 'Stored Procedures', 'Replication'],
      useCases: ['E-commerce', 'Data Warehousing', 'Web Applications', 'Financial Systems'],
      icon: SiMysql,
      gradient: 'from-blue-500 to-blue-700',
      difficulty: 'Intermediate'
    },
    // Development Tools
    {
      id: 15,
      name: 'Git',
      description: 'Distributed version control system. Essential for collaborative development, code versioning, and maintaining project history across teams.',
      category: 'Tools',
      year: '2005',
      paradigm: 'Version Control',
      features: ['Branching', 'Merging', 'Distributed', 'Fast Performance', 'Open Source'],
      useCases: ['Version Control', 'Team Collaboration', 'Code Review', 'CI/CD Integration'],
      icon: SiGit,
      gradient: 'from-orange-500 to-red-600',
      difficulty: 'Intermediate'
    },
    {
      id: 17,
      name: 'Postman',
      description: 'API development and testing platform. Simplifies API testing, documentation, and collaboration. Essential tool for backend development.',
      category: 'Tools',
      year: '2012',
      paradigm: 'API Testing',
      features: ['API Testing', 'Collections', 'Automation', 'Mock Servers', 'Documentation'],
      useCases: ['API Testing', 'API Documentation', 'Team Collaboration', 'Automated Testing'],
      icon: SiPostman,
      gradient: 'from-orange-500 to-orange-700',
      difficulty: 'Beginner'
    }
  ];

  const filteredLanguages = languageReferences.filter(lang => {
    const matchesCategory = selectedCategory === 'All' || lang.category === selectedCategory;
    const matchesSearch = lang.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): string => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Full-Stack <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Tech Stack</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-3">
            Comprehensive documentation of my expertise in MEAN & MERN stack development, covering frontend, backend, databases, and essential development tools.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg">
              MEAN Stack
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
              Full-Stack Developer
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search technologies, frameworks, tools..."
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-6 py-4 pl-14 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200 shadow-lg"
            />
            <HiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="text-lg" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Language Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((lang) => {
              const Icon = lang.icon;
              const techId = lang.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
              return (
                <article
                  key={lang.id}
                  onClick={() => navigate(ROUTES.TECH_DETAIL.replace(':techId', techId))}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group hover:scale-105 cursor-pointer"
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${lang.gradient}`}></div>

                  <div className="p-6">
                    {/* Language Icon & Name */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${lang.gradient} rounded-xl flex items-center justify-center`}>
                          <Icon className="text-white text-2xl" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {lang.name}
                          </h2>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Since {lang.year}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(lang.difficulty)}`}>
                        {lang.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                      {lang.description}
                    </p>

                    {/* Paradigm & Category */}
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-medium">
                        {lang.paradigm}
                      </span>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
                        {lang.category}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <HiLightningBolt className="text-purple-600" />
                        Key Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {lang.features.slice(0, 4).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <HiCode className="text-purple-600" />
                        Common Use Cases
                      </h3>
                      <ul className="space-y-1">
                        {lang.useCases.slice(0, 3).map((useCase, index) => (
                          <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(ROUTES.TECH_DETAIL.replace(':techId', techId));
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 group-hover:shadow-lg"
                    >
                      View Documentation
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <FaCode className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No technologies found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredLanguages.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-purple-600 dark:text-purple-400">{filteredLanguages.length}</span> of{' '}
              <span className="font-bold">{languageReferences.length}</span> technologies
            </p>
          </div>
        )}

        {/* Tech Stack Summary */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-purple-100 dark:border-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Full-Stack Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🅜</span> MEAN Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                MongoDB, Express.js, Angular, Node.js - Enterprise-grade full-stack development
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">Express.js</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-semibold">Angular</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">Node.js</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🅡</span> MERN Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                MongoDB, Express.js, React, Node.js - Modern, scalable web applications
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">Express.js</span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-semibold">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
