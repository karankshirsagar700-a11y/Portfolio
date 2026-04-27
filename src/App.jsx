import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-primary-bg flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-4xl font-bold text-accent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

          {/* Footer */}
          <footer className="py-8 bg-secondary-bg text-center">
            <div className="container">
              <p className="text-text-secondary">
                © 2024 Alex Johnson. Built with React & Framer Motion.
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
