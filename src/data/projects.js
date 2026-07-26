// ============================================
// PROJECTS DATA — Based on Rand Jelo's CV
// ============================================

export const projects = [
  {
    id: 1,
    title: 'Georgio Bandera',
    category: 'Full-Stack',
    description:
      'A high-performance, dual-language (English/Swedish) headless e-commerce platform built for scale. Custom Next.js 14 App Router architecture with sub-second page loads, complex Size/Color variant inventory, multi-threshold regional shipping, and a fully custom admin dashboard. Self-hosted on Cloudflare Pages with Stripe + PayPal checkout.',
    tech: ['Next.js 14', 'TypeScript', 'Cloudflare D1', 'Cloudflare R2', 'Stripe', 'PayPal', 'Tailwind CSS'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    image: 'https://placehold.co/600x400/a855f7/ffffff?text=Georgio+Bandera',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo/Georgiobandera1',
    featured: true,
  },
  {
    id: 2,
    title: 'ToolHub',
    category: 'Full-Stack',
    description:
      'A full-stack eCommerce platform for browsing and purchasing high-quality tools, with user accounts, wishlist, product reviews, and Stripe checkout. Built with Django REST Framework and PostgreSQL, with Cloudinary image hosting and deployed on Heroku. Includes full CRUD for products, reviews, cart, and a user dashboard.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Cloudinary', 'Stripe', 'Bootstrap 5', 'Heroku'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    image: 'https://placehold.co/600x400/22d3ee/ffffff?text=ToolHub',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo/ToolHub',
    featured: true,
  },
  {
    id: 3,
    title: 'Flavour Vault',
    category: 'Full-Stack',
    description:
      'A recipe-sharing platform where users can publish, browse, and review recipes. Search by tags, categories, or ingredients, upload dish photos, and manage your own recipe collection. Built with Django REST Framework, PostgreSQL, and Cloudinary, deployed on Heroku with full CRUD for recipes and reviews.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Cloudinary', 'Bootstrap', 'Heroku'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Flavour+Vault',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo/FlavourVault',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Finder',
    category: 'Web App',
    description:
      'An interactive weather app providing current conditions, a scrollable hourly forecast, and clothing advice based on temperature and weather. Features a geolocation modal (with London fallback), responsive design, and a toggle between Today\'s Highlights and Hourly Forecast. Built with vanilla JavaScript and the OpenWeatherMap API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API', 'Geolocation', 'Font Awesome'],
    gradient: 'from-blue-500 via-sky-500 to-teal-500',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Weather+Finder',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Rand-Jelo/weather-website',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  'Full-Stack',
  'Web App',
];