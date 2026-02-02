import { useState } from 'react';
import { HiCalendar, HiClock, HiArrowRight, HiTag, HiSearch, HiBookOpen } from 'react-icons/hi';
import { FaReact, FaAngular, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: HiBookOpen, color: 'purple' },
    { name: 'React', icon: FaReact, color: 'blue' },
    { name: 'Angular', icon: FaAngular, color: 'red' },
    { name: 'TypeScript', icon: SiTypescript, color: 'blue' },
    { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
    { name: 'Node.js', icon: FaNodeJs, color: 'green' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to leverage TypeScript in React applications to build type-safe, maintainable, and scalable web applications. Explore best practices, common patterns, and advanced techniques.',
      category: 'React',
      date: '15 Jan 2024',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Best Practices'],
      icon: FaReact,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Angular Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize Angular applications for better performance. From lazy loading to change detection strategies, learn how to make your apps lightning fast.',
      category: 'Angular',
      date: '10 Jan 2024',
      readTime: '10 min read',
      tags: ['Angular', 'Performance', 'Optimization'],
      icon: FaAngular,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Modern JavaScript ES2024 Features You Should Know',
      excerpt: 'Explore the latest JavaScript features introduced in ES2024. From new array methods to improved async handling, stay up-to-date with modern JavaScript development.',
      category: 'JavaScript',
      date: '5 Jan 2024',
      readTime: '6 min read',
      tags: ['JavaScript', 'ES2024', 'Modern JS'],
      icon: SiJavascript,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to building robust RESTful APIs using Node.js and Express. Learn about routing, middleware, error handling, and best practices for API development.',
      category: 'Node.js',
      date: '28 Dec 2023',
      readTime: '12 min read',
      tags: ['Node.js', 'Express', 'API'],
      icon: FaNodeJs,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'TypeScript Advanced Types and Generics',
      excerpt: 'Deep dive into TypeScript\'s advanced type system. Master generics, conditional types, mapped types, and utility types to write more flexible and reusable code.',
      category: 'TypeScript',
      date: '20 Dec 2023',
      readTime: '9 min read',
      tags: ['TypeScript', 'Advanced', 'Types'],
      icon: SiTypescript,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 6,
      title: 'State Management in React: Redux vs Context API',
      excerpt: 'Compare different state management solutions in React. Learn when to use Redux, Context API, or other alternatives based on your application\'s needs and complexity.',
      category: 'React',
      date: '15 Dec 2023',
      readTime: '7 min read',
      tags: ['React', 'State Management', 'Redux'],
      icon: FaReact,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 7,
      title: 'MongoDB Schema Design Best Practices',
      excerpt: 'Learn how to design efficient MongoDB schemas for your applications. Understand embedding vs referencing, indexing strategies, and data modeling patterns.',
      category: 'Node.js',
      date: '10 Dec 2023',
      readTime: '11 min read',
      tags: ['MongoDB', 'Database', 'Schema Design'],
      icon: SiMongodb,
      gradient: 'from-green-600 to-teal-600'
    },
    {
      id: 8,
      title: 'Tailwind CSS: Utility-First Styling Approach',
      excerpt: 'Discover the power of utility-first CSS with Tailwind. Learn how to build beautiful, responsive interfaces faster with this modern CSS framework.',
      category: 'JavaScript',
      date: '5 Dec 2023',
      readTime: '5 min read',
      tags: ['Tailwind CSS', 'CSS', 'Styling'],
      icon: SiTailwindcss,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 9,
      title: 'Angular Reactive Forms: Complete Guide',
      excerpt: 'Master Angular reactive forms with this comprehensive guide. Learn about form validation, dynamic forms, custom validators, and advanced form handling techniques.',
      category: 'Angular',
      date: '1 Dec 2023',
      readTime: '10 min read',
      tags: ['Angular', 'Forms', 'Reactive'],
      icon: FaAngular,
      gradient: 'from-red-600 to-orange-600'
    }
  ];

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, React, Angular, and everything in between.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => {
              const Icon = blog.icon;
              return (
                <article
                  key={blog.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group hover:scale-105"
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${blog.gradient}`}></div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${blog.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full"
                        >
                          <HiTag className="text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-1">
                        <HiCalendar className="text-base" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <HiClock className="text-base" />
                        {blog.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 group-hover:shadow-lg">
                      Read Article
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <FaCode className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-purple-600 dark:text-purple-400">{filteredBlogs.length}</span> of{' '}
              <span className="font-bold">{blogPosts.length}</span> articles
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
