import pg from "pg";
import { db_database, db_host, db_password, db_user } from "../env/env";

export const createDBPool = () => {
  return new pg.Pool({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
  });
};
