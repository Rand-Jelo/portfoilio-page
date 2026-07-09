// ============================================
// PROJECTS DATA — Based on Rand Jelo's CV
// ============================================

export const projects = [
  {
    id: 1,
    title: 'Georgio Bandera',
    category: 'Full-Stack',
    description:
      'A premium headless e-commerce platform with dual-language support (English/Swedish), custom admin dashboard, and sub-second page loads. Built with Next.js 14 SSR achieving 100/100 Lighthouse scores. Features multi-threshold shipping calculation, dependent product variant system (Size/Color stock tracking), and Stripe + PayPal payment integration.',
    tech: ['Next.js 14', 'TypeScript', 'Cloudflare D1', 'Stripe', 'PayPal', 'Tailwind CSS'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    image: 'https://placehold.co/600x400/a855f7/ffffff?text=Georgio+Bandera',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo',
    featured: true,
  },
  {
    id: 2,
    title: 'ToolHub',
    category: 'Web App',
    description:
      'An all-in-one developer utility hub featuring a collection of handy tools — JSON formatter, base64 encoder/decoder, color picker, and more. Built with a clean, intuitive interface for maximum productivity.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    image: 'https://placehold.co/600x400/22d3ee/ffffff?text=ToolHub',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo',
    featured: true,
  },
  {
    id: 3,
    title: 'Flavour Vault',
    category: 'Web App',
    description:
      'A recipe discovery and management app that lets users explore curated recipes, save favorites, and search by ingredient. Includes a beautiful card-based UI with filtering and sorting capabilities.',
    tech: ['React', 'Tailwind CSS', 'REST API', 'Context API'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Flavour+Vault',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Website',
    category: 'Web App',
    description:
      'A real-time weather forecasting application with location-based search, 7-day forecasts, and dynamic backgrounds that change based on weather conditions. Clean, data-rich, and beautifully animated.',
    tech: ['React', 'Tailwind CSS', 'OpenWeather API', 'Geolocation'],
    gradient: 'from-blue-500 via-sky-500 to-teal-500',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Weather+Website',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  'Full-Stack',
  'Web App',
];