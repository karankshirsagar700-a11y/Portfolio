import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Git', level: 85 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Creativity',
    'Time Management',
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-bg">
      <div className="container">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Skills
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400">
            & Expertise
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-8 text-gradient">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.5)" }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-lg text-gray-200">{skill.name}</span>
                    <span className="text-gradient font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-glass-border rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-8 text-gradient">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;