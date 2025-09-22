'use client';

import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect if an element is on screen for scroll animations
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// Enhanced SVG Icons Collection
const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const Sparkles = ({ className }) => (
  // kept as-is but not used in the fixed projects array to avoid previous odd path behavior
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 2l1.5 4.5L13 8l-4.5 1.5L7 14 5.5 10.5 1 9l4.5-1.5L5.5 3 7 2zM19 12l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3z" />
  </svg>
);
const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);
const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// New Icon Set
const Home = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
// Fixed Briefcase icon (replaced broken path with a clean Heroicons version)
const Briefcase = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1M3 7h18M5 21h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
  </svg>
);
const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const Download = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);
const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const Heart = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);
const Trophy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const Rocket = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v5l3-3h4l-7-7-7 7h4l3 3z" />
  </svg>
);
const Coffee = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2h6c1.66 0 3 1.34 3 3v11c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V5c0-1.66 1.34-3 3-3zm11 7h3a2 2 0 012 2v2a2 2 0 01-2 2h-3" />
  </svg>
);

// Enhanced Interactive Floating Particles Component
const FloatingParticles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current; 
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const mouse = { x: null, y: null, radius: 200 };
    const handleMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', handleMouseMove);
    
    let particles;
    const colors = ['rgba(147, 197, 253, 0.6)', 'rgba(196, 181, 253, 0.6)', 'rgba(251, 146, 180, 0.6)', 'rgba(74, 222, 128, 0.6)'];
    
    const init = () => {
      canvas.width = window.innerWidth; 
      canvas.height = window.innerHeight;
      particles = [];
      let num = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < num; i++) {
        particles.push({ 
          x: Math.random() * canvas.width, 
          y: Math.random() * canvas.height, 
          vx: (Math.random() - 0.5) * 0.8, 
          vy: (Math.random() - 0.5) * 0.8, 
          size: Math.random() * 3 + 1, 
          opacity: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        let dx = mouse.x - p.x, dy = mouse.y - p.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius && mouse.x !== null) {
          let force = (mouse.radius - dist) / mouse.radius;
          let angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.5;
          p.vy -= Math.sin(angle) * force * 0.5;
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        p.vx *= 0.99; p.vy *= 0.99;
        
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init(); animate();
    const handleResize = () => init();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// Enhanced Typewriter Effect Component
const TypewriterText = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  
  useEffect(() => {
    const delayTimer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, startTyping]);
  
  return (
    <span>
      {displayText}
      {displayText.length < text.length && startTyping && (
        <span className="animate-pulse text-cyan-400">|</span>
      )}
    </span>
  );
};

// Enhanced Dynamic 3D Card Component
const Dynamic3DCard = ({ children, className = '', glowEffect = false }) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (rect.width / 2 - x) / 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${glowEffect ? 30 : 20}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <div 
      ref={cardRef} 
      className={`transition-all duration-300 ease-out ${className} ${glowEffect ? 'hover:shadow-2xl hover:shadow-cyan-500/20' : ''}`} 
      style={{ transform }} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Enhanced Magnetic UI Element Component
const Magnetic = ({ children, intensity = 0.2 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * intensity;
        const y = (clientY - (top + height / 2)) * intensity;
        setPosition({ x, y });
    };
    const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
    const { x, y } = position;
    return (
      <div 
        ref={ref} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        style={{ 
          transform: `translate(${x}px, ${y}px)`, 
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)' 
        }}
      >
        {children}
      </div>
    );
};

// Animated Button Component
const AnimatedButton = ({ children, onClick, variant = 'primary', icon: Icon, className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 bg-transparent',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 bg-transparent'
  };

  return (
    <Magnetic intensity={0.15}>
      <Dynamic3DCard glowEffect={variant !== 'ghost'}>
        <button
          onClick={onClick}
          className={`
            group relative overflow-hidden px-8 py-4 rounded-xl font-semibold
            transition-all duration-300 transform hover:scale-105 
            flex items-center gap-3 ${variants[variant]} ${className}
          `}
          {...props}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          {Icon && <Icon className="w-5 h-5 group-hover:animate-pulse" />}
          <span className="relative z-10">{children}</span>
        </button>
      </Dynamic3DCard>
    </Magnetic>
  );
};

// ProjectCard component for correct hook usage
const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
      <Dynamic3DCard className="group relative h-full" glowEffect={true}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 self-start transform group-hover:rotate-12 transition-transform duration-300`}>
            {project.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <AnimatedButton variant="outline" icon={ExternalLink} className="flex-1 py-2 px-4 text-sm">
              Live
            </AnimatedButton>
            <AnimatedButton variant="ghost" icon={Code} className="flex-1 py-2 px-4 text-sm">
              Source
            </AnimatedButton>
          </div>
        </div>
      </Dynamic3DCard>
    </div>
  );
};

// Main Portfolio Component
const ModernPortfolio = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [skillProgress, setSkillProgress] = useState({});
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const lastScrollYRef = useRef(lastScrollY);

  const [skillsRef, skillsAreVisible] = useOnScreen({ threshold: 0.2 });
  
  useEffect(() => { setIsMounted(true); }, []);
  
  useEffect(() => {
      if (skillsAreVisible) {
          setTimeout(() => {
              setSkillProgress({ React: 95, 'Next.js': 90, 'Node.js': 85, Python: 88, MongoDB: 82, 'AI/ML': 78 });
          }, 300);
      }
  }, [skillsAreVisible]);

  useEffect(() => { lastScrollYRef.current = lastScrollY; }, [lastScrollY]);

  useEffect(() => {
    if (!isMounted) return;
    const loadingTimer = setTimeout(() => setIsLoading(false), 2000);

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let rafId;
    const animateDot = () => {
      const cur = currentPosRef.current;
      const target = mousePosRef.current;
      const ease = 0.12;
      cur.x += (target.x - cur.x) * ease;
      cur.y += (target.y - cur.y) * ease;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cur.x - 8}px, ${cur.y - 8}px, 0)`;
      }
      rafId = requestAnimationFrame(animateDot);
    };
    rafId = requestAnimationFrame(animateDot);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prev = lastScrollYRef.current;
      setNavVisible(currentScrollY <= 100 || currentScrollY < prev);
      lastScrollYRef.current = currentScrollY;
      setLastScrollY(currentScrollY);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage(totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let newActiveSection = 'home';
      for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element && element.offsetTop <= scrollPosition) { 
            newActiveSection = sectionId; 
          }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) { 
        newActiveSection = 'contact'; 
      }
      setActiveSection(newActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMounted]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home }, 
    { id: 'skills', label: 'Skills', icon: Trophy }, 
    { id: 'projects', label: 'Projects', icon: Briefcase }, 
    { id: 'contact', label: 'Contact', icon: Phone }
  ];
  
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' }, 
    { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500', icon: '🟢' }, 
    { name: 'Python', level: 88, color: 'from-yellow-400 to-orange-500', icon: '🐍' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-800', icon: '🍃' }, 
    { name: 'AI/ML', level: 78, color: 'from-purple-500 to-pink-500', icon: '🤖' }
  ];
  
  const projects = [
    { 
      title: "AI-Powered E-commerce", 
      description: "Next-generation e-commerce platform with AI recommendations, real-time chat, and seamless payment integration.", 
      tech: ["React", "Node.js", "AI/ML", "Stripe"], 
      gradient: "from-purple-600 to-blue-600", 
      icon: <Globe className="w-6 h-6 text-white" />,
      status: "Live",
      featured: true
    },
    { 
      title: "Intelligent Chatbot Assistant", 
      description: "Advanced conversational AI with natural language processing and contextual understanding.", 
      tech: ["Python", "TensorFlow", "NLP", "API"], 
      gradient: "from-cyan-500 to-purple-600", 
      icon: <Zap className="w-6 h-6 text-white" />,
      status: "Beta",
      featured: true
    },
    { 
      title: "Real-time Analytics Dashboard", 
      description: "Interactive dashboard with live data visualization and predictive analytics capabilities.", 
      tech: ["React", "D3.js", "WebSocket", "MongoDB"], 
      gradient: "from-orange-500 to-pink-600", 
      // swapped Sparkles -> Star to avoid odd path scaling
      icon: <Star className="w-6 h-6 text-white" />,
      status: "Development",
      featured: false
    }
  ];

  const handleDownloadCV = () => {
    // Simulate CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Bharath_S_CV.pdf';
    link.click();
  };

  const handleHireMe = () => {
    scrollToSection('contact');
  };

  if (isLoading || !isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-cyan-400/30 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin animate-reverse"></div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            <TypewriterText text="Loading Portfolio..." speed={120} />
          </div>
          <div className="text-gray-400">
            <TypewriterText text="Preparing something amazing..." speed={80} delay={1000} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-gray-200 relative overflow-x-hidden">
      {isMounted && (
        <>
          <div className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300" style={{ width: `${scrollPercentage}%` }} />
          <FloatingParticles />
          {/* improved dot: positioned with transform via requestAnimationFrame for smooth movement */}
          <div 
            ref={dotRef}
            className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100"
            style={{ left: 0, top: 0, transform: 'translate3d(-100px, -100px, 0)', boxShadow: '0 0 20px rgba(147, 197, 253, 0.8)' }}
          />
        </>
      )}
      
      <nav className={`fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/30 transition-all duration-500 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
             <Magnetic>
               <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Bharath S</span>
                    <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">Full Stack Developer</div>
                  </div>
               </div>
             </Magnetic>
             
             <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/30">
                {navItems.map(item => (
                  <Magnetic key={item.id} intensity={0.1}>
                    <button 
                      onClick={() => scrollToSection(item.id)} 
                      className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden lg:inline">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                      )}
                    </button>
                  </Magnetic>
                ))}
             </div>
             
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)} 
               className="md:hidden p-3 text-gray-300 hover:text-cyan-400 transition-colors bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/30"
             >
               <span className="sr-only">Open menu</span>
               {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
          
          <div className={`transition-all duration-500 ease-in-out md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96 mt-4 pt-4 border-t border-gray-700/30' : 'max-h-0'}`}>
             <div className="flex flex-col space-y-2 bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm">
                {navItems.map((item, index) => (
                  <button 
                    key={item.id} 
                    onClick={() => scrollToSection(item.id)} 
                    className={`flex items-center gap-3 text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`} 
                    style={{
                      transitionDelay: `${index * 50}ms`, 
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)', 
                      opacity: isMenuOpen ? 1 : 0
                    }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </nav>
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 pt-24">
        <section id="home" className="min-h-screen flex flex-col justify-center text-center mb-20 relative">
          {/* content omitted for brevity in this preview; unchanged */}
          <div className="transition-transform duration-500" style={{ transform: `translateY(${lastScrollY * 0.1}px)` }}>
            <Magnetic intensity={0.3}>
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="relative bg-gray-800/80 border-2 border-gray-700/50 rounded-full flex items-center justify-center h-full w-full backdrop-blur-sm">
                  <Code className="w-20 h-20 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </Magnetic>
          </div>
          
          <div className="transition-transform duration-500 mb-8" style={{ transform: `translateY(${lastScrollY * 0.2}px)` }}>
            <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-gradient leading-tight">
              <TypewriterText text="Bharath S" speed={200} />
            </h1>
            <div className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
              <TypewriterText text="Full Stack Developer & AI Enthusiast" speed={100} delay={1500} />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium animate-pulse">
                <Star className="w-4 h-4 inline mr-2" />
                5+ Years Experience
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium animate-pulse delay-100">
                <Trophy className="w-4 h-4 inline mr-2" />
                50+ Projects Completed
              </div>
              <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium animate-pulse delay-200">
                <Heart className="w-4 h-4 inline mr-2" />
                100% Client Satisfaction
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 transition-transform duration-500">
            Crafting the future of web applications with cutting-edge technologies and innovative solutions. 
            Passionate about creating seamless user experiences and scalable digital solutions that make a difference.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center transition-transform duration-500" style={{ transform: `translateY(${lastScrollY * 0.1}px)` }}>
            <AnimatedButton 
              variant="primary" 
              icon={Rocket} 
              onClick={handleHireMe}
              className="text-lg px-10 py-5 shadow-2xl hover:shadow-cyan-500/30"
            >
              Hire Me Now
            </AnimatedButton>
            
            <AnimatedButton 
              variant="secondary" 
              icon={Download} 
              onClick={handleDownloadCV}
              className="text-lg px-10 py-5 shadow-2xl hover:shadow-purple-500/30"
            >
              Download CV
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline" 
              icon={Coffee} 
              onClick={() => scrollToSection('contact')}
              className="text-lg px-10 py-5"
            >
              Let&apos;s Talk
            </AnimatedButton>
          </div>
        </section>
        
        <section id="skills" ref={skillsRef} className="py-20 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build exceptional digital experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Magnetic key={skill.name} intensity={0.1}>
                <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-bold text-white text-lg">{skill.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-cyan-400 animate-pulse">
                        {skillProgress[skill.name] || 0}%
                      </span>
                      <div className="text-xs text-gray-400">Proficiency</div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-700/50 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out group-hover:scale-105 relative overflow-hidden`}
                      style={{ width: `${skillProgress[skill.name] || 0}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            ))}
          </div>
        </section>
        
        <section id="projects" className="py-20 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <ProjectCard project={project} index={index} key={index} />)}
          </div>
        </section>
        
        <section id="contact" className="text-center py-20">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to turn your ideas into reality? Let&apos;s collaborate and build something extraordinary together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
            <Magnetic><Dynamic3DCard glowEffect={true}><a href="https://www.linkedin.com/in/bharath-s" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-blue-500/30"><Linkedin className="w-6 h-6 group-hover:animate-bounce"/> <div><div className="font-semibold">LinkedIn</div><div className="text-sm opacity-80">Professional Network</div></div></a></Dynamic3DCard></Magnetic>
            <Magnetic><Dynamic3DCard glowEffect={true}><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-gray-500/30"><Github className="w-6 h-6 group-hover:animate-spin"/> <div><div className="font-semibold">GitHub</div><div className="text-sm opacity-80">Code Repository</div></div></a></Dynamic3DCard></Magnetic>
            <Magnetic><Dynamic3DCard glowEffect={true}><a href="mailto:your.email@example.com" className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/30"><Mail className="w-6 h-6 group-hover:animate-pulse"/> <div><div className="font-semibold">Email</div><div className="text-sm opacity-80">Direct Contact</div></div></a></Dynamic3DCard></Magnetic>
          </div>
          
          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Magnetic>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+91 XXX XXX XXXX</p>
              </div>
            </Magnetic>
            <Magnetic>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Bengaluru, India</p>
              </div>
            </Magnetic>
            <Magnetic>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-pink-400/30 transition-all duration-300">
                <Coffee className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Availability</h3>
                <p className="text-gray-400">Open for Projects</p>
              </div>
            </Magnetic>
          </div>
        </section>
      </main>
      
      <style jsx>{`
        .animate-gradient { 
          background-size: 300% 300%; 
          animation: gradient 6s ease infinite; 
        }
        .animate-reverse {
          animation-direction: reverse;
        }
        @keyframes gradient { 
          0%, 100% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolio;
