import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaCalendar, FaTags, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import blogData from '../assets/resources/Blog.json'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setPosts(blogData)
      setFilteredPosts(blogData)
      setIsLoading(false)
    }
    loadPosts()
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
    setFilteredPosts(filtered)
  }

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6)
  }

  const SkeletonLoader = () => (
    <>
      {/* Skeleton Header */}
      <div className="text-center mb-20">
        <div className="h-16 w-3/4 mx-auto bg-gray-800 rounded-lg animate-pulse mb-4"></div>
        <div className="h-8 w-1/2 mx-auto bg-gray-800 rounded-lg animate-pulse"></div>
      </div>

      {/* Skeleton Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="h-12 w-full bg-gray-800 rounded-lg animate-pulse"></div>
      </div>

      {/* Skeleton Featured Post */}
      <div className="mb-12">
        <div className="rounded-2xl overflow-hidden bg-gray-800 animate-pulse">
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
            <div className="md:w-2/5 h-56 bg-gray-700"></div>
            <div className="p-6 md:w-3/5">
              <div className="h-6 w-20 bg-gray-700 rounded-full mb-4"></div>
              <div className="h-8 w-3/4 bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-16 w-full bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-10 w-32 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-700"></div>
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <div className="h-5 w-24 bg-gray-700 rounded-full"></div>
                <div className="h-5 w-24 bg-gray-700 rounded-full"></div>
              </div>
              <div className="h-7 w-3/4 bg-gray-700 rounded-lg mb-3"></div>
              <div className="h-16 w-full bg-gray-700 rounded-lg mb-4"></div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-6 w-16 bg-gray-700 rounded-full"></div>
                ))}
              </div>
              <div className="h-6 w-28 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-2xl text-cyan-300/80">Sharing my thoughts and experiences in tech</p>
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg text-cyan-100 placeholder-cyan-600/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Featured Post */}
            {filteredPosts.find(post => post.featured) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-400/20 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
                    <div className="md:w-2/5 relative group">
                      <motion.img 
                        src={filteredPosts.find(post => post.featured).image}
                        alt="Featured post"
                        className="w-full h-48 md:h-56 object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6 md:w-3/5">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/30 text-cyan-300 text-xs border border-cyan-400/30">
                        Featured
                      </span>
                      <h2 className="text-2xl font-bold mt-3 mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        {filteredPosts.find(post => post.featured).title}
                      </h2>
                      <p className="text-cyan-100/70 text-sm mb-4 line-clamp-2">
                        {filteredPosts.find(post => post.featured).excerpt}
                      </p>
                      <Link to={`/blog/${filteredPosts.find(post => post.featured).slug}`}>
                        <motion.button 
                          whileHover={{ scale: 1.03 }}
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                        >
                          Read More <FaArrowRight className="text-xs" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredPosts.slice(0, visiblePosts).map(post => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-cyan-300 mb-4">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-cyan-400" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaTags className="text-cyan-400" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-cyan-50">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          Read More <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {filteredPosts.length > visiblePosts && (
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={loadMore}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                >
                  Load More Posts
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Blog
