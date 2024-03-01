import { text, varchar, timestamp, pgEnum, pgTable } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("users", {
  id: varchar("id", {
    // ULID
    length: 26,
  })
    .primaryKey()
    .notNull(),
  auth_id: varchar("auth_id", {
    length: 12,
  })
    .unique()
    .notNull(),
  handle: text("handle").unique().notNull(),
  screen_name: text("screen_name").notNull(),
  bio: text("bio").notNull(),
  created_at: timestamp("created_at").notNull(),
  updated_at: timestamp("updated_at").notNull(),
  role: roleEnum("role").notNull(),
});
