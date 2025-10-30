import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { supabase, type Experience as ExperienceType } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

export const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  // const [loading, setLoading] = useState(true);
  const { ref, isInView } = useInView();

  useEffect(() => {
    const fetchExperience = async () => {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('order_index', { ascending: true });

      if (!error && data) {
        setExperiences(data);
      }
      // setLoading(false);
    };

    fetchExperience();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
  };

  // if (loading) {
  //   return (
  //     <section id="experience" className="relative py-32">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center text-dark-400">Loading experience...</div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
            Career Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            My professional journey building innovative solutions
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-dark-800" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full -ml-2 shadow-glow z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  /> */}

                  <div className="flex-1 ml-16 md:ml-0">
                    <motion.div
                      className="glass glass-hover rounded-2xl p-6 md:p-8"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-dark-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                          <div className="flex items-center gap-2 text-dark-400 text-sm">
                            <Calendar size={16} />
                            <span>
                              {formatDate(exp.start_date)} -{' '}
                              {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-dark-400 text-sm">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-dark-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-dark-800 text-dark-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
