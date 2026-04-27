import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Behind the Code
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="text-white">About</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Premium Glass Card - Centered */}
        <motion.div
          className="max-w-4xl mx-auto relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-16 shadow-2xl overflow-hidden">
            {/* Corner Decorative Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent translate-x-1/2 translate-y-1/2 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.h3
                className="text-2xl md:text-4xl font-bold mb-8 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Crafting Digital Excellence
              </motion.h3>

              <motion.div 
                className="space-y-6 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  I'm a passionate developer dedicated to building innovative solutions that bridge the gap between imagination and reality. With a focus on performance and aesthetics, I create web experiences that leave a lasting impression.
                </p>
                
                <p className="text-gray-400 text-base md:text-lg">
                  My journey is driven by an insatiable curiosity and a commitment to mastering modern technologies. From responsive UI designs to complex backend logic, I strive for perfection in every line of code.
                </p>
              </motion.div>

              {/* Enhanced Stats Row */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 pt-12 border-t border-white/5 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { number: '2+', label: 'Years Experience' },
                  { number: '15+', label: 'Projects Completed' },
                  { number: '8+', label: 'Tech Stack' },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                      {stat.number}
                    </span>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// export default About;