import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

import config from '../../portfolio.config';


export const TechStack = () => {
    const { ref, isInView } = useInView();

    return (
        <section id="stack" className="relative py-32 overflow-hidden">
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
                        {config.tech_stack.label}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
                    >
                        {config.tech_stack.titre}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-dark-400 mt-4 max-w-2xl mx-auto"
                    >
                        {config.tech_stack.description}
                    </motion.p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {config.tech_stack.stack.map((category, categoryIndex) => (
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
                            <div className="flex flex-wrap gap-3">
                                {category.techs.map((tech) => (
                                    <div key={tech.name}>
                                        <div className="flex items-center justify-between bg-dark-300 p-2 px-4 rounded-full">
                                            <span className="text-dark-800 font-medium">
                                                {tech.name}
                                            </span>
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
                        {config.tech_stack.stats.map((item, index) => {
                            return (
                                <>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-white">{item.value}</div>
                                        <div className="text-dark-400 text-sm mt-1">{item.label}</div>
                                    </div>
                                    {index < config.tech_stack.stats.length - 1 && (
                                        <div className="w-px h-16 bg-dark-800" />
                                    )}
                                </>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
