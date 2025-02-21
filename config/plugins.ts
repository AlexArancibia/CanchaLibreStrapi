export default ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwtSecret: env("JWT_SECRET"),
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          callbackUrl: "https://canchalibrecms.emetstudio.com/api/connect/google/callback", // URL del backend
          scope: ["email", "profile"], // Scopes solicitados
        },
      },
    },
  },
});