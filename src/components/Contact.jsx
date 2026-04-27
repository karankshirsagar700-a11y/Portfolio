import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="contact-section py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Let's</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Talk
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            Have a project in mind? Reach out and let's create something extraordinary together.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-12 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="info-card">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-xl text-white font-medium">karan.ksh@example.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="info-card">
              <div className="icon-wrapper">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Call Me</p>
                <p className="text-xl text-white font-medium">+91 8177879370</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="info-card">
              <div className="icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Visit Me</p>
                <p className="text-xl text-white font-medium">Parbhani, Maharashtra</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="social-links justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: '#', label: 'GitHub' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="form-container">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 rounded-full mb-8">
                      <CheckCircle className="text-green-500" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400 text-lg">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-field"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name" className="input-label">Full Name</label>
                    </div>

                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-field"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email" className="input-label">Email Address</label>
                    </div>

                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        className="input-field resize-none"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message" className="input-label">Your Message</label>
                    </div>

                    <button type="submit" className="btn-submit flex items-center justify-center gap-2">
                      <Send size={20} />
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

