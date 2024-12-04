import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-center text-indigo-100 body-font bg-gradient-to-r from-indigo-900 to-purple-900 py-8 sm:py-12">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-wrap -mb-8 sm:-mb-12">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 sm:px-6 mb-8">
            <h2 className="font-semibold text-indigo-50 tracking-widest text-sm mb-4 uppercase">Social</h2>
            <nav className="flex justify-center sm:justify-start gap-4 sm:gap-6 mb-6 sm:mb-10">
              <a 
                className="text-indigo-200 hover:text-indigo-50 transition-all duration-300 transform hover:scale-110" 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </a>
              <a 
                className="text-indigo-200 hover:text-indigo-50 transition-all duration-300 transform hover:scale-110" 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
              <a 
                className="text-indigo-200 hover:text-indigo-50 transition-all duration-300 transform hover:scale-110" 
                href="https://twitter.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl sm:text-2xl" />
              </a>
              <a 
                className="text-indigo-200 hover:text-indigo-50 transition-all duration-300 transform hover:scale-110" 
                href="mailto:youremail@example.com" 
                aria-label="Email"
              >
                <FaEnvelope className="text-xl sm:text-2xl" />
              </a>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 sm:px-6 mb-8">
            <h2 className="font-semibold text-indigo-50 tracking-widest text-sm mb-4 uppercase">Quick Links</h2>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-10">
              <a href="/" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">Home</a>
              <a href="/about" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">About</a>
              <a href="/projects" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">Projects</a>
              <a href="/skills" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">Skills</a>
              <a href="/blog" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">Blog</a>
              <a href="/contact" className="text-indigo-200 hover:text-indigo-50 transition-colors duration-300 text-sm sm:text-base">Contact</a>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 sm:px-6 mb-8">
            <h2 className="font-semibold text-indigo-50 tracking-widest text-sm mb-4 uppercase">Contact</h2>
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
              <p className="text-indigo-200 text-sm sm:text-base">Email: youremail@example.com</p>
              <p className="text-indigo-200 text-sm sm:text-base">Location: Your City, Country</p>
            </div>
          </div>
        </div>
        <div className="border-t border-indigo-800 pt-6 sm:pt-8 mt-4 sm:mt-8">
          <p className="text-indigo-200 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
