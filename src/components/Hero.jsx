import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import profileImg from '../assets/shared.jpg';

// Carousel data
const carouselItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
    title: 'Web Development',
    description: 'Building modern, responsive websites with cutting-edge technologies.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    title: 'Problem Solving',
    description: 'Finding elegant solutions to complex challenges.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
    title: 'Security',
    description: 'Implementing robust security measures in applications.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState (true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrev = () => {
    goToSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    goToSlide((currentSlide + 1) % carouselItems.length);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Hero Section - Left Image, Right Text */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* LEFT: Square Image Frame */}
            <motion.div
              className="relative flex-shrink-0 order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-purple-500 to-accent animate-spin-slow opacity-50 blur-xl"></div>
              
              {/* Middle ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/30 to-purple-500/30 blur-md"></div>
              
              {/* Square frame */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto group cursor-pointer">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-secondary-bg flex items-center justify-center relative">
                    <img 
                      src={profileImg} 
                      alt="Karan Kshirsagar" 
                      className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -right-6 top-1/4 w-5 h-5 rounded-full bg-accent"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -left-6 bottom-1/4 w-4 h-4 rounded-full bg-purple-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div
              className="text-center lg:text-left max-w-xl order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Bold Headline */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                  Hi, I'm{' '}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-300 to-purple-400 block">
                  Karan Kshirsagar
                </span>
              </motion.h1>

              {/* Animated Subtitle */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I'm a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400 font-bold">
                  <TypeAnimation
                    sequence={[
                      'Developer',
                      2000,
                      'Designer',
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="inline-block"
                  />
                </span>
              </motion.div>

              {/* Short Description - 2-3 lines */}
              <motion.p
                className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Passionate student developer ready to turn ideas into reality.
                Exploring the world of technology with creativity and determination.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {/* Primary Button */}
                <motion.button
                  className="relative px-10 py-4 bg-gradient-to-r from-accent to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] transition-all duration-300 group overflow-hidden flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  className="relative px-10 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Learn More</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative z-10 py-16 bg-gradient-to-t from-secondary-bg/50 to-transparent">
        <div className="container">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What I <span className="text-accent">Do</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">Explore my areas of expertise</p>
          </motion.div>

          {/* Carousel Container */}
          <div 
            className="relative"
            ref={carouselRef}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Cards Container */}
            <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden py-8">
              <AnimatePresence mode="popLayout">
                {carouselItems.map((item, index) => {
                  const isActive = index === currentSlide;
                  const isPrev = index === (currentSlide - 1 + carouselItems.length) % carouselItems.length;
                  const isNext = index === (currentSlide + 1) % carouselItems.length;
                  
                  return (
                    <motion.div
                      key={item.id}
                      className={`flex-shrink-0 cursor-pointer ${
                        isActive ? 'z-20' : isPrev || isNext ? 'z-10' : 'z-0'
                      }`}
                      initial={{ opacity: 0, scale: 0.8, x: 100 }}
                      animate={{ 
                        opacity: isActive ? 1 : isPrev || isNext ? 0.6 : 0.3,
                        scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                        x: 0,
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: -100 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      onClick={() => goToSlide(index)}
                      style={{
                        width: isActive ? '320px' : isPrev || isNext ? '260px' : '200px',
                      }}
                    >
                      {/* Card */}
                      <div className={`
                        relative overflow-hidden rounded-2xl bg-secondary-bg border border-white/10
                        transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                        ${isActive ? 'shadow-[0_0_40px_rgba(0,212,255,0.15)]' : ''}
                      `}>
                        {/* Image */}
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 md:p-5">
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white z-20 overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.1, x: -50 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white z-20 overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.1, x: 50 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-accent w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-accent/70 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;