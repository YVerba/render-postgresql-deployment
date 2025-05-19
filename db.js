import { Pool } from "pg";

// const pool = new Pool({
//   user: "yarik_verba",
//   password: "postgres",
//   host: "localhost",
//   port: 5432,
//   database: "postgres"
// });

const pool = new Pool({
  user: "render_postgresql_rmgs_user",
  password: "PNS8S0Is414WAa4MHgkZENpccYEYUZF1",
  host: "dpg-d0lir31r0fns738e5udg-a.oregon-postgres.render.com",
  port: 5432,
  database: "render_postgresql_rmgs"
});

export default pool;
