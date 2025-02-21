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
      secure: false, // Usa cookies seguras (solo funciona en HTTPS)
      sameSite: 'none', // Permite compartir cookies con el frontend
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