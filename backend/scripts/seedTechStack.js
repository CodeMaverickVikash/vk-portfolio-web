const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TechStack = require('../models/TechStack');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Tech stack data
const techStackData = [
  // Frontend Technologies
  {
    name: 'JavaScript',
    description: 'Core language of the web. Essential for building interactive and dynamic web applications. Powers both frontend and backend development in the MEAN/MERN stack.',
    category: 'Frontend',
    year: '1995',
    paradigm: 'Multi-paradigm',
    features: ['ES6+ Syntax', 'Async/Await', 'Closures', 'Event Loop', 'DOM Manipulation'],
    useCases: ['Web Development', 'Single Page Applications', 'Real-time Apps', 'API Integration'],
    icon: 'SiJavascript',
    gradient: 'from-yellow-400 to-yellow-600',
    difficulty: 'Intermediate'
  },
  {
    name: 'TypeScript',
    description: 'Superset of JavaScript with static typing. Enhances code quality and developer experience in large-scale applications. Widely used in Angular and modern React projects.',
    category: 'Frontend',
    year: '2012',
    paradigm: 'Multi-paradigm',
    features: ['Static Typing', 'Interfaces', 'Generics', 'Type Inference', 'Enhanced IDE Support'],
    useCases: ['Enterprise Applications', 'Angular Projects', 'React with TypeScript', 'Type-safe APIs'],
    icon: 'SiTypescript',
    gradient: 'from-blue-500 to-blue-700',
    difficulty: 'Advanced'
  },
  {
    name: 'HTML5',
    description: 'Latest evolution of HTML. Foundation of web development providing semantic markup and modern APIs for building accessible and SEO-friendly applications.',
    category: 'Frontend',
    year: '2014',
    paradigm: 'Markup Language',
    features: ['Semantic Elements', 'Canvas API', 'Local Storage', 'Geolocation', 'Multimedia Support'],
    useCases: ['Web Structure', 'SEO Optimization', 'Accessibility', 'Progressive Web Apps'],
    icon: 'FaHtml5',
    gradient: 'from-orange-500 to-red-500',
    difficulty: 'Beginner'
  },
  {
    name: 'CSS3',
    description: 'Modern styling language for web applications. Creates responsive, beautiful, and animated user interfaces with advanced layout systems like Flexbox and Grid.',
    category: 'Frontend',
    year: '2011',
    paradigm: 'Style Sheet Language',
    features: ['Flexbox', 'Grid Layout', 'Animations', 'Media Queries', 'Custom Properties'],
    useCases: ['Responsive Design', 'UI Styling', 'Animations', 'Layout Design'],
    icon: 'FaCss3Alt',
    gradient: 'from-blue-400 to-blue-600',
    difficulty: 'Intermediate'
  },
  // Frameworks
  {
    name: 'React',
    description: 'Popular JavaScript library for building user interfaces. Component-based architecture makes it perfect for building scalable SPAs. Core of the MERN stack.',
    category: 'Framework',
    year: '2013',
    paradigm: 'Component-based',
    features: ['Virtual DOM', 'JSX', 'Hooks', 'Component Reusability', 'Unidirectional Data Flow'],
    useCases: ['Single Page Apps', 'Progressive Web Apps', 'Mobile Apps (React Native)', 'Dashboard UIs'],
    icon: 'FaReact',
    gradient: 'from-cyan-400 to-blue-500',
    difficulty: 'Intermediate'
  },
  {
    name: 'Angular',
    description: 'Comprehensive TypeScript-based framework by Google. Full-featured framework for building enterprise-grade applications. Core of the MEAN stack.',
    category: 'Framework',
    year: '2016',
    paradigm: 'MVC/MVVM',
    features: ['Two-way Data Binding', 'Dependency Injection', 'RxJS', 'TypeScript Native', 'CLI Tools'],
    useCases: ['Enterprise Applications', 'Large-scale SPAs', 'Admin Dashboards', 'Progressive Web Apps'],
    icon: 'FaAngular',
    gradient: 'from-red-500 to-red-700',
    difficulty: 'Advanced'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development. Provides low-level utility classes for building custom designs without leaving your HTML.',
    category: 'Framework',
    year: '2017',
    paradigm: 'Utility-first CSS',
    features: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Customizable', 'JIT Compiler'],
    useCases: ['Rapid Prototyping', 'Custom Designs', 'Component Libraries', 'Modern Web Apps'],
    icon: 'SiTailwindcss',
    gradient: 'from-cyan-400 to-teal-500',
    difficulty: 'Beginner'
  },
  {
    name: 'Bootstrap',
    description: 'Popular CSS framework for responsive web development. Provides pre-built components and grid system for quick and consistent UI development.',
    category: 'Framework',
    year: '2011',
    paradigm: 'Component-based CSS',
    features: ['Grid System', 'Pre-built Components', 'Responsive Utilities', 'JavaScript Plugins', 'Customizable'],
    useCases: ['Rapid Development', 'Responsive Websites', 'Admin Templates', 'Landing Pages'],
    icon: 'SiBootstrap',
    gradient: 'from-purple-500 to-purple-700',
    difficulty: 'Beginner'
  },
  // Backend Technologies
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript development. Core backend technology in both MEAN and MERN stacks.',
    category: 'Backend',
    year: '2009',
    paradigm: 'Event-driven',
    features: ['Non-blocking I/O', 'NPM Ecosystem', 'Event Loop', 'Scalable', 'Cross-platform'],
    useCases: ['REST APIs', 'Real-time Applications', 'Microservices', 'Server-side Rendering'],
    icon: 'FaNodeJs',
    gradient: 'from-green-500 to-green-700',
    difficulty: 'Intermediate'
  },
  {
    name: 'Express.js',
    description: 'Fast, minimalist web framework for Node.js. Simplifies building robust APIs and web applications. Essential part of MEAN and MERN backend development.',
    category: 'Backend',
    year: '2010',
    paradigm: 'Middleware-based',
    features: ['Routing', 'Middleware', 'Template Engines', 'Error Handling', 'RESTful APIs'],
    useCases: ['REST APIs', 'Web Applications', 'Microservices', 'API Gateways'],
    icon: 'SiExpress',
    gradient: 'from-gray-600 to-gray-800',
    difficulty: 'Intermediate'
  },
  // Database Technologies
  {
    name: 'MongoDB',
    description: 'NoSQL document database with flexible schema. Stores data in JSON-like documents. The "M" in MEAN and MERN stacks, perfect for modern web applications.',
    category: 'Database',
    year: '2009',
    paradigm: 'Document-oriented',
    features: ['Flexible Schema', 'JSON Documents', 'Scalability', 'Aggregation Framework', 'Indexing'],
    useCases: ['Web Applications', 'Real-time Analytics', 'Content Management', 'IoT Applications'],
    icon: 'SiMongodb',
    gradient: 'from-green-500 to-green-700',
    difficulty: 'Intermediate'
  },
  {
    name: 'MySQL',
    description: 'Popular open-source relational database. ACID-compliant with strong data integrity. Widely used for structured data and complex queries.',
    category: 'Database',
    year: '1995',
    paradigm: 'Relational',
    features: ['ACID Compliance', 'SQL Queries', 'Transactions', 'Stored Procedures', 'Replication'],
    useCases: ['E-commerce', 'Data Warehousing', 'Web Applications', 'Financial Systems'],
    icon: 'SiMysql',
    gradient: 'from-blue-500 to-blue-700',
    difficulty: 'Intermediate'
  },
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database. Known for reliability, feature robustness, and performance. Supports both SQL and JSON querying.',
    category: 'Database',
    year: '1996',
    paradigm: 'Relational',
    features: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Advanced Indexing', 'Extensibility'],
    useCases: ['Enterprise Applications', 'Geospatial Data', 'Data Analytics', 'Complex Queries'],
    icon: 'SiPostgresql',
    gradient: 'from-blue-600 to-indigo-600',
    difficulty: 'Advanced'
  },
  // Tools
  {
    name: 'Git',
    description: 'Distributed version control system. Essential for collaborative development, code versioning, and maintaining project history across teams.',
    category: 'Tools',
    year: '2005',
    paradigm: 'Version Control',
    features: ['Branching', 'Merging', 'Distributed', 'Fast Performance', 'Open Source'],
    useCases: ['Version Control', 'Team Collaboration', 'Code Review', 'CI/CD Integration'],
    icon: 'SiGit',
    gradient: 'from-orange-500 to-red-600',
    difficulty: 'Intermediate'
  },
  {
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers. Ensures consistency across different environments and simplifies deployment.',
    category: 'Tools',
    year: '2013',
    paradigm: 'Containerization',
    features: ['Containerization', 'Portability', 'Isolation', 'Scalability', 'Microservices Support'],
    useCases: ['Application Deployment', 'Microservices', 'CI/CD Pipelines', 'Development Environments'],
    icon: 'SiDocker',
    gradient: 'from-blue-500 to-cyan-500',
    difficulty: 'Advanced'
  },
  {
    name: 'Postman',
    description: 'API development and testing platform. Simplifies API testing, documentation, and collaboration. Essential tool for backend development.',
    category: 'Tools',
    year: '2012',
    paradigm: 'API Testing',
    features: ['API Testing', 'Collections', 'Environment Variables', 'Automated Testing', 'Documentation'],
    useCases: ['API Development', 'Testing', 'Documentation', 'Team Collaboration'],
    icon: 'SiPostman',
    gradient: 'from-orange-500 to-orange-600',
    difficulty: 'Beginner'
  }
];

// Seed function
const seedTechStack = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('🗑️  Clearing existing tech stack data...');
    await TechStack.deleteMany({});

    // Insert new data
    console.log('📝 Inserting tech stack data...');
    const result = await TechStack.insertMany(techStackData);

    console.log(`✅ Successfully seeded ${result.length} technologies!`);
    console.log('\n📊 Summary:');

    const stats = await TechStack.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    stats.forEach(stat => {
      console.log(`   ${stat._id}: ${stat.count}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding tech stack:', error);
    process.exit(1);
  }
};

// Run seed
seedTechStack();

