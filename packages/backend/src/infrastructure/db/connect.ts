import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { db_database, db_host, db_password, db_user } from "../env/env";

export const createDBClient = () => {
  const pool = new Pool({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
  });

  return drizzle(pool);
};
