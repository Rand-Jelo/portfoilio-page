// ============================================
// PROJECTS DATA — Based on Rand Jelo's CV
// ============================================

export const projects = [
  {
    id: 1,
    title: 'Georgio Bandera',
    category: 'Full-Stack',
    description:
      'A production-ready, dual-language e-commerce platform that handles real inventory, regional shipping rules, and Stripe + PayPal payments. Built to prove I can architect and ship a complete full-stack product from database to checkout.',
    tech: ['Next.js 14', 'TypeScript', 'Cloudflare D1', 'Cloudflare R2', 'Stripe', 'PayPal', 'Tailwind CSS'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgeorgiobandera.se?w=600&h=400',
    liveUrl: 'https://georgiobandera.se',
    githubUrl: 'https://github.com/Rand-Jelo/Georgiobandera1',
    featured: true,
  },
  {
    id: 2,
    title: 'ToolHub',
    category: 'Full-Stack',
    description:
      'A complete e-commerce solution for selling tools online, featuring user accounts, wishlists, product reviews, and Stripe checkout. Demonstrates full CRUD, relational database design, and secure payment integration.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Cloudinary', 'Stripe', 'Bootstrap 5', 'Heroku'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftool-hub-f8ebaa947792.herokuapp.com%2F?w=600&h=400',
    liveUrl: 'https://tool-hub-f8ebaa947792.herokuapp.com/',
    githubUrl: 'https://github.com/Rand-Jelo/ToolHub',
    featured: true,
  },
  {
    id: 3,
    title: 'Flavour Vault',
    category: 'Full-Stack',
    description:
      'A community recipe platform with search, tags, photo uploads, and user collections. Shows I can build engaging user-generated content features with authentication, image handling, and a polished UI.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Cloudinary', 'Bootstrap', 'Heroku'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fflavour-vault-6970ed23d7f4.herokuapp.com%2F?w=600&h=400',
    liveUrl: 'https://flavour-vault-6970ed23d7f4.herokuapp.com/',
    githubUrl: 'https://github.com/Rand-Jelo/Flavour-Vault',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Finder',
    category: 'Web App',
    description:
      'A clean, responsive weather dashboard that uses geolocation and a third-party API to deliver real-time forecasts and practical clothing advice. Focused on UX, error handling, and mobile-first design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API', 'Geolocation', 'Font Awesome'],
    gradient: 'from-blue-500 via-sky-500 to-teal-500',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Frand-jelo.github.io%2FWeather-Webiste%2F?w=600&h=400',
    liveUrl: 'https://rand-jelo.github.io/Weather-Webiste/',
    githubUrl: 'https://github.com/Rand-Jelo/Weather-Webiste',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  'Full-Stack',
  'Web App',
];