'use client';

import React, { useState, useEffect } from 'react';
// SVG Icons as React components
const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 4.5L11 9l-4.5 1.5L5 15l-1.5-4.5L-1 9l4.5-1.5L5 3zM19 12l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const ModernPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 88, color: 'from-yellow-400 to-orange-500' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-800' },
    { name: 'AI/ML', level: 78, color: 'from-purple-500 to-pink-500' }
  ];

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Next-generation e-commerce with AI recommendations, real-time chat, and seamless payment integration.",
      tech: ["React", "Node.js", "AI/ML", "Stripe"],
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Intelligent Chatbot Assistant",
      description: "Advanced conversational AI with natural language processing and contextual understanding.",
      tech: ["Python", "TensorFlow", "NLP", "API"],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard with live data visualization and predictive analytics capabilities.",
      tech: ["React", "D3.js", "WebSocket", "MongoDB"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Mouse follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Bharath S
          </h1>
          <p className="text-2xl text-gray-300 mb-6">Full Stack Developer & AI Enthusiast</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting the future of web applications with cutting-edge technologies and innovative solutions. 
            Let's build something extraordinary together.
          </p>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/bharath-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPortfolio;