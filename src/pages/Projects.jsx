import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter } from 'react-icons/fa'
import projectData from '../assets/resources/Projects.json'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchBy, setSearchBy] = useState('all')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const categories = ['All', 'Web Apps', 'Designs', 'Tools']

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setProjects(projectData)
      setFilteredProjects(projectData)
      setIsLoading(false)
    }
    loadProjects()
  }, [])

  const filterProjects = (category) => {
    setActiveCategory(category)
    if (category.toLowerCase() === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category === category
      ))
    }
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    
    let filtered = projects.filter(project => {
      if (searchBy === 'title') {
        return project.title.toLowerCase().includes(query)
      } else if (searchBy === 'description') {
        return project.description.toLowerCase().includes(query)
      } else if (searchBy === 'technologies') {
        return project.technologies.some(tech => 
          tech.toLowerCase().includes(query)
        )
      } else {
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => 
            tech.toLowerCase().includes(query)
          )
        )
      }
    })

    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => 
        project.category === activeCategory
      )
    }

    setFilteredProjects(filtered)
  }

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6)
  }

  const SkeletonCard = () => (
    <div className="relative bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="animate-pulse">
        <div className="h-48 bg-gray-700/50" />
        <div className="p-6">
          <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-700/50 rounded w-full mb-2" />
          <div className="h-4 bg-gray-700/50 rounded w-5/6 mb-4" />
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-6 w-20 bg-gray-700/50 rounded-full" />
            ))}
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-24 bg-gray-700/50 rounded-lg" />
            <div className="h-10 w-24 bg-gray-700/50 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Project Nexus
          </h1>
          <p className="text-2xl text-cyan-300/80">Explore my digital innovations and creations</p>
        </motion.div>

        {/* Filter and Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.div 
            className="flex gap-3 flex-wrap justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 backdrop-blur-md border ${
                  activeCategory === category 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/40 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="relative w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50"
            >
              <FaSearch className="text-cyan-400" />
              <span>Search Projects</span>
            </button>

            <div className={`flex gap-3 ${isSearchOpen ? 'flex' : 'hidden md:flex'}`}>
              <select 
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-cyan-100 focus:ring-2 focus:ring-cyan-400/20"
              >
                <option value="all">All Fields</option>
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="technologies">Technology</option>
              </select>
              <div className="relative flex-grow">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  placeholder={`Search ${searchBy === 'all' ? 'projects' : searchBy}...`}
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-cyan-100 placeholder-cyan-600/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton Loading
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <SkeletonCard />
              </motion.div>
            ))
          ) : (
            <AnimatePresence>
              {filteredProjects.slice(0, visibleProjects).map(project => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    translateZ: 20,
                    boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
                    transition: {
                      duration: 0.3,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }
                  }}
                  className="relative bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 overflow-hidden group hover:border-cyan-400/50 transition-all duration-500 transform-gpu perspective-1000"
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-sm px-3 py-1 rounded-full z-10">
                      Featured
                    </div>
                  )}
                  <div className="relative overflow-hidden h-48 group-hover:after:opacity-100 after:absolute after:inset-0 after:bg-gradient-to-t after:from-cyan-500/20 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 mb-4 group-hover:text-gray-200">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-cyan-300 rounded-lg hover:bg-gray-600/50 transition-all duration-300 transform hover:translate-y-[-2px]"
                      >
                        <FaGithub /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Load More Button */}
        {!isLoading && filteredProjects.length > visibleProjects && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
