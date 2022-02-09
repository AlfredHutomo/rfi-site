const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
  },
  settings: {
    forceMigration: false,
  },
  // TOTALLY OUTDATED DOCUMENTATION
  // defaultConnection: "default",
  // connections: {
  //   default: {
  //     connector: "bookshelf",
  //     settings: {
  //       client: "postgres",
  //       host: config.host,
  //       port: config.port,
  //       database: config.database,
  //       username: config.user,
  //       password: config.password,
  //       ssl: {
  //         rejectUnauthorized: false,
  //       },
  //     },
  //     options: {},
  //   },
  // },
});
