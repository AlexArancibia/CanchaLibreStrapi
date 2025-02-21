export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('', 'https://canchalibrecms.emetstudio.com'),
  proxy: true,  // Indica que está detrás de un proxy
  trustProxy: true, // Asegura que reconozca la conexión HTTPS
  app: {
    keys: env.array('APP_KEYS'),
  },
  settings: {
    session: {
      enabled: true,
      secure: false, // Cambiar a `false` si sigue fallando
    },
  },
});
