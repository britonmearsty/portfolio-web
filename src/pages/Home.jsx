import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-8 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-30">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="bg-purple-600 rounded-full animate-pulse" style={{ width: `${Math.random() * 120}px`, height: `${Math.random() * 120}px` }} />
          ))}
        </div>
        <div className="max-w-2xl relative z-10 bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          <div className="bg-gray-900 p-4 rounded-lg border border-green-600">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Hi, I'm John Doe
            </motion.h1>
            <p className="text-lg md:text-xl mb-4">Crafting modern websites with cutting-edge technologies</p>
            <p className="text-lg md:text-xl mb-8">With a passion for clean code and modern design principles, I strive to deliver exceptional user experiences.</p>
            <button className="bg-green-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300 shadow-lg">
              View My Work
            </button>
          </div>
        </div>
        <div className="hidden md:block relative z-10">
          <img src="https://images.unsplash.com/photo-1554151220-8e3e5a5f8f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Profile" className="w-80 h-80 rounded-full object-cover border-4 border-purple-800 shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 md:px-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="leading-relaxed text-gray-300">
              With over 5 years of experience in web development, I specialize in creating beautiful, 
              functional websites that deliver results. I'm passionate about clean code and modern design principles.
            </p>
            <Link to="/about">
              <button className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-500 transition">
                Learn More →
              </button>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[FaCode, FaPalette, FaLightbulb].map((Icon, index) => (
              <div key={index} className="p-6 bg-purple-700 rounded-lg shadow-sm">
                <Icon className="w-8 h-8 text-white mb-4" />
                <h3 className="font-semibold mb-2 text-white">Quality {index + 1}</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 md:px-20 bg-purple-600">
        <h2 className="text-3xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Web Development', 'UI/UX Design', 'Consultation'].map((service, index) => (
            <div key={index} className="p-8 bg-purple-500 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-200">Providing professional solutions with modern technologies</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((project) => (
            <div key={project} className="bg-purple-700 rounded-lg overflow-hidden shadow-lg">
              <img src={`/project${project}.jpg`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                <p className="text-gray-300 mb-4">A brief description of the project and technologies used</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-gray-300">
                    <FaExternalLinkAlt /> Demo
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-gray-300">
                    <FaGithub /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 text-white font-semibold hover:text-gray-300">See All Projects →</button>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-8 md:px-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">Stay updated with the latest news and offers.</p>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-3 rounded-l-lg border-2 border-gray-700 focus:outline-none focus:border-gray-500 transition duration-300 ease-in-out"
            required
            aria-label="Email address"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300">We respect your privacy. Unsubscribe at any time.</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 md:px-20 text-center bg-purple-900">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="mb-8">Have a project in mind? Let's create something amazing.</p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500 transition">
          Get in Touch
        </button>
      </section>
    </div>
  )
}

export default Home
