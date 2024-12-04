import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaTelegram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeField, setActiveField] = useState(null)

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ type: '', message: '' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const errors = []
    if (!formData.name.trim()) errors.push('Name is required')
    if (!formData.email.trim()) errors.push('Email is required')
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.push('Invalid email format')
    if (!formData.subject.trim()) errors.push('Subject is required')
    if (!formData.message.trim()) errors.push('Message is required')
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    
    if (errors.length > 0) {
      setFormStatus({
        type: 'error',
        message: errors.join('. ')
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setFormStatus({
        type: 'success',
        message: '✨ Message sent successfully! I will get back to you soon.'
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/briton-smith', label: 'GitHub', color: 'hover:text-[#6e5494]' },
    { icon: FaLinkedin, link: 'https://linkedin.com/in/briton-smith', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: FaTwitter, link: 'https://twitter.com/briton_smith', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: FaDiscord, link: 'https://discord.gg/briton-smith', label: 'Discord', color: 'hover:text-[#7289DA]' },
    { icon: FaTelegram, link: 'https://t.me/briton_smith', label: 'Telegram', color: 'hover:text-[#0088cc]' },
    { icon: FaWhatsapp, link: 'https://wa.me/254700000000', label: 'WhatsApp', color: 'hover:text-[#25D366]' }
  ]

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1px,transparent_1px),linear-gradient(to_bottom,#0ff1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[5%] md:left-20 w-[80vw] md:w-[40rem] h-[40rem] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px]"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-24 right-[5%] md:right-20 w-[70vw] md:w-[35rem] h-[35rem] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px]"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 [text-shadow:0_0_30px_rgba(6,182,212,0.5)]"
          >
            Let's Connect
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-500 [box-shadow:0_0_40px_rgba(6,182,212,0.15)] group"
            >
              <AnimatePresence>
                {formStatus.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mb-6 p-4 rounded-xl backdrop-blur-md ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/10 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/10 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className={`relative ${activeField === 'name' ? 'scale-[1.02]' : ''}`}
                >
                  <label htmlFor="name" className="block text-cyan-300 mb-3 font-light tracking-wider text-base sm:text-lg">IDENTITY</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800/30 border-2 border-cyan-500/20 rounded-xl px-4 py-3 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-cyan-700/50 text-base sm:text-lg"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className={`relative ${activeField === 'email' ? 'scale-[1.02]' : ''}`}
                >
                  <label htmlFor="email" className="block text-cyan-300 mb-3 font-light tracking-wider text-base sm:text-lg">COMM-LINK</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800/30 border-2 border-cyan-500/20 rounded-xl px-4 py-3 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-cyan-700/50 text-base sm:text-lg"
                    placeholder="your.email@domain.com"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className={`relative ${activeField === 'subject' ? 'scale-[1.02]' : ''}`}
                >
                  <label htmlFor="subject" className="block text-cyan-300 mb-3 font-light tracking-wider text-base sm:text-lg">DIRECTIVE</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-gray-800/30 border-2 border-cyan-500/20 rounded-xl px-4 py-3 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-cyan-700/50 text-base sm:text-lg"
                    placeholder="Message subject"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className={`relative ${activeField === 'message' ? 'scale-[1.02]' : ''}`}
                >
                  <label htmlFor="message" className="block text-cyan-300 mb-3 font-light tracking-wider text-base sm:text-lg">TRANSMISSION</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    rows="5"
                    className="w-full bg-gray-800/30 border-2 border-cyan-500/20 rounded-xl px-4 py-3 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-cyan-700/50 text-base sm:text-lg resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-medium tracking-wider hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-3 mt-8"
                >
                  <FaPaperPlane className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-500 [box-shadow:0_0_40px_rgba(6,182,212,0.15)]"
              >
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="p-3 sm:p-4 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-all duration-300">
                      <FaEnvelope className="text-2xl sm:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <a href="mailto:briton@nexus.io" className="text-cyan-100 hover:text-cyan-300 transition-colors duration-300 text-base sm:text-lg">
                      briton@nexus.io
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="p-3 sm:p-4 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-all duration-300">
                      <FaPhone className="text-2xl sm:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <a href="tel:+254700000000" className="text-cyan-100 hover:text-cyan-300 transition-colors duration-300 text-base sm:text-lg">
                      +254 700 000 000
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 sm:p-4 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-all duration-300">
                      <FaMapMarkerAlt className="text-2xl sm:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <span className="text-cyan-100 text-base sm:text-lg">Upperhill District, Nairobi, Kenya</span>
                  </motion.div>
                </div>

                <div className="mt-8 sm:mt-10">
                  <h3 className="text-cyan-300 mb-5 font-light tracking-wider text-lg sm:text-xl">SOCIAL NETWORKS</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 sm:space-x-3 text-cyan-400 ${social.color} p-3 sm:p-4 rounded-xl bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 group`}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="text-xl sm:text-2xl" />
                        <span className="text-xs sm:text-sm hidden sm:inline-block">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-3 sm:p-4 border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-500 h-[250px] sm:h-[300px] [box-shadow:0_0_40px_rgba(6,182,212,0.15)]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.70730744863284!3d-1.3028617999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1647043435129!5m2!1sen!2s"
                  className="w-full h-full rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
