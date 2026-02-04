import { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { HiPlus, HiPencil, HiTrash, HiSearch, HiViewGrid } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiPostgresql, SiGit, SiDocker, SiPostman } from 'react-icons/si';

interface TechItem {
  id: number;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  year: string;
  icon: any;
  gradient: string;
}

const AdminTechStack = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock data - in real app this would come from API
  const techStack: TechItem[] = [
    { id: 1, name: 'JavaScript', category: 'Frontend', difficulty: 'Intermediate', year: '1995', icon: SiJavascript, gradient: 'from-yellow-400 to-yellow-600' },
    { id: 2, name: 'TypeScript', category: 'Frontend', difficulty: 'Advanced', year: '2012', icon: SiTypescript, gradient: 'from-blue-500 to-blue-700' },
    { id: 3, name: 'React', category: 'Framework', difficulty: 'Intermediate', year: '2013', icon: FaReact, gradient: 'from-cyan-400 to-blue-500' },
    { id: 4, name: 'Angular', category: 'Framework', difficulty: 'Advanced', year: '2016', icon: FaAngular, gradient: 'from-red-500 to-red-700' },
    { id: 5, name: 'HTML5', category: 'Frontend', difficulty: 'Beginner', year: '2014', icon: FaHtml5, gradient: 'from-orange-500 to-red-500' },
    { id: 6, name: 'CSS3', category: 'Frontend', difficulty: 'Beginner', year: '2011', icon: FaCss3Alt, gradient: 'from-blue-400 to-blue-600' },
    { id: 7, name: 'Node.js', category: 'Backend', difficulty: 'Intermediate', year: '2009', icon: FaNodeJs, gradient: 'from-green-500 to-green-700' },
    { id: 8, name: 'Express.js', category: 'Backend', difficulty: 'Intermediate', year: '2010', icon: SiExpress, gradient: 'from-gray-600 to-gray-800' },
    { id: 9, name: 'MongoDB', category: 'Database', difficulty: 'Intermediate', year: '2009', icon: SiMongodb, gradient: 'from-green-500 to-green-700' },
    { id: 10, name: 'MySQL', category: 'Database', difficulty: 'Intermediate', year: '1995', icon: SiMysql, gradient: 'from-blue-500 to-blue-700' },
    { id: 11, name: 'PostgreSQL', category: 'Database', difficulty: 'Advanced', year: '1996', icon: SiPostgresql, gradient: 'from-blue-600 to-indigo-600' },
    { id: 12, name: 'Tailwind CSS', category: 'Framework', difficulty: 'Beginner', year: '2017', icon: SiTailwindcss, gradient: 'from-cyan-400 to-blue-500' },
    { id: 13, name: 'Bootstrap', category: 'Framework', difficulty: 'Beginner', year: '2011', icon: SiBootstrap, gradient: 'from-purple-500 to-purple-700' },
    { id: 14, name: 'Redux', category: 'Framework', difficulty: 'Advanced', year: '2015', icon: SiRedux, gradient: 'from-purple-600 to-purple-800' },
    { id: 15, name: 'Git', category: 'Tools', difficulty: 'Intermediate', year: '2005', icon: SiGit, gradient: 'from-orange-500 to-red-600' },
    { id: 16, name: 'Docker', category: 'Tools', difficulty: 'Advanced', year: '2013', icon: SiDocker, gradient: 'from-blue-500 to-cyan-500' },
    { id: 17, name: 'Postman', category: 'Tools', difficulty: 'Beginner', year: '2012', icon: SiPostman, gradient: 'from-orange-500 to-orange-600' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Framework', 'Tools'];

  const filteredTech = techStack.filter(tech => {
    const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Tech Stack Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your technologies, frameworks, and tools
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
            <HiPlus className="w-5 h-5" />
            Add Technology
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Technologies</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{techStack.length}</p>
              </div>
              <HiViewGrid className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frontend</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {techStack.filter(t => t.category === 'Frontend').length}
                </p>
              </div>
              <FaReact className="w-8 h-8 text-cyan-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Backend</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {techStack.filter(t => t.category === 'Backend').length}
                </p>
              </div>
              <FaNodeJs className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Database</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {techStack.filter(t => t.category === 'Database').length}
                </p>
              </div>
              <SiMongodb className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Technology
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTech.length > 0 ? (
                  filteredTech.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <tr key={tech.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${tech.gradient} rounded-lg flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {tech.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {tech.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tech.difficulty)}`}>
                            {tech.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {tech.year}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                              <HiPencil className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                              <HiTrash className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <HiViewGrid className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                        <p className="text-gray-600 dark:text-gray-400">No technologies found</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Try adjusting your search or filter</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results Count */}
        {filteredTech.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredTech.length}</span> of{' '}
              <span className="font-semibold">{techStack.length}</span> technologies
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminTechStack;
