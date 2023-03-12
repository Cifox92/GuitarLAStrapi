module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfp190p4rebfdaqobn1g-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_08pr'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'sW2oJHx7Ueo40Dn0P68XZZGzvE40M81D'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
