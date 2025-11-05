import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useInView } from '../hooks/useInView';

import config from '../../portfolio.config';


export const Services = () => {
  const { ref, isInView } = useInView();

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Code2;
    return Icon;
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            {config.services.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            {config.services.titre}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            {config.services.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {config.services.data.map((service, index) => {
            const Icon = getIcon(service.icon_name);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-8 group"
              >
                <motion.div
                  className="w-16 h-16 glass rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  <Icon size={32} className="text-dark-300 group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>

                <p className="text-dark-400 leading-relaxed group-hover:text-dark-300 transition-colors">
                  {service.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-0.5 bg-gradient-to-r from-dark-100 to-dark-400 mt-6"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
