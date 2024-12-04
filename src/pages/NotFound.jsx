import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg md:text-xl mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
