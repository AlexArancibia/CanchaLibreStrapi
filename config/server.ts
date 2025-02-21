export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://canchalibrecms.emetstudio.com', // URL con HTTPS
  proxy: true,  // Indica que está detrás de un proxy
  trustProxy: true, // Asegura que reconozca la conexión HTTPS
  app: {
    keys: env.array('APP_KEYS'),
  },
});
