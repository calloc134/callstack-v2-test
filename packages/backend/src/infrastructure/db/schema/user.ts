import { text, timestamp, pgEnum, pgTable } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  auth_id: text("auth_id").unique().notNull(),
  handle: text("handle").unique().notNull(),
  screen_name: text("screen_name").notNull(),
  bio: text("bio").notNull(),
  created_at: timestamp("created_at").notNull(),
  updated_at: timestamp("updated_at").notNull(),
  role: roleEnum("role").notNull(),
});
