import { motion } from 'framer-motion';

import config from '../../portfolio.config';

export const Footer = () => {
  return (
    <footer className="relative border-t border-dark-800 bg-dark-950">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {config.social.map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-lg"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} className="text-dark-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-dark-400 text-sm">
              Conçu et développé avec passion
            </p>
            <p className="text-dark-500 text-xs mt-2">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

