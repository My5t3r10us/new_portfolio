import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import type { Service } from '../lib/types';
import { useInView } from '../hooks/useInView';

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const { ref, isInView } = useInView();

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Code2;
    return Icon;
  };

  useEffect(() => {
    setServices([
      {
        id: "3c4b7923-3207-415d-b800-93cd8dd0c676",
        title: "Développement Full-Stack",
        description: "Développement d'applications web complètes avec des frameworks modernes comme React, Vue, Next.js et Node.js. De la conception de la base de données au déploiement, je crée des applications performantes et évolutives, parfaitement adaptées à vos besoins métier.",
        icon_name: "Code2",
        order_index: 1,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      },
      {
        id: "e870eee6-f694-44df-a389-00a9d73cd670",
        title: "Développement Frontend",
        description: "Création d'interfaces utilisateur esthétiques et réactives avec React, Vue ou JavaScript pur. Maîtrise des frameworks CSS modernes, des animations et garantie d'une intégration parfaite au pixel près, compatible avec tous les appareils.",
        icon_name: "Layout",
        order_index: 2,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      },
      {
        id: "94dd7c8e-ad88-407d-bdfc-0eda09b300e0",
        title: "Développement Backend",
        description: "Conception d'applications serveur robustes et d'API RESTful avec Node.js, Express et PostgreSQL. Priorité à la sécurité, à la scalabilité et aux bonnes pratiques d'architecture pour des bases de code maintenables.",
        icon_name: "Server",
        order_index: 3,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      },
      {
        id: "fda30722-cfdf-4c34-a4ba-f51cae5e50d0",
        title: "Conception UI/UX",
        description: "Conception d'expériences utilisateur intuitives axées sur l'ergonomie et l'accessibilité. Création de wireframes, de prototypes et de maquettes haute fidélité qui traduisent les besoins métier en interfaces utilisateur agréables.",
        icon_name: "Palette",
        order_index: 4,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      },
      {
        id: "f4c0d390-e9bf-4d28-a189-bdd736d5978f",
        title: "Conception de bases de données",
        description: "Conception de schémas de bases de données performants pour PostgreSQL, MongoDB et autres systèmes. Optimisation des performances des requêtes, de l'intégrité des données et de la scalabilité pour répondre aux besoins croissants des applications.",
        icon_name: "Database",
        order_index: 5,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      },
      {
        id: "bcc92a58-fdd9-4627-8619-b6e5868e4843",
        title: "DevOps et Déploiement",
        description: "Mise en place de pipelines CI/CD, de conteneurisation avec Docker et de déploiement cloud sur AWS, Vercel ou d'autres plateformes. Garantie de déploiements fluides et automatisés et de systèmes de surveillance robustes.",
        icon_name: "Rocket",
        order_index: 6,
        created_at: "2025-10-30T13:05:52.968357+00:00"
      }
    ]);
  }, []);

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
            Ce que je propose
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            Des solutions de développement complètes pour donner vie à vos idées
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon_name);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-8 group"
              >
                <motion.div
                  className="w-16 h-16 glass rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
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
