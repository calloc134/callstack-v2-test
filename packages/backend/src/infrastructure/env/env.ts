export const db_host = process.env.POSTGRES_HOST || "localhost";
export const db_user = process.env.POSTGRES_USER;
export const db_password = process.env.POSTGRES_PASSWORD;
export const db_database = process.env.POSTGRES_DB || "db";
export const schema_path = process.env.SCHEMA_PATH || "";
