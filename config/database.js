module.exports = ({ env }) => ({
  //preview
  // connection: {
  //   client: 'postgres',
  //   connection: {
  //     host: env('PGHOST', '127.0.0.1'),
  //     port: env.int('PGPORT', 5432),
  //     database: env('PGDATABASE', 'strapi'),
  //     user: env('PGUSER', 'strapi'),
  //     password: env('PGPASSWORD', 'password'),
  //     ssl: env.bool(true),
  //   },
  // },
  //dev
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'strapi'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '1234'),
      ssl: env.bool(true),
    },
  },
});
