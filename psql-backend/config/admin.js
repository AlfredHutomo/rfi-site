module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea9dcbdfdce5e06218baf35bc646c81b'),
  },
});
