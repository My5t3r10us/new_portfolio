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
        description: `Une boîte à outils complète de technologies modernes que j'utilise pour créer des expériences numériques`,
        stack: [
            {
                title: 'Front-end',
                techs: [
                    { name: 'React.js' },
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
                    { name: 'Express.js' },
                    { name: 'Nuxt.js' },
                    { name: 'RESTful APIs' },
                    { name: 'PHP' },
                ],
            },
            {
                title: 'Base de données',
                techs: [
                    { name: 'MariaDB' },
                    { name: 'PostgreSQL' },
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
                description: "Création d'applications web complètes et performantes, de la conception au déploiement (React, Next.js, Node.js).",
                icon_name: "Code2",
                order_index: 1,
            },
            {
                title: "Développement Frontend",
                description: "Interfaces modernes, réactives et pixel-perfect adaptées à tous les supports (React, Vue).",
                icon_name: "Layout",
                order_index: 2,
            },
            {
                title: "Développement Backend",
                description: "API RESTful robustes, sécurisées et scalables (Node.js, Express, PostgreSQL).",
                icon_name: "Server",
                order_index: 3,
            },
            {
                title: "Conception UI/UX",
                description: "Design d'expériences intuitives et accessibles, du wireframe au prototype haute fidélité.",
                icon_name: "Palette",
                order_index: 4,
            },
            {
                title: "Conception de bases de données",
                description: "Architecture de données performante et optimisée pour la rapidité et l'intégrité (SQL/NoSQL).",
                icon_name: "Database",
                order_index: 5,
            },
            {
                title: "DevOps et Déploiement",
                description: "Pipelines CI/CD, Docker et déploiement cloud automatisé (AWS, Vercel) pour une mise en prod fluide.",
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
            // {
            //     title: "E-Commerce Platform",
            //     description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and an intuitive admin dashboard. Features include product filtering, shopping cart functionality, order tracking, and customer reviews. Built with a focus on performance and user experience.",
            //     short_description: "Modern e-commerce platform with real-time inventory and secure payments",
            //     tech_stack: [
            //         "React",
            //         "Node.js",
            //         "Express",
            //         "PostgreSQL",
            //         "Stripe",
            //         "Redis"
            //     ],
            //     image_url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
            //     live_url: "https://example.com",
            //     github_url: "https://github.com",
            //     category: "fullstack",
            //     featured: true,
            //     order_index: 1,
            // },
            {
                title: "Portfolio",
                description: "Portfolio moderne, avec motion design, responsive et avec un design minimaliste.",
                short_description: "Portfolio moderne, avec motion design, responsive et avec un design minimaliste.",
                tech_stack: [
                    "React",
                    "Framer-motion",
                    "Tailwind CSS",
                    "Vite.js"
                ],
                image_url: "./images/hero_portfolio.png",
                live_url: "https://baptistemoine.dev",
                github_url: "https://github.com/My5t3r10us/new_portfolio",
                category: "fullstack",
                featured: true,
                order_index: 1,
            },
            {
                title: "Ancien Portfolio",
                description: "Portfolio avec style brutaliste et avec un design minimaliste.",
                short_description: "Portfolio avec style brutaliste et avec un design minimaliste.",
                tech_stack: [
                    "Vue.js",
                    "Nuxt",
                    "Tailwind CSS",
                    "Vite.js"
                ],
                image_url: "./images/hero_old_portfolio.png",
                live_url: "https://old.baptistemoine.dev",
                // github_url: "https://github.com/My5t3r10us/new_portfolio",
                category: "fullstack",
                featured: true,
                order_index: 2,
            },
        ]
    },
    experience: {
        label: 'Parcours professionnel',
        titre: 'Expérience',
        description: 'Mon parcours professionnel dédié à la création de solutions innovantes',
        data: [
            {
                company: "Car et Bus Maintenance",
                role: "Aternant développeur applicatif",
                description: "Alternant développeur applicatif en alternance pour 12 mois.",
                location: "Rouillon",
                start_date: "2025-09-01",
                end_date: "",
                technologies: [
                    "React.js",
                    "Framer-motion",
                    "Tailwind CSS",
                    "Vite.js",
                    "Node.js",
                    "Express.js",
                    "PostgreSQL",
                    "Microsoft SQL Server",
                ],
                order_index: 1,
            },
            {
                company: "Voxymore",
                role: "Aternant Web Concepteur",
                description: "Alternant Web Concepteur en alternance 2 ans.",
                location: "Rouillon",
                start_date: "2025-09-01",
                end_date: "2023-09-01",
                technologies: [
                    "React.js",
                    "Vue.js",
                    "Nuxt",
                    "LitElement",
                    "Tailwind CSS",
                    "Vite.js",
                    "Node.js",
                    "Express.js"
                ],
                order_index: 2,
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
