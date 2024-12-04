import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-purple-900/90 text-cyan-100 py-4 px-4 md:px-8 lg:px-12 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-100 hover:text-cyan-400 transition-colors duration-300"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12">
          {['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative px-3 py-2 hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 bg-gradient-to-b from-blue-900/95 to-purple-900/95 backdrop-blur-lg rounded-lg p-4 transform transition-transform duration-300 ease-in-out">
          {['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-cyan-400/10 rounded-lg hover:text-cyan-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
