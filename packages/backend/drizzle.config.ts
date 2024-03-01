import type { Config } from "drizzle-kit";
export default {
  schema: "./src/infrastructure/db/schema",
  out: "./src/infrastructure/db/generated",
  driver: "pg",
  dbCredentials: {
    host: process.env.POSTGRES_HOST || "localhost",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB || "db",
  },
} satisfies Config;
