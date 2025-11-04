import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'votre.email@example.com',
      link: 'mailto:votre.email@example.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/votre-username',
      link: 'https://github.com/votre-username',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/votre-profil',
      link: 'https://linkedin.com/in/votre-profil',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 X XX XX XX XX',
      link: 'tel:+33XXXXXXXXX',
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
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
            Prendre contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Me contacter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            Vous avez un projet en tête ? Discutons de la façon dont nous pouvons travailler ensemble
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                target={contact.title !== 'Email' && contact.title !== 'Téléphone' ? '_blank' : undefined}
                rel={contact.title !== 'Email' && contact.title !== 'Téléphone' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass glass-hover rounded-2xl p-8 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-14 h-14 glass rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                  <Icon size={28} className="text-dark-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{contact.title}</h3>
                <p className="text-dark-400 group-hover:text-dark-300 transition-colors break-all">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
