module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '89f995fe524b05d4b0c8ddf26245c6d1'),
  },
});
