import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { HiArrowLeft, HiBookOpen, HiCode, HiLightningBolt, HiExternalLink, HiCheckCircle } from 'react-icons/hi';
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiPostgresql, SiPostman, SiNpm, SiWebpack } from 'react-icons/si';
import { IconType } from 'react-icons';
import { ROUTES } from '../constants';

interface Topic {
  id: number;
  title: string;
  description: string;
  subtopics: string[];
  isIntro?: boolean;
}

interface Resource {
  title: string;
  url: string;
  type: 'Official' | 'Tutorial' | 'Documentation' | 'Video' | 'Article';
}

interface TechData {
  name: string;
  icon: IconType;
  gradient: string;
  description: string;
  category: string;
  year: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: Topic[];
  resources: Resource[];
  keyFeatures: string[];
  useCases: string[];
}

const TechDetail = () => {
  const { techId } = useParams<{ techId: string }>();
  const navigate = useNavigate();
  const [selectedTopicId, setSelectedTopicId] = useState<number>(0);

  // Technology data mapping
  const techDataMap: Record<string, TechData> = {
    'react': {
      name: 'React',
      icon: FaReact,
      gradient: 'from-cyan-400 to-blue-500',
      description: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs with a component-based architecture.',
      category: 'Frontend Framework',
      year: '2013',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 0,
          title: 'Introduction to React',
          description: 'Get started with React - understand what it is, why it\'s popular, and where it\'s used',
          subtopics: [],
          isIntro: true
        },
        {
          id: 1,
          title: 'Core Concepts',
          description: 'Fundamental concepts every React developer should master',
          subtopics: ['JSX Syntax', 'Components & Props', 'State Management', 'Lifecycle Methods', 'Virtual DOM']
        },
        {
          id: 2,
          title: 'Hooks',
          description: 'Modern React features for functional components',
          subtopics: ['useState', 'useEffect', 'useContext', 'useReducer', 'useMemo', 'useCallback', 'Custom Hooks']
        },
        {
          id: 3,
          title: 'Advanced Patterns',
          description: 'Advanced techniques for scalable React applications',
          subtopics: ['Higher-Order Components', 'Render Props', 'Context API', 'Error Boundaries', 'Code Splitting']
        },
        {
          id: 4,
          title: 'State Management',
          description: 'Managing application state effectively',
          subtopics: ['Redux', 'Context API', 'Zustand', 'Recoil', 'MobX']
        },
        {
          id: 5,
          title: 'Routing',
          description: 'Navigation and routing in React applications',
          subtopics: ['React Router', 'Dynamic Routes', 'Protected Routes', 'Nested Routes', 'Route Parameters']
        },
        {
          id: 6,
          title: 'Performance Optimization',
          description: 'Techniques to optimize React application performance',
          subtopics: ['React.memo', 'useMemo & useCallback', 'Lazy Loading', 'Code Splitting', 'Virtualization']
        }
      ],
      resources: [
        { title: 'Official React Documentation', url: 'https://react.dev', type: 'Official' },
        { title: 'React Tutorial for Beginners', url: 'https://react.dev/learn', type: 'Tutorial' },
        { title: 'React Hooks Guide', url: 'https://react.dev/reference/react', type: 'Documentation' },
        { title: 'Advanced React Patterns', url: 'https://kentcdodds.com/blog', type: 'Article' }
      ],
      keyFeatures: ['Component-Based', 'Virtual DOM', 'JSX', 'Unidirectional Data Flow', 'Rich Ecosystem'],
      useCases: ['Single Page Applications', 'Progressive Web Apps', 'Mobile Apps (React Native)', 'Dashboard UIs']
    },
    'angular': {
      name: 'Angular',
      icon: FaAngular,
      gradient: 'from-red-500 to-red-700',
      description: 'A TypeScript-based framework for building scalable web applications. Angular provides a complete solution with built-in features.',
      category: 'Frontend Framework',
      year: '2016',
      difficulty: 'Advanced',
      topics: [
        {
          id: 0,
          title: 'Introduction to Angular',
          description: 'Get started with Angular - understand what it is, why it\'s powerful, and where it\'s used',
          subtopics: [],
          isIntro: true
        },
        {
          id: 1,
          title: 'Core Concepts',
          description: 'Essential Angular fundamentals',
          subtopics: ['Components', 'Templates', 'Directives', 'Services', 'Dependency Injection']
        },
        {
          id: 2,
          title: 'Modules & Architecture',
          description: 'Organizing Angular applications',
          subtopics: ['NgModules', 'Feature Modules', 'Shared Modules', 'Core Module', 'Lazy Loading']
        },
        {
          id: 3,
          title: 'Reactive Programming',
          description: 'Working with RxJS and Observables',
          subtopics: ['Observables', 'Operators', 'Subjects', 'Async Pipe', 'Error Handling']
        },
        {
          id: 4,
          title: 'Forms',
          description: 'Building and validating forms',
          subtopics: ['Template-Driven Forms', 'Reactive Forms', 'Form Validation', 'Custom Validators', 'Dynamic Forms']
        },
        {
          id: 5,
          title: 'Routing & Navigation',
          description: 'Angular Router and navigation strategies',
          subtopics: ['Router Configuration', 'Route Guards', 'Lazy Loading Routes', 'Route Resolvers', 'Child Routes']
        },
        {
          id: 6,
          title: 'State Management',
          description: 'Managing application state in Angular',
          subtopics: ['Services', 'NgRx', 'Akita', 'BehaviorSubject', 'State Patterns']
        }
      ],
      resources: [
        { title: 'Official Angular Documentation', url: 'https://angular.io/docs', type: 'Official' },
        { title: 'Angular Tutorial', url: 'https://angular.io/tutorial', type: 'Tutorial' },
        { title: 'RxJS Documentation', url: 'https://rxjs.dev', type: 'Documentation' },
        { title: 'Angular University', url: 'https://angular-university.io', type: 'Tutorial' }
      ],
      keyFeatures: ['TypeScript Native', 'Two-way Data Binding', 'Dependency Injection', 'RxJS Integration', 'CLI Tools'],
      useCases: ['Enterprise Applications', 'Large-scale SPAs', 'Admin Dashboards', 'Progressive Web Apps']
    },
    'typescript': {
      name: 'TypeScript',
      icon: SiTypescript,
      gradient: 'from-blue-500 to-blue-700',
      description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      category: 'Programming Language',
      year: '2012',
      difficulty: 'Advanced',
      topics: [
        {
          id: 0,
          title: 'Introduction to TypeScript',
          description: 'Get started with TypeScript - understand what it is, why it\'s essential, and where it\'s used',
          subtopics: [],
          isIntro: true
        },
        {
          id: 1,
          title: 'Basic Types',
          description: 'Understanding TypeScript type system',
          subtopics: ['Primitive Types', 'Arrays & Tuples', 'Enums', 'Any & Unknown', 'Void & Never']
        },
        {
          id: 2,
          title: 'Advanced Types',
          description: 'Complex type constructs',
          subtopics: ['Union Types', 'Intersection Types', 'Type Guards', 'Type Assertions', 'Literal Types']
        },
        {
          id: 3,
          title: 'Interfaces & Classes',
          description: 'Object-oriented programming in TypeScript',
          subtopics: ['Interfaces', 'Classes', 'Abstract Classes', 'Inheritance', 'Access Modifiers']
        },
        {
          id: 4,
          title: 'Generics',
          description: 'Creating reusable components with generics',
          subtopics: ['Generic Functions', 'Generic Classes', 'Generic Constraints', 'Generic Interfaces', 'Utility Types']
        },
        {
          id: 5,
          title: 'Decorators',
          description: 'Meta-programming with decorators',
          subtopics: ['Class Decorators', 'Method Decorators', 'Property Decorators', 'Parameter Decorators']
        },
        {
          id: 6,
          title: 'Modules & Namespaces',
          description: 'Code organization in TypeScript',
          subtopics: ['ES6 Modules', 'Namespaces', 'Module Resolution', 'Declaration Files', 'Ambient Declarations']
        }
      ],
      resources: [
        { title: 'Official TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', type: 'Official' },
        { title: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', type: 'Documentation' },
        { title: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play', type: 'Tutorial' }
      ],
      keyFeatures: ['Static Typing', 'Type Inference', 'Interfaces', 'Generics', 'Enhanced IDE Support'],
      useCases: ['Large-scale Applications', 'Enterprise Software', 'Type-safe APIs', 'Library Development']
    },
    'javascript': {
      name: 'JavaScript',
      icon: SiJavascript,
      gradient: 'from-yellow-400 to-yellow-600',
      description: 'JavaScript is the programming language of the web, enabling interactive and dynamic content on websites.',
      category: 'Programming Language',
      year: '1995',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 0,
          title: 'Introduction to JavaScript',
          description: 'Get started with JavaScript - understand what it is, why it\'s everywhere, and where it\'s used',
          subtopics: [],
          isIntro: true
        },
        {
          id: 1,
          title: 'Fundamentals',
          description: 'Core JavaScript concepts',
          subtopics: ['Variables & Data Types', 'Operators', 'Control Flow', 'Functions', 'Scope']
        },
        {
          id: 2,
          title: 'ES6+ Features',
          description: 'Modern JavaScript features',
          subtopics: ['Arrow Functions', 'Destructuring', 'Spread/Rest', 'Template Literals', 'Modules']
        },
        {
          id: 3,
          title: 'Asynchronous JavaScript',
          description: 'Handling async operations',
          subtopics: ['Callbacks', 'Promises', 'Async/Await', 'Event Loop', 'Fetch API']
        },
        {
          id: 4,
          title: 'DOM Manipulation',
          description: 'Interacting with the Document Object Model',
          subtopics: ['Selecting Elements', 'Event Handling', 'DOM Traversal', 'Creating Elements', 'Modifying Styles']
        },
        {
          id: 5,
          title: 'Object-Oriented JavaScript',
          description: 'OOP concepts in JavaScript',
          subtopics: ['Objects', 'Prototypes', 'Classes', 'Inheritance', 'Encapsulation']
        },
        {
          id: 6,
          title: 'Functional Programming',
          description: 'Functional programming paradigms',
          subtopics: ['Pure Functions', 'Higher-Order Functions', 'Map/Filter/Reduce', 'Closures', 'Immutability']
        }
      ],
      resources: [
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'Official' },
        { title: 'JavaScript.info', url: 'https://javascript.info', type: 'Tutorial' },
        { title: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS', type: 'Documentation' }
      ],
      keyFeatures: ['Dynamic Typing', 'First-class Functions', 'Prototype-based OOP', 'Event-driven', 'Async/Await'],
      useCases: ['Web Development', 'Server-side (Node.js)', 'Mobile Apps', 'Desktop Apps']
    }
  };

  // Get technology data or show not found
  const techData = techId ? techDataMap[techId.toLowerCase()] : null;

  if (!techData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technology Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The technology you're looking for doesn't exist.</p>
          <Link
            to={ROUTES.TECH_STACK}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            <HiArrowLeft />
            Back to Tech Stack
          </Link>
        </div>
      </div>
    );
  }

  const Icon = techData.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch (type) {
      case 'Official': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Tutorial': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Documentation': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Video': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Article': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-5 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(ROUTES.TECH_STACK)}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-6 transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            Back to Tech Stack
          </button>

          {/* Technology Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${techData.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Icon className="text-5xl text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {techData.name}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(techData.difficulty)}`}>
                  {techData.difficulty}
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {techData.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  {techData.category}
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  Since {techData.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-5 py-8">
        <div className="max-w-full">
          {/* Horizontal Topics Navigation - Always at Top */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6 overflow-x-auto sticky top-0 z-10">
            <div className="p-4">
              <div className="flex gap-2 min-w-max">
                {techData.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                      selectedTopicId === topic.id
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {topic.isIntro ? (
                      <HiBookOpen className="text-lg" />
                    ) : (
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        selectedTopicId === topic.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white'
                      }`}>
                        {topic.id}
                      </div>
                    )}
                    <span className="font-medium text-sm">{topic.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedTopicId === 0 ? (
            /* Introduction/Skill Details - Full Width */
            <div>
              {/* Hero Section with Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 mb-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left: Title & Overview */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${techData.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="text-4xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {techData.name}
                        </h1>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(techData.difficulty)}`}>
                            {techData.difficulty}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Since {techData.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {techData.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {techData.name} is a {techData.category.toLowerCase()} that has been empowering developers since {techData.year}.
                      It's designed to help you build modern, scalable applications with confidence and efficiency.
                    </p>
                  </div>

                  {/* Right: Key Features */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <HiLightningBolt className="text-purple-600" />
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 gap-2">
                      {techData.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                          <HiCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                          <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Grid: Use Cases & Resources */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Use Cases */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiCode className="text-purple-600" />
                    Common Use Cases
                  </h2>
                  <div className="space-y-2">
                    {techData.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 text-sm">{useCase}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setSelectedTopicId(1)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                    >
                      Start Learning
                      <HiArrowLeft className="rotate-180" />
                    </button>
                  </div>
                </div>

                {/* Learning Resources */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiBookOpen className="text-purple-600" />
                    Learning Resources
                  </h2>
                  <div className="space-y-2">
                    {techData.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {resource.title}
                          </h3>
                          <HiExternalLink className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-shrink-0" />
                        </div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getResourceTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Topic Detail View - Full Width */
            <div>

            {/* Topic Content - Full Width */}
            {techData.topics.filter(topic => topic.id === selectedTopicId).map((topic) => (
              <div key={topic.id}>
                {/* Topic Header & Subtopics */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {topic.id}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {topic.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtopics Grid - Compact */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      What You'll Learn
                    </h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {topic.subtopics.map((subtopic, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-800/50"
                        >
                          <HiCheckCircle className="text-purple-600 text-lg flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{subtopic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Grid: Key Features & Resources */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Key Features */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <HiLightningBolt className="text-purple-600" />
                      Key Features of {techData.name}
                    </h2>
                    <div className="space-y-2">
                      {techData.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <HiCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Resources */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <HiBookOpen className="text-purple-600" />
                      Learning Resources
                    </h2>
                    <div className="space-y-2">
                      {techData.resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {resource.title}
                            </h3>
                            <HiExternalLink className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-shrink-0" />
                          </div>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getResourceTypeColor(resource.type)}`}>
                            {resource.type}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechDetail;

