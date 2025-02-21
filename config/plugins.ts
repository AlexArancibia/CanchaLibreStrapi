module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET'),
      session: {
        cookie: {
          secure: false, // Asegúrate de que esté en false
        },
      },
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: "https://canchalibrecms.emetstudio.com/api/connect/google/callback",
        },
      },
      
    },
  },
});
