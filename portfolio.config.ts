import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const config = {
    site: {
        name: 'Portfolio',
    },
    navigation: {
        navItems: [
            { id: 'home', label: 'Accueil' },
            { id: 'stack', label: 'Technologies' },
            { id: 'services', label: 'Services' },
            { id: 'projects', label: 'Projets' },
            { id: 'experience', label: 'Expérience' },
            { id: 'contact', label: 'Contact' },
        ]
    },
    hero: {
        roles: [
            'Développement Full-Stack',
            'Développement Frontend',
            'Développement Backend',
            'Conception UI/UX',
            'Conception de bases de données',
            'DevOps et Déploiement',
        ],
        label: 'Bienvenue sur mon Portfolio',
        titre: 'Baptiste Moine',
        description: `Développeur web fullstack passionné par la création d'applications intuitives et performantes. Je suis prêt à transformer vos idées en projets web innovant.`,
    },
    tech_stack: {
        label: 'Expertise Technique',
        titre: 'Stack Technologique',
        description: `Une boîte à outils complète de technologies modernes que j'utilise pour créer des expériences numériques exceptionnelles`,
        stack: [
            {
                title: 'Front-end',
                techs: [
                    { name: 'React' },
                    { name: 'Vue.js' },
                    { name: 'Next.js' },
                    { name: 'TypeScript' },
                    { name: 'Tailwind CSS' },
                ],
            },
            {
                title: 'Back-end',
                techs: [
                    { name: 'Node.js' },
                    { name: 'Express' },
                    { name: 'Nuxt' },
                    { name: 'RESTful APIs' },
                    { name: 'PHP' },
                ],
            },
            {
                title: 'Base de données',
                techs: [
                    { name: 'MariaDB' },
                    { name: 'MongoDB' },
                    { name: 'Redis' },
                    { name: 'Supabase' },
                ],
            },
            {
                title: 'Autres',
                techs: [
                    { name: 'Git' },
                    { name: 'Vercel' },
                    { name: 'Python' },
                    { name: 'Supabase' },
                    { name: 'UI/UX' },
                ],
            },
        ],
        stats: [
            {
                label: 'Projets Complétés',
                value: '10+'
            },
            {
                label: 'Années d\'Expériences',
                value: '3+'
            }
        ]
    },
    services: {
        label: 'Ce que je propose',
        titre: 'Services',
        description: `Des solutions de développement complètes pour donner vie à vos idées`,
        data: [
            {
                title: "Développement Full-Stack",
                description: "Développement d'applications web complètes avec des frameworks modernes comme React, Vue, Next.js et Node.js. De la conception de la base de données au déploiement, je crée des applications performantes et évolutives, parfaitement adaptées à vos besoins métier.",
                icon_name: "Code2",
                order_index: 1,
            },
            {
                title: "Développement Frontend",
                description: "Création d'interfaces utilisateur esthétiques et réactives avec React, Vue ou JavaScript pur. Maîtrise des frameworks CSS modernes, des animations et garantie d'une intégration parfaite au pixel près, compatible avec tous les appareils.",
                icon_name: "Layout",
                order_index: 2,
            },
            {
                title: "Développement Backend",
                description: "Conception d'applications serveur robustes et d'API RESTful avec Node.js, Express et PostgreSQL. Priorité à la sécurité, à la scalabilité et aux bonnes pratiques d'architecture pour des bases de code maintenables.",
                icon_name: "Server",
                order_index: 3,
            },
            {
                title: "Conception UI/UX",
                description: "Conception d'expériences utilisateur intuitives axées sur l'ergonomie et l'accessibilité. Création de wireframes, de prototypes et de maquettes haute fidélité qui traduisent les besoins métier en interfaces utilisateur agréables.",
                icon_name: "Palette",
                order_index: 4,
            },
            {
                title: "Conception de bases de données",
                description: "Conception de schémas de bases de données performants pour PostgreSQL, MongoDB et autres systèmes. Optimisation des performances des requêtes, de l'intégrité des données et de la scalabilité pour répondre aux besoins croissants des applications.",
                icon_name: "Database",
                order_index: 5,
            },
            {
                title: "DevOps et Déploiement",
                description: "Mise en place de pipelines CI/CD, de conteneurisation avec Docker et de déploiement cloud sur AWS, Vercel ou d'autres plateformes. Garantie de déploiements fluides et automatisés et de systèmes de surveillance robustes.",
                icon_name: "Rocket",
                order_index: 6,
            }
        ]
    },
    projects: {
        label: 'Portfolio',
        titre: 'Projets mis en avant',
        description: 'Une sélection de mes réalisations récentes et de solutions créatives',
        data: [
            {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and an intuitive admin dashboard. Features include product filtering, shopping cart functionality, order tracking, and customer reviews. Built with a focus on performance and user experience.",
                short_description: "Modern e-commerce platform with real-time inventory and secure payments",
                tech_stack: [
                    "React",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Stripe",
                    "Redis"
                ],
                image_url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
                live_url: "https://example.com",
                github_url: "https://github.com",
                category: "fullstack",
                featured: true,
                order_index: 1,
            },
        ]
    },
    experience: {
        label: 'Parcours professionnel',
        titre: 'Expérience',
        description: 'Mon parcours professionnel dédié à la création de solutions innovantes',
        data: [
            {
                company: "Tech Innovators",
                role: "Senior Full-Stack Developer",
                description: "Led development of multiple client projects using React, Node.js, and PostgreSQL. Architected scalable microservices, mentored junior developers, and established best practices for code quality and testing. Delivered projects consistently on time with 99.9% uptime.",
                location: "San Francisco, CA",
                start_date: "2021-06-01",
                end_date: "",
                technologies: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "AWS",
                    "Docker"
                ],
                order_index: 1,
            }
        ]
    },
    contact: {
        label: 'Prendre contact',
        titre: 'Me contacter',
        description: 'Vous avez un projet en tête ? Discutons de la façon dont nous pouvons travailler ensemble',
        data: [
            {
                icon: Mail,
                title: 'Email',
                value: 'v.baptiste.moine@gmail.com',
                link: 'mailto:v.baptiste.moine@gmail.com',
            },
            {
                icon: Github,
                title: 'GitHub',
                value: 'github.com/My5t3r10us',
                link: 'https://github.com/My5t3r10us',
            },
            {
                icon: Linkedin,
                title: 'LinkedIn',
                value: 'linkedin.com/in/baptiste-moine',
                link: 'https://linkedin.com/in/baptiste-moine',
            },
            {
                icon: Phone,
                title: 'Téléphone',
                value: '+33 7 68 99 78 94',
                link: 'tel:+33768997894',
            },
        ]
    },
    social: [
        { icon: Github, href: 'https://github.com/My5t3r10us' },
        { icon: Linkedin, href: 'https://linkedin.com/in/baptiste-moine' },
        { icon: Mail, href: 'mailto:v.baptiste.moine@gmail.com' },
        { icon: Phone, href: 'tel:+33768997894' },
    ]
}

export default config;