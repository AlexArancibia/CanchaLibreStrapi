export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https:'],
        },
      },
    },
  },
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: true, // Cookies seguras solo en producción
        sameSite: 'lax', // Permite cookies en entornos locales
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:1337', // Frontend local
        'https://canchalibrecms.emetstudio.com', // Backend de Strapi
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];