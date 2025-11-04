import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { type Experience as ExperienceType } from '../lib/types';
import { useInView } from '../hooks/useInView';

export const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const { ref, isInView } = useInView();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
  };

  useEffect(() => {
    setExperiences([
      {
        "id": "51071866-7b0f-4b84-a3a6-6fd6b17aa4a5",
        "company": "Tech Innovators",
        "role": "Senior Full-Stack Developer",
        "description": "Led development of multiple client projects using React, Node.js, and PostgreSQL. Architected scalable microservices, mentored junior developers, and established best practices for code quality and testing. Delivered projects consistently on time with 99.9% uptime.",
        "location": "San Francisco, CA",
        "start_date": "2021-06-01",
        "end_date": "",
        "technologies": [
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Docker"
        ],
        "order_index": 1,
        "created_at": "2025-10-30T13:05:52.968357+00:00"
      },
      {
        "id": "c58ee89f-8968-4f93-9ebd-62628cfa7fda",
        "company": "Digital Solutions Co",
        "role": "Full-Stack Developer",
        "description": "Built and maintained web applications for enterprise clients. Implemented responsive designs, optimized database queries reducing load times by 60%, and integrated third-party APIs. Collaborated with cross-functional teams in an Agile environment.",
        "location": "Remote",
        "start_date": "2019-03-01",
        "end_date": "2021-05-31",
        "technologies": [
          "Vue.js",
          "Nuxt",
          "Express",
          "MongoDB",
          "Redis",
          "Git"
        ],
        "order_index": 2,
        "created_at": "2025-10-30T13:05:52.968357+00:00"
      },
      {
        "id": "8db802a4-eb1e-4554-9a5d-8e567cc9ca5f",
        "company": "StartUp Labs",
        "role": "Frontend Developer",
        "description": "Developed user interfaces for SaaS products using React and modern CSS frameworks. Focused on creating intuitive, accessible designs while ensuring cross-browser compatibility. Participated in design reviews and user testing sessions.",
        "location": "Austin, TX",
        "start_date": "2017-08-01",
        "end_date": "2019-02-28",
        "technologies": [
          "React",
          "JavaScript",
          "SASS",
          "Webpack",
          "Jest"
        ],
        "order_index": 3,
        "created_at": "2025-10-30T13:05:52.968357+00:00"
      }
    ]);
  }, []);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background" />

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
            Parcours professionnel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Expérience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            Mon parcours professionnel dédié à la création de solutions innovantes
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
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
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
                              {exp.end_date ? formatDate(exp.end_date) : 'Présent'}
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
