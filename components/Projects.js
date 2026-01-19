'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, TrendingUp, Code, Star } from 'lucide-react';
import { projects, categories, getProjectsByCategory } from '@/lib/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  
  const filteredProjects = getProjectsByCategory(selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl">
            A collection of algorithmic trading systems, backtesting frameworks, and financial 
            analysis tools I&apos;ve built to explore quantitative finance and automated trading strategies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 h-full flex flex-col">
                
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-primary px-3 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </div>
                    </div>
                  )}
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl">📊</div>';
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1 rounded text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category */}
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
                    {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-gray-900/50 rounded p-2">
                        <div className="text-xs text-gray-500 capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    {project.github && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors">
                        <Github size={14} />
                        GitHub
                      </div>
                    )}
                    {project.liveDemo && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors">
                        <ExternalLink size={14} />
                        Live Demo
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {projects.filter(p => p.status === 'Live').length}
            </div>
            <div className="text-sm text-gray-400">Live Projects</div>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {[...new Set(projects.flatMap(p => p.technologies))].length}
            </div>
            <div className="text-sm text-gray-400">Technologies Used</div>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-gray-400">Lines of Code</div>
          </div>
        </div>

      </div>
    </section>
  );
}