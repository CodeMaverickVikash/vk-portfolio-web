import { useState, ChangeEvent } from 'react';
import { HiArrowRight, HiSearch, HiBookOpen, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaCode, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { Category, LanguageReference } from '../types';

const Languages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: Category[] = [
    { name: 'All', icon: HiBookOpen, color: 'purple' },
    { name: 'Frontend', icon: FaReact, color: 'blue' },
    { name: 'Backend', icon: FaNodeJs, color: 'green' },
  ];

  const languageReferences: LanguageReference[] = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'High-level, interpreted programming language. The language of the web, enabling interactive web pages and is an essential part of web applications.',
      category: 'Frontend',
      year: '1995',
      paradigm: 'Multi-paradigm',
      features: ['Dynamic Typing', 'First-class Functions', 'Prototype-based OOP', 'Async/Await'],
      useCases: ['Web Development', 'Server-side (Node.js)', 'Mobile Apps', 'Desktop Apps'],
      icon: SiJavascript,
      gradient: 'from-yellow-500 to-orange-500',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Strongly typed superset of JavaScript that compiles to plain JavaScript. Adds optional static typing, classes, and interfaces to JavaScript.',
      category: 'Frontend',
      year: '2012',
      paradigm: 'Multi-paradigm',
      features: ['Static Typing', 'Interfaces', 'Generics', 'Type Inference'],
      useCases: ['Large-scale Applications', 'Enterprise Software', 'React/Angular Apps', 'Node.js'],
      icon: SiTypescript,
      gradient: 'from-blue-600 to-indigo-600',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      name: 'Python',
      description: 'High-level, interpreted language known for its simplicity and readability. Widely used in data science, AI, web development, and automation.',
      category: 'Backend',
      year: '1991',
      paradigm: 'Multi-paradigm',
      features: ['Easy Syntax', 'Rich Libraries', 'Dynamic Typing', 'Interpreted'],
      useCases: ['Data Science', 'Machine Learning', 'Web Development', 'Automation', 'Scripting'],
      icon: FaPython,
      gradient: 'from-blue-500 to-yellow-500',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      name: 'Java',
      description: 'Object-oriented, class-based language designed to have minimal implementation dependencies. Write once, run anywhere (WORA).',
      category: 'Backend',
      year: '1995',
      paradigm: 'Object-oriented',
      features: ['Platform Independent', 'Robust', 'Multithreaded', 'Secure'],
      useCases: ['Enterprise Applications', 'Android Development', 'Web Applications', 'Big Data'],
      icon: FaJava,
      gradient: 'from-red-600 to-orange-600',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      name: 'PHP',
      description: 'Server-side scripting language designed for web development. Powers a large portion of the web including WordPress and Laravel.',
      category: 'Backend',
      year: '1995',
      paradigm: 'Multi-paradigm',
      features: ['Easy to Learn', 'Database Integration', 'Cross-platform', 'Large Community'],
      useCases: ['Web Development', 'CMS', 'E-commerce', 'Server Scripting'],
      icon: FaPhp,
      gradient: 'from-indigo-600 to-purple-600',
      difficulty: 'Beginner'
    }
  ];

  const filteredLanguages = languageReferences.filter(lang => {
    const matchesCategory = selectedCategory === 'All' || lang.category === selectedCategory;
    const matchesSearch = lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lang.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lang.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         lang.useCases.some(useCase => useCase.toLowerCase().includes(searchQuery.toLowerCase()));
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
            Programming Languages <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Reference</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive guide to popular programming languages, their features, use cases, and when to use them.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programming languages..."
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
              return (
                <article
                  key={lang.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group hover:scale-105"
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
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 group-hover:shadow-lg">
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No languages found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredLanguages.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-purple-600 dark:text-purple-400">{filteredLanguages.length}</span> of{' '}
              <span className="font-bold">{languageReferences.length}</span> programming languages
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Languages;
