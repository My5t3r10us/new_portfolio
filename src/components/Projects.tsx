import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { type Project } from '../lib/types';
import { useInView } from '../hooks/useInView';

const categories = ['all', 'web', 'mobile', 'fullstack'];
const categoryLabels: Record<string, string> = {
   all: 'tout',
   web: 'web',
   mobile: 'mobile',
   fullstack: 'full‑stack',
};

export const Projects = () => {
   const [projects, setProjects] = useState<Project[]>([]);
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const { ref, isInView } = useInView();

   const filteredProjects = projects.filter(
      (project) => selectedCategory === 'all' || project.category === selectedCategory
   );

   useEffect(() => {
      setProjects([
         {
            "id": "a941cc84-5b43-48c8-ad16-484dc33f092a",
            "title": "E-Commerce Platform",
            "description": "A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and an intuitive admin dashboard. Features include product filtering, shopping cart functionality, order tracking, and customer reviews. Built with a focus on performance and user experience.",
            "short_description": "Modern e-commerce platform with real-time inventory and secure payments",
            "tech_stack": [
               "React",
               "Node.js",
               "Express",
               "PostgreSQL",
               "Stripe",
               "Redis"
            ],
            "image_url": "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
            "live_url": "https://example.com",
            "github_url": "https://github.com",
            "category": "fullstack",
            "featured": true,
            "order_index": 1,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         },
         {
            "id": "0a34209f-0249-4aef-bf94-7ea63cb563db",
            "title": "SaaS Analytics Dashboard",
            "description": "Enterprise-grade analytics platform providing real-time data visualization, custom report generation, and team collaboration features. Implements complex data aggregation, interactive charts, and role-based access control. Optimized for handling large datasets with sub-second query times.",
            "short_description": "Real-time analytics platform with interactive visualizations",
            "tech_stack": [
               "Next.js",
               "TypeScript",
               "PostgreSQL",
               "Tailwind CSS",
               "Chart.js"
            ],
            "image_url": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
            "live_url": "https://example.com",
            "github_url": "https://github.com",
            "category": "web",
            "featured": true,
            "order_index": 2,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         },
         {
            "id": "3c57ce20-798d-4f6f-890c-d4f36f507749",
            "title": "Mobile Fitness Tracker",
            "description": "Cross-platform mobile app for fitness enthusiasts featuring workout tracking, nutrition logging, and progress analytics. Integrates with wearable devices, provides personalized workout recommendations, and includes social features for community engagement.",
            "short_description": "Cross-platform fitness app with workout tracking and analytics",
            "tech_stack": [
               "React Native",
               "Firebase",
               "Redux",
               "Node.js",
               "MongoDB"
            ],
            "image_url": "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",
            "live_url": "https://example.com",
            "github_url": "",
            "category": "mobile",
            "featured": true,
            "order_index": 3,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         },
         {
            "id": "f8fdd159-c25a-458e-b79c-1a0f4fb5a760",
            "title": "Real Estate Marketplace",
            "description": "Property listing platform with advanced search filters, interactive maps, virtual tours, and integrated messaging system. Features include saved searches, price alerts, mortgage calculators, and agent dashboards for property management.",
            "short_description": "Property marketplace with virtual tours and advanced search",
            "tech_stack": [
               "Vue.js",
               "Nuxt",
               "PostgreSQL",
               "AWS S3",
               "Mapbox"
            ],
            "image_url": "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
            "live_url": "https://example.com",
            "github_url": "https://github.com",
            "category": "web",
            "featured": false,
            "order_index": 4,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         },
         {
            "id": "d7fb12bd-1c60-458c-bde7-75f6dd6a7489",
            "title": "Task Management System",
            "description": "Collaborative project management tool with kanban boards, gantt charts, time tracking, and team communication features. Supports multiple project views, custom workflows, automated notifications, and integration with popular development tools.",
            "short_description": "Team collaboration tool with kanban boards and time tracking",
            "tech_stack": [
               "React",
               "TypeScript",
               "Express",
               "MongoDB",
               "Socket.io"
            ],
            "image_url": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
            "live_url": "https://example.com",
            "github_url": "https://github.com",
            "category": "web",
            "featured": false,
            "order_index": 5,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         },
         {
            "id": "81c1759d-07ed-44d7-b32c-a2ec143995a7",
            "title": "Restaurant Ordering App",
            "description": "Full-featured food ordering application with menu management, real-time order tracking, and integrated payment processing. Includes features for restaurant staff to manage orders, update availability, and view analytics on popular items.",
            "short_description": "Food ordering platform with real-time tracking",
            "tech_stack": [
               "React Native",
               "Node.js",
               "PostgreSQL",
               "Stripe",
               "Socket.io"
            ],
            "image_url": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            "live_url": "https://example.com",
            "github_url": "",
            "category": "mobile",
            "featured": false,
            "order_index": 6,
            "created_at": "2025-10-30T13:05:52.968357+00:00"
         }
      ]);
   }, []);

   return (
      <section id="projects" className="relative py-32 overflow-hidden">
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
                  Portfolio
               </motion.span>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
               >
                  Projets mis en avant
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-dark-400 mt-4 max-w-2xl mx-auto"
               >
                  Une sélection de mes réalisations récentes et de solutions créatives
               </motion.p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.5 }}
               className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
               {categories.map((category) => (
                  <motion.button
                     key={category}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-6 py-3 rounded-lg font-medium capitalize transition-all ${selectedCategory === category
                        ? 'bg-white text-dark-950'
                        : 'glass glass-hover text-dark-300'
                        }`}
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {categoryLabels[category] ?? category}
                  </motion.button>
               ))}
            </motion.div>

            <motion.div
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => (
                     <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass glass-hover rounded-2xl overflow-hidden group"
                        onClick={() => setSelectedProject(project)}
                     >
                        <div className="relative h-64 overflow-hidden">
                           <motion.img
                              src={project.image_url}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                              {project.live_url && (
                                 <motion.a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass rounded-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                 >
                                    <ExternalLink size={20} className="text-white" />
                                 </motion.a>
                              )}
                              {project.github_url && (
                                 <motion.a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass rounded-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                 >
                                    <Github size={20} className="text-white" />
                                 </motion.a>
                              )}
                           </div>
                        </div>

                        <div className="p-6">
                           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                              {project.title}
                           </h3>
                           <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                              {project.short_description}
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {project.tech_stack.slice(0, 3).map((tech) => (
                                 <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium bg-dark-800 text-dark-300 rounded-full"
                                 >
                                    {tech}
                                 </span>
                              ))}
                              {project.tech_stack.length > 3 && (
                                 <span className="px-3 py-1 text-xs font-medium bg-dark-800 text-dark-300 rounded-full">
                                    +{project.tech_stack.length - 3}
                                 </span>
                              )}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>

         <AnimatePresence>
            {selectedProject && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-dark-950/90 backdrop-blur-md"
                  onClick={() => setSelectedProject(null)}
               >
                  <motion.div
                     initial={{ scale: 0.9, y: 50 }}
                     animate={{ scale: 1, y: 0 }}
                     exit={{ scale: 0.9, y: 50 }}
                     className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <div className="relative">
                        <img
                           src={selectedProject.image_url}
                           alt={selectedProject.title}
                           className="w-full h-96 object-cover rounded-t-2xl"
                        />
                        <button
                           onClick={() => setSelectedProject(null)}
                           className="absolute top-4 right-4 p-2 glass rounded-lg"
                        >
                           <X size={24} className="text-white" />
                        </button>
                     </div>

                     <div className="p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                           {selectedProject.title}
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-6">
                           {selectedProject.tech_stack.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-4 py-2 text-sm font-medium glass rounded-full text-dark-300"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        <p className="text-dark-300 leading-relaxed mb-6">
                           {selectedProject.description}
                        </p>

                        <div className="flex gap-4">
                           {selectedProject.live_url && (
                              <a
                                 href={selectedProject.live_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 px-6 py-3 bg-white text-dark-950 rounded-lg font-semibold hover:shadow-glow-lg transition-all"
                              >
                                 <ExternalLink size={20} />
                                 Voir en ligne
                              </a>
                           )}
                           {selectedProject.github_url && (
                              <a
                                 href={selectedProject.github_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 px-6 py-3 glass glass-hover rounded-lg font-semibold"
                              >
                                 <Github size={20} />
                                 Voir le code
                              </a>
                           )}
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
};
