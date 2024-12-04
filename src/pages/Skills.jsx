import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaCode, FaServer, FaPalette, FaArrowRight, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', level: 95, details: 'Used in 20+ projects, 4 years experience', tags: ['frontend', 'javascript', 'ui'] },
        { name: 'JavaScript', level: 90, details: 'Expert level, ES6+', tags: ['frontend', 'backend', 'language'] },
        { name: 'HTML/CSS', level: 95, details: 'Semantic HTML, Modern CSS', tags: ['frontend', 'markup', 'styling'] },
        { name: 'Tailwind CSS', level: 90, details: 'Used in most recent projects', tags: ['frontend', 'css', 'framework'] },
        { name: 'TypeScript', level: 85, details: 'Used in enterprise applications', tags: ['frontend', 'backend', 'language'] },
        { name: 'Next.js', level: 80, details: 'Built several production apps', tags: ['frontend', 'react', 'framework'] }
      ]
    },
    backend: {
      title: 'Backend Development', 
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', level: 85, details: 'REST APIs, Microservices', tags: ['backend', 'javascript', 'server'] },
        { name: 'Express', level: 85, details: 'API Development', tags: ['backend', 'framework', 'node'] },
        { name: 'MongoDB', level: 80, details: 'Database Design & Operations', tags: ['backend', 'database', 'nosql'] },
        { name: 'PostgreSQL', level: 75, details: 'Complex Queries, Optimization', tags: ['backend', 'database', 'sql'] },
        { name: 'GraphQL', level: 70, details: 'API Development', tags: ['backend', 'api', 'query language'] },
        { name: 'AWS', level: 65, details: 'Cloud Infrastructure', tags: ['backend', 'cloud', 'devops'] }
      ]
    },
    design: {
      title: 'Design Tools',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', level: 90, details: 'UI/UX Design, Prototyping', tags: ['design', 'ui/ux', 'prototyping'] },
        { name: 'Adobe XD', level: 85, details: 'Interface Design', tags: ['design', 'ui/ux', 'adobe'] },
        { name: 'Photoshop', level: 80, details: 'Image Editing', tags: ['design', 'image editing', 'adobe'] },
        { name: 'Illustrator', level: 75, details: 'Vector Graphics', tags: ['design', 'vector', 'adobe'] },
        { name: 'After Effects', level: 70, details: 'Motion Graphics', tags: ['design', 'animation', 'adobe'] },
        { name: 'Blender', level: 60, details: '3D Modeling', tags: ['design', '3d', 'modeling'] }
      ]
    }
  }

  const filteredSkills = skillCategories[activeCategory].skills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tech Arsenal
          </h1>
          <p className="text-2xl text-cyan-300/80">Mastering the tools that shape digital experiences</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              placeholder="Search skills, technologies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg text-cyan-100 placeholder-cyan-600/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(skillCategories).map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-cyan-300'
              }`}
            >
              {skillCategories[category].icon}
              {skillCategories[category].title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-md transition-colors duration-300 hover:bg-gray-700/50"
              >
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-cyan-300">{skill.name}</h3>
                  <span className="text-cyan-400 font-bold bg-cyan-400/10 px-3 py-1 rounded-full">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-cyan-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {skill.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gray-900/90 rounded-xl p-6 flex items-center justify-center text-center"
                    >
                      <p className="text-cyan-300 leading-relaxed">{skill.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 rounded-lg text-white font-medium transition-colors duration-300 hover:bg-cyan-600"
          >
            <FaDownload /> Download Resume
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 transition-colors duration-300 hover:bg-gray-700/30"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-300 mb-6">Let's collaborate and create something amazing together!</p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Check out my projects 
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
