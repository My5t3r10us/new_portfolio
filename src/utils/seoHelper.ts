/**
 * SEO Helper Utilities
 * Fonctions utilitaires pour optimiser le SEO de l'application
 */

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

/**
 * Génère un titre SEO optimisé
 * @param pageName Nom de la page
 * @param includeBase Inclure le nom de base
 */
export const generateTitle = (pageName?: string, includeBase = true): string => {
  const baseName = 'Baptiste Moine - Développeur Web Full-Stack';
  if (!pageName) return baseName;
  return includeBase ? `${pageName} | ${baseName}` : pageName;
};

/**
 * Génère une description SEO optimisée
 * @param description Description personnalisée
 * @param maxLength Longueur maximale (155-160 caractères recommandés)
 */
export const generateDescription = (description: string, maxLength = 160): string => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

/**
 * Génère les mots-clés SEO à partir d'un tableau
 * @param keywords Tableau de mots-clés
 */
export const generateKeywords = (keywords: string[]): string => {
  return keywords.join(', ');
};

/**
 * Génère l'URL canonique
 * @param path Chemin de la page
 */
export const generateCanonicalUrl = (path = ''): string => {
  const baseUrl = 'https://baptistemoine.fr';
  return `${baseUrl}${path}`;
};

/**
 * Génère l'URL de l'image Open Graph
 * @param imagePath Chemin de l'image
 */
export const generateOgImage = (imagePath = '/og-image.jpg'): string => {
  const baseUrl = 'https://baptistemoine.fr';
  return `${baseUrl}${imagePath}`;
};

/**
 * Crée des données structurées pour un projet
 * @param project Données du projet
 */
export const generateProjectStructuredData = (project: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  technologies: string[];
  datePublished?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    url: project.url,
    keywords: project.technologies.join(', '),
    author: {
      '@type': 'Person',
      name: 'Baptiste Moine',
      url: 'https://baptistemoine.fr',
    },
    datePublished: project.datePublished || new Date().toISOString(),
  };
};

/**
 * Crée des données structurées pour un article de blog
 * @param article Données de l'article
 */
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: 'Baptiste Moine',
      url: 'https://baptistemoine.fr',
    },
    publisher: {
      '@type': 'Person',
      name: 'Baptiste Moine',
      url: 'https://baptistemoine.fr',
    },
    keywords: article.keywords?.join(', '),
  };
};

/**
 * Crée des breadcrumbs structurés
 * @param items Items du breadcrumb
 */
export const generateBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Ajoute des données structurées à la page
 * @param data Données structurées (objet JSON)
 */
export const addStructuredData = (data: object): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Extrait les mots-clés principaux d'un texte
 * @param text Texte source
 * @param count Nombre de mots-clés à extraire
 */
export const extractKeywords = (text: string, count = 10): string[] => {
  // Mots à ignorer (stop words en français)
  const stopWords = new Set([
    'le',
    'la',
    'les',
    'un',
    'une',
    'des',
    'de',
    'du',
    'à',
    'au',
    'et',
    'ou',
    'mais',
    'donc',
    'pour',
    'dans',
    'sur',
    'avec',
    'sans',
    'sous',
    'par',
    'ce',
    'cet',
    'cette',
    'ces',
    'mon',
    'ma',
    'mes',
    'ton',
    'ta',
    'tes',
    'son',
    'sa',
    'ses',
  ]);

  // Nettoyer et tokeniser le texte
  const words = text
    .toLowerCase()
    .replace(/[^\w\sàâäéèêëïîôùûüÿç]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));

  // Compter les occurrences
  const wordCount = new Map<string, number>();
  words.forEach((word) => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });

  // Trier par fréquence et retourner les plus fréquents
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map((entry) => entry[0]);
};

/**
 * Valide une URL
 * @param url URL à valider
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Génère un slug SEO-friendly à partir d'un titre
 * @param title Titre source
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Retirer les accents
    .replace(/[^\w\s-]/g, '') // Retirer caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer espaces par tirets
    .replace(/-+/g, '-') // Éviter tirets multiples
    .trim();
};

/**
 * Calcule le temps de lecture estimé
 * @param text Texte à analyser
 * @param wordsPerMinute Vitesse de lecture (par défaut 200 mots/min)
 */
export const calculateReadingTime = (
  text: string,
  wordsPerMinute = 200
): number => {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
