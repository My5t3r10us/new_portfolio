import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const techCategories = [
  {
    title: 'Frontend',
    techs: [
      { name: 'React', proficiency: 95 },
      { name: 'Vue.js', proficiency: 90 },
      { name: 'Next.js', proficiency: 92 },
      { name: 'TypeScript', proficiency: 88 },
      { name: 'Tailwind CSS', proficiency: 95 },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { name: 'Node.js', proficiency: 93 },
      { name: 'Express', proficiency: 90 },
      { name: 'Nuxt', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 92 },
      { name: 'GraphQL', proficiency: 80 },
    ],
  },
  {
    title: 'Database',
    techs: [
      { name: 'PostgreSQL', proficiency: 90 },
      { name: 'MongoDB', proficiency: 85 },
      { name: 'Supabase', proficiency: 88 },
      { name: 'Redis', proficiency: 80 },
      { name: 'Firebase', proficiency: 82 },
    ],
  },
  {
    title: 'Tools & DevOps',
    techs: [
      { name: 'Git', proficiency: 95 },
      { name: 'Docker', proficiency: 82 },
      { name: 'AWS', proficiency: 78 },
      { name: 'Vercel', proficiency: 90 },
      { name: 'CI/CD', proficiency: 85 },
    ],
  },
];

export const TechStack = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-dark-400 text-sm uppercase tracking-wider font-medium"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of modern technologies I use to build
            exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * categoryIndex }}
              className="glass glass-hover rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.techs.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-dark-300 font-medium">
                        {tech.name}
                      </span>
                      <span className="text-dark-500 text-sm">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${tech.proficiency}%` } : {}
                        }
                        transition={{
                          delay: 0.5 + categoryIndex * 0.1 + techIndex * 0.1,
                          duration: 0.8,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-dark-100 to-dark-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 glass rounded-2xl px-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-dark-400 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="w-px h-16 bg-dark-800" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-dark-400 text-sm mt-1">Years Experience</div>
            </div>
            <div className="w-px h-16 bg-dark-800" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">30+</div>
              <div className="text-dark-400 text-sm mt-1">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
