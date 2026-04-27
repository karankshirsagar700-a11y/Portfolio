import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background and height change
      setIsScrolled(window.scrollY > 20);
      
      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveItem(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-accent via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Premium Logo */}
        <motion.a 
          href="#home"
          className="flex items-center gap-3 group relative z-50"
          animate={{ scale: isScrolled ? 0.95 : 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-purple-600 p-[1.5px] overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full bg-[#0a0a0a] rounded-[9px] z-10 transition-colors duration-300">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 text-base">
                KK
              </span>
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
            Karan<span className="text-accent">.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="flex items-center space-x-1 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-[2px] left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-0 shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            className="ml-4 relative px-6 py-2 rounded-full text-white text-sm font-semibold overflow-hidden group border border-accent/30 shadow-[0_0_20px_rgba(0,212,255,0.1)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300" />
            <span className="relative z-10">Let's Talk</span>
          </motion.button>
        </div>
        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-5 h-4 flex flex-col justify-between relative z-10">
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full origin-left"
              animate={isOpen ? { rotate: 45, y: -1, x: 2 } : { rotate: 0, y: 0, x: 0 }}
            />
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full"
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            />
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full origin-left"
              animate={isOpen ? { rotate: -45, y: 1, x: 2 } : { rotate: 0, y: 0, x: 0 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col space-y-8 text-center px-8 w-full">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-3xl font-semibold ${activeItem === item.id ? 'text-accent' : 'text-gray-400'}`}
                  onClick={() => {
                    setActiveItem(item.id);
                    setIsOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <button 
                className="mt-8 py-4 bg-accent rounded-2xl text-black font-bold text-lg"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;