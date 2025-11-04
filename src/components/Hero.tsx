import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
    'Développement Full-Stack',
    'Développement Frontend',
    'Développement Backend',
    'Conception UI/UX',
    'Conception de bases de données',
    'DevOps et Déploiement',
];

export const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-background" />

            <div className="absolute inset-0">
                {[...Array(150)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: Math.random() * 0.5 + 0.2,
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            opacity: [null, Math.random() * 0.5 + 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 border border-dark-800/70 rounded-full"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
                            scale: { duration: 5 + i * 2, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        style={{
                            width: `${(i + 1) * 200}px`,
                            height: `${(i + 1) * 200}px`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="text-dark-400 text-sm md:text-base font-medium tracking-wider uppercase">
                            Bienvenue sur mon Portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-gradient">Baptiste Moine</span>
                    </motion.h1>

                    <motion.div
                        className="h-16 md:h-20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.span
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-2xl md:text-4xl text-dark-300 font-light"
                        >
                            {roles[currentRole]}
                        </motion.span>
                    </motion.div>

                    <motion.p
                        className="max-w-2xl mx-auto text-dark-400 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Développeur web fullstack passionné par la création d'applications intuitives et performantes.
                        Je suis prêt à transformer vos idées en projets web innovant.
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-4 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-white text-dark-950 rounded-lg font-semibold hover:shadow-glow-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Mes projets
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 glass glass-hover rounded-lg font-semibold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Me contacter
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center gap-6 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                    >
                        {[
                            { icon: Github, href: 'https://github.com/My5t3r10us' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/baptiste-moine' },
                            { icon: Mail, href: 'mailto:v.baptiste.moine@gmail.com' },
                            { icon: Phone, href: 'tel:+33768997894' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass glass-hover rounded-lg"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={20} className="text-dark-300" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToSection('stack')}
                className="absolute bottom-8 left-[49%] -translate-x-1/2 flex "
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={32} className="text-dark-400" />
            </motion.button>
        </section>
    );
};
