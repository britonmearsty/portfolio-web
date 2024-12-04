import React from 'react'
import { FaCode, FaLaptop, FaCoffee, FaBookOpen, FaGraduationCap, FaBriefcase, FaMedal, FaUsers, FaRocket, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Improved glowing orbs with more subtle animations */}
      <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full mix-blend-overlay filter blur-[160px] opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-[35rem] h-[35rem] bg-cyan-600/20 rounded-full mix-blend-overlay filter blur-[160px] opacity-60 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/3 w-[32rem] h-[32rem] bg-indigo-600/20 rounded-full mix-blend-overlay filter blur-[160px] opacity-60 animate-float-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-lg transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Briton Cheruyot"
                    className="rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto object-cover shadow-2xl border-4 border-white/20 hover:border-white/30 transition duration-300 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-60 transition duration-300"></div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-cyan-500/50 ring-offset-4 ring-offset-gray-900/50"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 leading-tight">
                About Me
              </h1>
              
              <div className="bg-gray-900/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                  Hello! I'm <span className="font-medium text-cyan-300">Briton Cheruyot</span>, a passionate software developer with over 5 years of professional experience in building scalable web applications and innovative software solutions. My journey in technology has been driven by an insatiable curiosity and a desire to create meaningful impact through code.
                </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-200">
                  <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-cyan-300">5+</div>
                    <div className="text-sm mt-1">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-cyan-300">50+</div>
                    <div className="text-sm mt-1">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-cyan-300">30+</div>
                    <div className="text-sm mt-1">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-cyan-300">15+</div>
                    <div className="text-sm mt-1">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-2xl hover:bg-gray-800/50 transition-all duration-300 group border border-white/10 hover:border-white/20">
              <FaCode className="text-4xl md:text-5xl text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-semibold text-2xl text-gray-100 mb-4">Technical Journey</h3>
                <p className="text-gray-300">Started coding at age 12, building simple HTML pages. Progressed through various technologies and frameworks, mastering full-stack development.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-2xl hover:bg-gray-800/50 transition-all duration-300 group border border-white/10 hover:border-white/20">
              <FaLaptop className="text-4xl md:text-5xl text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-semibold text-2xl text-gray-100 mb-4">Current Focus</h3>
                <p className="text-gray-300">Specializing in full-stack development with React, Node.js, TypeScript, and cloud platforms.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-2xl hover:bg-gray-800/50 transition-all duration-300 group border border-white/10 hover:border-white/20">
              <FaGraduationCap className="text-4xl md:text-5xl text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-semibold text-2xl text-gray-100 mb-4">Education</h3>
                <p className="text-gray-300">BSc in Computer Science. Multiple certifications in cloud computing and web development.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff08_1px,transparent_1px),linear-gradient(-45deg,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">Let's Create Something Amazing Together</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a 
                  href="/projects" 
                  className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-300 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 text-center transform hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
