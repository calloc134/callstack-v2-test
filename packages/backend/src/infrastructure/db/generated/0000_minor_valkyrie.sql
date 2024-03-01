DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(26) PRIMARY KEY NOT NULL,
	"auth_id" varchar(12) NOT NULL,
	"handle" text NOT NULL,
	"screen_name" text NOT NULL,
	"bio" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"role" "role" NOT NULL,
	CONSTRAINT "users_auth_id_unique" UNIQUE("auth_id"),
	CONSTRAINT "users_handle_unique" UNIQUE("handle")
);
